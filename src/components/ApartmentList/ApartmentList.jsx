import React from 'react'
import '../Css/style.css'
import Apartment from '../Apartment/Apartment'
import apartments from '../../data/logements.json'

function ApartmentList() {

  return (
    <div className='apartment__grid'>
      {apartments.map((apartment) => (
        <Apartment key={apartment.id} apartment={apartment}/>
      ))}
    </div>
  )
}

export default ApartmentList