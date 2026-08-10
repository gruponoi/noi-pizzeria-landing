export function trackWhatsAppClick({ ctaLocation, ctaLabel }) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }

  try {
    window.gtag('event', 'whatsapp_click', {
      cta_location: ctaLocation,
      cta_label: ctaLabel,
      page_path: window.location.pathname,
    })
  } catch {
    // Analytics must never interfere with the link navigation.
  }
}
