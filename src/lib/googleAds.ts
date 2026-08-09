'use client';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const GOOGLE_ADS_CONVERSION_ID = 'AW-18374080715';

const WHATSAPP_CONVERSION_LABEL =
  'swq2CO_xkd4cEMvxuLlE';

export const trackWhatsAppConversion = () => {
  if (typeof window === 'undefined') {
    return;
  }

  if (typeof window.gtag !== 'function') {
    console.warn(
      'Google Ads gtag is not available yet.'
    );

    return;
  }

  window.gtag('event', 'conversion', {
    send_to: `${GOOGLE_ADS_CONVERSION_ID}/${WHATSAPP_CONVERSION_LABEL}`,
    value: 1.0,
    currency: 'INR',
  });

  console.log(
    'Google Ads WhatsApp conversion fired.'
  );
};