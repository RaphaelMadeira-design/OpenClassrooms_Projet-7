import React, { useState } from 'react'
import '../../Css/style.css'

function Carousel({ pictures, title }) {
  const [currentImgIndex, setImgIndex] = useState(0)

  const handleNext = () => {
    setImgIndex(function(imgIndex) {
      if (imgIndex === pictures.length - 1) {
        return 0
      } else {
        return imgIndex + 1
      }
    })
  }

  const handlePrevious = () => {
    setImgIndex(function(imgIndex) {
      if (imgIndex === 0) {
        return pictures.length - 1
      } else {
        return imgIndex - 1
      }
    })
  }

  return (
    <div className="carousel">
      {/* Bouton précédent */}
      <div onClick={handlePrevious} className="carousel__button carousel__button--prev">
        <i className="fa-solid fa-chevron-left"></i>
      </div>

      {/* Image affichée */}
      <img src={pictures[currentImgIndex]} alt={`${title} - image ${currentImgIndex + 1}`} className="carousel__image"/>

      {/* Bouton suivant */}
      <div onClick={handleNext} className="carousel__button carousel__button--next">
        <i className="fa-solid fa-chevron-right"></i>
      </div>

      {/* Indicateur de position */}
      <div className="carousel__indicator">
        {currentImgIndex + 1} / {pictures.length}
      </div>
    </div>
  )
}

export default Carousel