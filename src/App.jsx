import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Promotion from './components/Promotion'
import Flavors from './components/Flavors'
import ProductionCenter from './components/ProductionCenter'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido">
        <Hero />
        <Promotion />
        <Flavors />
        <ProductionCenter />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
