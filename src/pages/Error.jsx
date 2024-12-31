import React from 'react'
import '../components/Css/style.css'

function Error() {
  return (
    <>
      <div className='error-container'>
        <h4>404</h4>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <a href="/">Retourner sur la page d'accueil</a>
      </div>
    </>
  )
}

export default Error