import SectionHeading from './SectionHeading'
import VisualAsset from './VisualAsset'
import { visualAssets, whatsappUrl } from '../data/siteContent'

function ProductionCenter() {
  return (
    <section className="production section" id="nosotros">
      <div className="container production__grid">
        <VisualAsset asset={visualAssets.productionCenter} className="production__visual">
          <div className="production__stamp"><strong>NOI</strong><span>HECHO EN LOJA</span></div>
          <div className="production__lines" />
          <p>Centro de<br />producción</p>
        </VisualAsset>
        <div className="production__content">
          <SectionHeading eyebrow="Así trabajamos" title={<>Centro de producción.<br /><em>Todo el sabor directo a tu puerta.</em></>} />
          <p>Somos una dark kitchen: un centro de producción diseñado para concentrarnos en lo importante — preparar pizzas deliciosas y entregarlas en tu puerta.</p>
          <ul>
            <li><span>01</span><div><strong>Preparación al momento</strong><small>Tu pedido entra, encendemos el horno y comienza la magia.</small></div></li>
            <li><span>02</span><div><strong>Empaque pensado para delivery</strong><small>Cuidamos cada pizza para que llegue caliente y en su punto.</small></div></li>
            <li><span>03</span><div><strong>Directo a tu ubicación</strong><small>Coordinamos la entrega contigo por WhatsApp.</small></div></li>
          </ul>
          <p className="production__notice">No contamos con atención en un local abierto al público.</p>
          <a className="button button--outline" href={whatsappUrl} target="_blank" rel="noreferrer">Coordinar mi pedido <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  )
}

export default ProductionCenter
