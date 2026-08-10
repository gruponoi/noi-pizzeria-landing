import { trackWhatsAppClick } from '../analytics'

function WhatsAppLink({ ctaLocation, ctaLabel, onClick, children, ...props }) {
  const handleClick = (event) => {
    onClick?.(event)

    if (!event.defaultPrevented) {
      trackWhatsAppClick({ ctaLocation, ctaLabel })
    }
  }

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  )
}

export default WhatsAppLink
