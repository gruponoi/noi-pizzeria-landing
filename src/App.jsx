import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustSection from './components/TrustSection'
import Promotion from './components/Promotion'
import Flavors from './components/Flavors'
import ProductionCenter from './components/ProductionCenter'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido">
        <Hero />
        <TrustSection />
        <Promotion />
        <Flavors />
        <ProductionCenter />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
