import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import '../components/Css/style.css'
import apartments from '../data/logements.json'
import ApartmentDetails from '../components/ApartmentDetails/ApartmentDetails'


function Rental() {
  return (
    <ApartmentDetails>
    </ApartmentDetails>
  )
}

export default Rental