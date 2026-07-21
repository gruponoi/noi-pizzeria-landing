import SectionHeading from './SectionHeading'
import { flavors, whatsappUrl } from '../data/siteContent'

function Flavors() {
  return (
    <section className="flavors section" id="sabores">
      <div className="container">
        <SectionHeading eyebrow="Nuestros favoritos" title={<>Cuatro sabores.<br /><em>Cero dudas.</em></>} description="Clásicos que siempre funcionan, preparados con el sello de Noi." />
        <div className="flavors__grid">
          {flavors.map((flavor, index) => (
            <article className={`flavor-card flavor-card--${flavor.accent}`} key={flavor.name}>
              <div className="flavor-card__visual" aria-hidden="true">
                <span>{flavor.icon}</span>
                <b>0{index + 1}</b>
              </div>
              <div className="flavor-card__content">
                <h3>{flavor.name}</h3>
                <p>{flavor.description}</p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Pedir pizza ${flavor.name}`}>Pedir este sabor <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Flavors
