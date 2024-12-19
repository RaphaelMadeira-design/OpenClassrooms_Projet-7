import React from 'react'
import './ApartmentList.css'
import Apartment from '../Apartment/Apartment'

function ApartmentList() {
  return (
    <div className='apartment__grid'>
        <Apartment />
        <Apartment />
        <Apartment />
        <Apartment />
        <Apartment />
        <Apartment />
    </div>
  )
}

export default ApartmentList