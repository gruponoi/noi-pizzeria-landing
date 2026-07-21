import SectionHeading from './SectionHeading'
import { faqs, whatsappUrl } from '../data/siteContent'

function FAQ() {
  return (
    <section className="faq section" id="preguntas">
      <div className="container faq__grid">
        <div>
          <SectionHeading eyebrow="Antes de pedir" title={<>Preguntas<br /><em>frecuentes.</em></>} description="Si tu duda no está aquí, escríbenos. Estamos para ayudarte." />
          <a className="text-link text-link--gold" href={whatsappUrl} target="_blank" rel="noreferrer">Hablar con Noi <span aria-hidden="true">↗</span></a>
        </div>
        <div className="faq__list">
          {faqs.map((faq, index) => (
            <details key={faq.question}>
              <summary><span>0{index + 1}</span>{faq.question}<i aria-hidden="true">+</i></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
