/**
 * Facebook Conversions API - Server-side event tracking
 * 
 * Este endpoint permite enviar eventos a Facebook desde el servidor,
 * complementando el pixel del cliente para mayor precisión.
 * 
 * IMPORTANTE: Este endpoint requiere FB_ACCESS_TOKEN en variables de entorno del servidor
 */

import crypto from 'crypto';

// Función para hashear datos con SHA256 (requerido por Facebook)
function hashData(data) {
  if (!data) return undefined;
  return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
}

export default async function handler(req, res) {
  // Solo permitir métodos POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const accessToken = process.env.FB_ACCESS_TOKEN;
  const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

  if (!accessToken || !pixelId) {
    console.warn('Facebook Conversions API: Missing access token or pixel ID');
    return res.status(200).json({ 
      success: false, 
      message: 'Facebook Conversions API not configured' 
    });
  }

  try {
    const { eventName, eventData, userData, eventId, eventTime, testEventCode } = req.body;

    if (!eventName) {
      return res.status(400).json({ error: 'eventName is required' });
    }

    // Validar y preparar event_time
    // El event_time puede ser anterior al momento de envío, pero no más de 7 días en el pasado
    const currentTime = Math.floor(Date.now() / 1000);
    const providedEventTime = eventTime || currentTime;
    const sevenDaysInSeconds = 7 * 24 * 60 * 60;
    const minAllowedTime = currentTime - sevenDaysInSeconds;

    if (providedEventTime < minAllowedTime) {
      return res.status(400).json({ 
        error: 'event_time cannot be more than 7 days in the past',
        provided: providedEventTime,
        minimum_allowed: minAllowedTime,
        current_time: currentTime
      });
    }

    // Generar event_id si no se proporciona (para deduplicación)
    // Facebook usa event_id y event_name para deduplicar eventos del pixel y del servidor
    const finalEventId = eventId || `${eventName}_${providedEventTime}_${Math.random().toString(36).substring(2, 15)}`;

    // Obtener información del cliente desde headers
    // IMPORTANTE: client_ip_address y client_user_agent NO deben ir hasheados según la documentación
    const clientIp = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.connection.remoteAddress;
    const userAgent = req.headers['user-agent'] || '';

    // Preparar user_data según la documentación oficial de Facebook
    // Campos que DEBEN ir hasheados: email, phone, first_name, last_name, date_of_birth, gender, city, state, zip, country
    // Campos que NO deben ir hasheados: client_ip_address, client_user_agent
    const hashedUserData = {};
    if (userData) {
      // Email - debe ir hasheado
      if (userData.email) {
        hashedUserData.em = hashData(userData.email);
      }
      
      // Teléfono - debe ir hasheado (solo números)
      if (userData.phone) {
        const cleanPhone = userData.phone.replace(/\D/g, '');
        if (cleanPhone) {
          hashedUserData.ph = hashData(cleanPhone);
        }
      }
      
      // Nombre - debe ir hasheado
      if (userData.first_name) {
        hashedUserData.fn = hashData(userData.first_name);
      }
      
      // Apellidos - debe ir hasheado
      if (userData.last_name) {
        hashedUserData.ln = hashData(userData.last_name);
      }
      
      // Fecha de nacimiento - debe ir hasheado (formato: YYYYMMDD)
      if (userData.date_of_birth) {
        hashedUserData.db = hashData(userData.date_of_birth);
      }
      
      // Género - debe ir hasheado (m o f)
      if (userData.gender) {
        hashedUserData.ge = hashData(userData.gender.toLowerCase());
      }
      
      // Ciudad - debe ir hasheado
      if (userData.city) {
        hashedUserData.ct = hashData(userData.city);
      }
      
      // Estado/Provincia - debe ir hasheado
      if (userData.state) {
        hashedUserData.st = hashData(userData.state);
      }
      
      // Código postal - debe ir hasheado
      if (userData.zip) {
        hashedUserData.zp = hashData(userData.zip);
      }
      
      // País - debe ir hasheado (código ISO de 2 letras, ej: CL, US)
      if (userData.country) {
        hashedUserData.country = hashData(userData.country.toUpperCase());
      }
    }

    // Preparar datos del evento para Conversions API
    // Según la documentación oficial: https://graph.facebook.com/{API_VERSION}/{PIXEL_ID}/events?access_token={TOKEN}
    const eventPayload = {
      event_name: eventName,
      event_time: providedEventTime,
      event_id: finalEventId, // Para deduplicación con eventos del pixel
      event_source_url: req.headers.referer || '',
      action_source: 'website',
      user_data: {
        // Estos campos NO deben ir hasheados según la documentación oficial
        client_ip_address: clientIp,
        client_user_agent: userAgent,
        // Campos hasheados (email, phone, nombre, etc.)
        ...hashedUserData,
      },
      custom_data: eventData || {},
    };

    // Agregar test_event_code si se proporciona (para testing)
    if (testEventCode) {
      eventPayload.test_event_code = testEventCode;
    }

    const eventDataForAPI = {
      data: [eventPayload],
    };

    // Enviar evento a Facebook Conversions API
    // El access_token va como query parameter según la documentación oficial
    // Se pueden enviar hasta 1000 eventos en un lote, pero recomendamos enviarlos inmediatamente
    const apiVersion = 'v18.0';
    const url = `https://graph.facebook.com/${apiVersion}/${pixelId}/events?access_token=${encodeURIComponent(accessToken)}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventDataForAPI),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Facebook Conversions API error:', result);
      return res.status(500).json({
        error: 'Failed to send event to Facebook',
        details: result,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Event sent to Facebook Conversions API',
      events_received: result.events_received || 0,
    });
  } catch (error) {
    console.error('Error in Facebook Conversions API:', error);
    return res.status(500).json({
      error: 'Failed to process conversion event',
      message: error.message,
    });
  }
}

