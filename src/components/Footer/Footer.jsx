import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__logo'>
            <img src="./src/assets/footerlogo.svg" alt="Logo Kasa"/>
        </div>
        <h2>© 2020 Kasa. All rights reserved</h2>
    </div>
  )
}

export default Footer