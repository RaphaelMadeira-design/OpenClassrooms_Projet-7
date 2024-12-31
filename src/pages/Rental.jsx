import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import '../components/Css/style.css';
import apartements from '.././data/logements.json';
import Carousel from '../components/Carousel/Carousel';

function Rental() {
  const { rentalId } = useParams();
  const navigate = useNavigate();

  const apartment = apartements.find((apt) => apt.id === rentalId);

  useEffect(() => {
    if (!apartment) {
      navigate('/*');
    }
  }, [apartment, navigate]);

  if (!apartment) {
    return null;
  }

  return (
    <div className="rental__details">
      <h1>{apartment.title}</h1>

      {/* Utilisation du composant Carousel */}
      <Carousel images={apartment.pictures} title={apartment.title} />

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
  );
}

export default Rental;
