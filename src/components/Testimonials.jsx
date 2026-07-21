import SectionHeading from './SectionHeading'
import { testimonials } from '../data/siteContent'

function Testimonials() {
  return (
    <section className="testimonials section" id="opiniones">
      <div className="container">
        <SectionHeading eyebrow="Lo dicen nuestros clientes" title={<>Buenas pizzas.<br /><em>Mejores comentarios.</em></>} align="center" />
        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <figure className="quote-card" key={testimonial}>
              <div className="quote-card__stars" aria-label="5 de 5 estrellas">★★★★★</div>
              <blockquote>“{testimonial}”</blockquote>
              <figcaption><span>Comentario de cliente</span><b>0{index + 1}</b></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
