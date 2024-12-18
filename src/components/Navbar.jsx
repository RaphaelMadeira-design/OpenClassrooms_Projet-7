import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <img src="./src/assets/logo.svg" alt="Logo Kasa"/>
      </div>
      <ul className='nav__menu'>
        <li>Accueil</li>
        <li>A propos</li>
      </ul>
    </nav>
  )
}

export default Navbar