import React, { useState } from 'react'
import '.././Css/style.css'

function Carousel({ images, title }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
    }

    const handlePrevious = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        )
  }

  return (
    <div className="carousel">
        <div onClick={handlePrevious} className="carousel__button carousel__button--prev">
            <i className="fa-solid fa-chevron-left"></i>
        </div>
        <img src={images[currentImageIndex]} alt={`${title} - image ${currentImageIndex + 1}`} className="carousel__image"/>
        <div onClick={handleNext} className="carousel__button carousel__button--next">
            <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="carousel__indicator">
            {currentImageIndex + 1}/{images.length}
        </div>
    </div>
  )
}

export default Carousel
