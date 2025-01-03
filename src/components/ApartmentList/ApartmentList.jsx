import React from 'react'
import '../Css/style.css'
import Apartment from '../Apartment/Apartment'
import apartements from '../../data/logements.json'

function ApartmentList() {

  return (
    <div className='apartment__grid'>
      {apartements.map((apartment) => (
        <Apartment key={apartment.id} apartment={apartment}/>
      ))}
    </div>
  )
}

export default ApartmentList