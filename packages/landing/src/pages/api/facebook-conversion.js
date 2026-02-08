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
    const { eventName, eventData, userData } = req.body;

    if (!eventName) {
      return res.status(400).json({ error: 'eventName is required' });
    }

    // Obtener información del cliente desde headers
    const clientIp = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.connection.remoteAddress;
    const userAgent = req.headers['user-agent'] || '';

    // Preparar user_data con datos hasheados (requerido por Facebook)
    const hashedUserData = {};
    if (userData) {
      if (userData.email) {
        hashedUserData.em = hashData(userData.email);
      }
      if (userData.phone) {
        // Remover caracteres no numéricos y hashear
        const cleanPhone = userData.phone.replace(/\D/g, '');
        if (cleanPhone) {
          hashedUserData.ph = hashData(cleanPhone);
        }
      }
    }

    // Preparar datos del evento para Conversions API
    const eventDataForAPI = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_source_url: req.headers.referer || '',
          action_source: 'website',
          user_data: {
            client_ip_address: clientIp,
            client_user_agent: userAgent,
            ...hashedUserData,
          },
          custom_data: eventData || {},
        },
      ],
      access_token: accessToken,
    };

    // Enviar evento a Facebook Conversions API
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${pixelId}/events`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventDataForAPI),
      }
    );

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

