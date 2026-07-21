import { whatsappUrl } from '../data/siteContent'

function WhatsAppButton() {
  return (
    <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Pedir por WhatsApp">
      <svg aria-hidden="true" viewBox="0 0 32 32"><path d="M16.1 3A12.8 12.8 0 0 0 5.2 22.5L3.5 29l6.7-1.7A12.9 12.9 0 1 0 16.1 3Zm0 23.5a10.6 10.6 0 0 1-5.4-1.5l-.4-.2-4 .9 1.1-3.8-.3-.4a10.7 10.7 0 1 1 9 5Zm5.8-8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7 0a8.7 8.7 0 0 1-2.6-1.6 9.7 9.7 0 0 1-1.8-2.2c-.2-.3 0-.5.1-.6l.5-.6.3-.6c.1-.2 0-.4 0-.6l-1-2.5c-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.6.1-1 .5-.3.4-1.3 1.3-1.3 3.1 0 1.9 1.4 3.7 1.6 4 .2.2 2.7 4.1 6.5 5.7.9.4 1.6.6 2.2.7.9.3 1.7.2 2.4.1.7-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4Z" /></svg>
      <span>Pedir</span>
    </a>
  )
}

export default WhatsAppButton
