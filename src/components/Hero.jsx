import VisualAsset from './VisualAsset'
import { visualAssets, whatsappUrl } from '../data/siteContent'

function PizzaArtwork() {
  return (
    <VisualAsset asset={visualAssets.hero} className="pizza-stage" imageClassName="pizza-stage__photo" eager>
      <div className="pizza-stage__glow" />
      <div className="pizza-stage__plate">
        <div className="pizza-illustration" aria-hidden="true">
          <span className="topping topping--1" />
          <span className="topping topping--2" />
          <span className="topping topping--3" />
          <span className="topping topping--4" />
          <span className="topping topping--5" />
          <span className="basil basil--1" />
          <span className="basil basil--2" />
        </div>
      </div>
      <p className="pizza-stage__note">Preparadas al momento · entregadas calientes</p>
    </VisualAsset>
  )
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__texture" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow"><span /> Dark kitchen · Loja</p>
          <h1>La pizza que<br /><em>Loja merece.</em></h1>
          <p className="hero__lead">Masa crocante, ingredientes generosos y ese sabor que convierte cualquier noche en un buen plan.</p>
          <div className="hero__actions">
            <a className="button button--primary" href={whatsappUrl} target="_blank" rel="noreferrer">Pedir por WhatsApp <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#sabores">Ver sabores <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero__meta" aria-label="Información del servicio">
            <span><i aria-hidden="true">⌖</i> Delivery en Loja</span>
            <span><i aria-hidden="true">◷</i> Hasta las 22:00</span>
          </div>
        </div>
        <PizzaArtwork />
      </div>
      <div className="hero__marquee" aria-hidden="true">
        <div>PORQUE LOJA SE LO MERECE <span>✦</span> PIZZAS HECHAS AL MOMENTO <span>✦</span> DELIVERY EN LOJA <span>✦</span></div>
      </div>
    </section>
  )
}

export default Hero
