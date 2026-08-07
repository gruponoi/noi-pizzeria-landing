import { whatsappUrl } from '../data/siteContent'

function FinalCTA() {
  return (
    <section className="final-cta section" aria-labelledby="final-cta-title">
      <div className="container final-cta__inner">
        <p className="eyebrow">Tu próxima pizza comienza aquí</p>
        <h2 id="final-cta-title">¿Listo para pedir?</h2>
        <p>Tu pizza comienza a prepararse desde el momento en que nos escribes por WhatsApp.</p>
        <a className="button button--primary" href={whatsappUrl} target="_blank" rel="noreferrer">
          Pedir por WhatsApp <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}

export default FinalCTA
