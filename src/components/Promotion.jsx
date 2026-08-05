import VisualAsset from './VisualAsset'
import { visualAssets, whatsappUrl } from '../data/siteContent'

function Promotion() {
  return (
    <section className="promo section" id="promo">
      <div className="container">
        <div className="promo__card">
          <div className="promo__badge">LA FAVORITA<br />DE LOJA</div>
          <VisualAsset asset={visualAssets.promotion} className="promo__media">
            <div className="promo__media-mark"><strong>2 + 1</strong><span>EL PLAN COMPLETO</span></div>
          </VisualAsset>
          <div className="promo__copy">
            <p className="eyebrow">Promoción principal</p>
            <h2>El plan perfecto<br />para compartir</h2>
            <p>Elige tus sabores favoritos y nosotros nos encargamos de que lleguen calientes.</p>
          </div>
          <div className="promo__deal">
            <p><strong>2</strong> pizzas medianas</p>
            <span>+</span>
            <p>gaseosa de <strong>1 litro</strong></p>
          </div>
          <div className="promo__price">
            <span>TODO POR</span>
            <strong><sup>$</sup>12<small>.99</small></strong>
            <a className="button button--light" href={whatsappUrl} target="_blank" rel="noreferrer">Quiero esta promo <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <p className="promo__shipping">Costo de envío según ubicación · Consulta cobertura por WhatsApp</p>
      </div>
    </section>
  )
}

export default Promotion
