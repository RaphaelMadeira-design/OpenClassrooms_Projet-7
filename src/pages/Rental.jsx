import React from 'react'
import { useParams } from 'react-router'
import '../components/Css/style.css'
import apartements from '.././data/logements.json'

function Rental() {
  const { rentalId } = useParams()

  // Trouver l'appartement correspondant à l'ID
  const apartment = apartements.find((apt) => apt.id === rentalId)

  if (!apartment) {
    return <div>L'appartement n'a pas été trouvé</div>
  }

  return (
    <div className='rental__details'>
      <h1>{apartment.title}</h1>
      <img src={apartment.cover} alt={apartment.title} />
      <p>{apartment.description}</p>
      <div>
        <strong>Hôte : </strong>{apartment.host.name}
        <img src={apartment.host.picture} alt={apartment.host.name} />
      </div>
      <div>
        <strong>Évaluation : </strong>{apartment.rating}
      </div>
      <div>
        <strong>Localisation : </strong>{apartment.location}
      </div>
      <div>
        <strong>Équipements : </strong>
        <ul>
          {apartment.equipments.map((equip, index) => (
            <li key={index}>{equip}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Tags : </strong>
        {apartment.tags.join(', ')}
      </div>
    </div>
  )
}

export default Rental