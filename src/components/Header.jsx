import { useState } from 'react'
import { navigation, whatsappUrl } from '../data/siteContent'

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Noi Pizzería, ir al inicio">
      <span className="brand__mark" aria-hidden="true"><span>N</span></span>
      <span className="brand__text"><strong>NOI</strong><small>PIZZERÍA</small></span>
    </a>
  )
}

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav id="main-navigation" className={`nav ${isOpen ? 'nav--open' : ''}`} aria-label="Navegación principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <a className="button button--small button--primary nav__order" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Pedir ahora
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
