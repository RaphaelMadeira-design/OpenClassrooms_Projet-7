import React from 'react'
import '../Css/style.css'

function Apartment({ apartment, onClick }) {
  return (
    <div className='apartment__card' onClick={onClick}>
      <img src={apartment.cover} alt={apartment.title} />
      <h3>{apartment.title}</h3>
    </div>
  )
}

export default Apartment