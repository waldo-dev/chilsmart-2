import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Facebook Pixel ID - Reemplaza con tu ID real
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '';

export const fbq = (...args) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq(...args);
  }
};

export const useFacebookPixel = () => {
  const router = useRouter();

  useEffect(() => {
    // Track page view on route change
    const handleRouteChange = (url) => {
      fbq('track', 'PageView');
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};

// Event tracking functions
// Note: When test_event_code is set in pixel initialization, all events are automatically marked as test events
export const trackEvent = (eventName, eventData = {}) => {
  fbq('track', eventName, eventData);
};

// Common events
export const trackContactFormSubmit = (formData = {}) => {
  trackEvent('Contact', {
    content_name: 'Contact Form',
    content_category: 'Form Submission',
    ...formData
  });
};

export const trackWhatsAppClick = () => {
  trackEvent('Contact', {
    content_name: 'WhatsApp Button',
    content_category: 'Social Contact'
  });
};

export const trackViewContent = (contentName, contentType = 'page') => {
  trackEvent('ViewContent', {
    content_name: contentName,
    content_type: contentType
  });
};

export const trackLead = (leadData = {}) => {
  trackEvent('Lead', {
    content_name: 'Lead Generated',
    ...leadData
  });
};

export const trackInitiateCheckout = () => {
  trackEvent('InitiateCheckout');
};

// Eventos estándar adicionales según documentación oficial de Facebook

/**
 * Trackear evento Schedule (Programar)
 * Reserva de una cita para visitar uno de tus establecimientos
 */
export const trackSchedule = (scheduleData = {}) => {
  trackEvent('Schedule', {
    content_name: 'Appointment Scheduled',
    ...scheduleData
  });
};

/**
 * Trackear evento CompleteRegistration (Completar registro)
 * Envío de información por parte de un cliente a cambio de un servicio
 */
export const trackCompleteRegistration = (registrationData = {}) => {
  trackEvent('CompleteRegistration', {
    content_name: 'Registration Completed',
    ...registrationData
  });
};

/**
 * Trackear evento SubmitApplication (Enviar solicitud)
 * Envío de una solicitud para recibir un producto, servicio o programa
 */
export const trackSubmitApplication = (applicationData = {}) => {
  trackEvent('SubmitApplication', {
    content_name: 'Application Submitted',
    ...applicationData
  });
};

/**
 * Trackear evento FindLocation (Buscar ubicación)
 * Cuando una persona busca uno de tus establecimientos
 */
export const trackFindLocation = (locationData = {}) => {
  trackEvent('FindLocation', {
    content_name: 'Location Search',
    ...locationData
  });
};

/**
 * Enviar evento a Facebook Conversions API (server-side)
 * Útil para mejorar la precisión del tracking y evitar bloqueos de ad blockers
 * 
 * @param {string} eventName - Nombre del evento estándar o personalizado
 * @param {object} eventData - Datos del evento (custom_data)
 * @param {object} userData - Datos del usuario (se hashean automáticamente)
 *   - email: Email del usuario (se hashea)
 *   - phone: Teléfono del usuario (se hashea)
 *   - first_name: Nombre (se hashea)
 *   - last_name: Apellidos (se hashea)
 *   - date_of_birth: Fecha de nacimiento YYYYMMDD (se hashea)
 *   - gender: Género 'm' o 'f' (se hashea)
 *   - city: Ciudad (se hashea)
 *   - state: Estado/Provincia (se hashea)
 *   - zip: Código postal (se hashea)
 *   - country: País código ISO de 2 letras (se hashea)
 * @param {object} options - Opciones adicionales
 *   - eventId: Identificador único del evento (para deduplicación con pixel). Si no se proporciona, se genera automáticamente
 *   - eventTime: Timestamp Unix del evento (puede ser hasta 7 días en el pasado). Si no se proporciona, usa el tiempo actual
 *   - testEventCode: Código de test event para pruebas (ej: 'TEST59121')
 */
export const trackServerEvent = async (eventName, eventData = {}, userData = {}, options = {}) => {
  try {
    const { eventId, eventTime, testEventCode } = options;
    
    const response = await fetch('/api/facebook-conversion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        eventData,
        userData,
        eventId,
        eventTime,
        testEventCode,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.warn('Failed to send server-side event to Facebook:', errorData);
    }
  } catch (error) {
    console.warn('Error sending server-side event to Facebook:', error);
  }
};

export default useFacebookPixel;

