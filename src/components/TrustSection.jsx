import SectionHeading from './SectionHeading'

const trustBenefits = [
  { icon: '🍕', label: 'Masa de fermentación lenta' },
  { icon: '🧀', label: 'Mozzarella gratinada en cada pizza' },
  { icon: '🔥', label: 'Cocción en horno de piedra refractaria' },
  { icon: '🚚', label: 'Delivery coordinado en Loja' },
]

function TrustSection() {
  return (
    <section className="trust section" aria-labelledby="trust-title">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Nuestro compromiso"
          title={<span id="trust-title">¿Por qué elegir Noi?</span>}
          description="Cada pizza se prepara al momento en nuestro centro de producción especializado."
        />
        <div className="trust__grid">
          {trustBenefits.map((benefit) => (
            <article className="trust-card" key={benefit.label}>
              <span className="trust-card__icon" aria-hidden="true">{benefit.icon}</span>
              <h3>{benefit.label}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustSection
