import React from 'react'
import { NavLink } from 'react-router'
import '../Css/style.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <img src="./src/assets/logo.svg" alt="Logo Kasa"/>
      </div>
      <ul className='nav__menu'>
        <li><NavLink to="/">Accueil</NavLink></li>
        <li><NavLink to="/a-propos">A propos</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar