import React from 'react'
import '../../Css/style.css'

function Host({ name, picture }) {  // Récupère les props 'name' et 'picture'
    const [firstName, lastName] = name.split(' ')
    return (
      <div className="host">
        <div className="host-name">
            <div className="host-firstname">{firstName}</div>  {/* Prénom sur une ligne */}
            <div className="host-lastname">{lastName}</div>    {/* Nom sur une ligne */}
        </div>
        <img src={picture} alt={name} className="host-picture" />  {/* Affiche l'image de l'hôte */}
      </div>
    )
  }
  
export default Host