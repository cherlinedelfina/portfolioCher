import React, { useState } from 'react';
import rednose1b from './readmore/rednose1b.png';
import rednose2b from './readmore/rednose2b.png';
import rednose3b from './readmore/rednose3b.png';
import rednose4b from './readmore/rednose4b.png';
import './carousel.css';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [rednose1b, rednose2b, rednose3b, rednose4b];


  const nextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <img 
        src={images[currentImageIndex]} 
        alt={`Red Nose Image ${currentImageIndex + 1}`} 
        className="carousel-image"
      />
      <div className="carousel-controls prev" onClick={prevImage} aria-label="Previous Image">
        &lt;
      </div>
      <div className="carousel-controls next" onClick={nextImage} aria-label="Next Image">
        &gt;
      </div>
    </div>
  );
};

export default Carousel;
