import VisualAsset from './VisualAsset'
import WhatsAppLink from './WhatsAppLink'
import { navigation, visualAssets, whatsappNumber, whatsappUrl } from '../data/siteContent'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__cta">
        <p className="eyebrow">¿Ya elegiste tus sabores?</p>
        <h2>Esta noche<br /><em>se come pizza.</em></h2>
        <WhatsAppLink ctaLocation="footer" ctaLabel="Hacer mi pedido" className="button button--primary" href={whatsappUrl} target="_blank" rel="noreferrer">Hacer mi pedido <span aria-hidden="true">↗</span></WhatsAppLink>
      </div>
      <div className="container footer__main">
        <div className="footer__brand">
          <VisualAsset asset={visualAssets.logo} className="footer__logo">
            <strong>NOI</strong><span>PIZZERÍA</span>
          </VisualAsset>
          <small>Porque Loja se lo merece.</small>
        </div>
        <div><h3>Explora</h3>{navigation.slice(0, 4).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div>
        <div><h3>Servicio</h3><p>Delivery en Loja</p><p>Hasta las 22:00</p><p>Envío según ubicación</p></div>
        <div><h3>Pedidos</h3><WhatsAppLink ctaLocation="footer" ctaLabel="Contacto de pedidos" href={whatsappUrl} target="_blank" rel="noreferrer">+{whatsappNumber.slice(0, 3)} {whatsappNumber.slice(3, 6)} {whatsappNumber.slice(6, 9)} {whatsappNumber.slice(9)}</WhatsAppLink><p>Solo atención por delivery</p></div>
      </div>
      <div className="container footer__bottom"><span>© {new Date().getFullYear()} Noi Pizzería</span><span>Hecho con sabor en Loja, Ecuador.</span></div>
    </footer>
  )
}

export default Footer
