import React from 'react'
import '../Css/style.css'
import Apartment from '../Apartment/Apartment'
import apartements from '../../data/logements.json'
import { useNavigate } from 'react-router'

function ApartmentList() {
  const navigate = useNavigate()
  const handleCardClick = (id) => {
    navigate(`/rental/${id}`)
  }
  
  return (
    <div className='apartment__grid'>
      {apartements.map((apartment) => (
        <Apartment 
          key={apartment.id} 
          apartment={apartment} 
          onClick={() => handleCardClick(apartment.id)} 
        />
      ))}
    </div>
  )
}

export default ApartmentList