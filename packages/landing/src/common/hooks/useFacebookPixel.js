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

/**
 * Enviar evento a Facebook Conversions API (server-side)
 * Útil para mejorar la precisión del tracking y evitar bloqueos de ad blockers
 */
export const trackServerEvent = async (eventName, eventData = {}, userData = {}) => {
  try {
    const response = await fetch('/api/facebook-conversion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        eventData,
        userData,
      }),
    });

    if (!response.ok) {
      console.warn('Failed to send server-side event to Facebook');
    }
  } catch (error) {
    console.warn('Error sending server-side event to Facebook:', error);
  }
};

export default useFacebookPixel;

