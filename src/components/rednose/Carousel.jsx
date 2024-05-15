import React, { useState } from 'react';
import rednose1a from './readmore/rednose1a.png';
import rednose2a from './readmore/rednose2a.png';
import rednose3a from './readmore/rednose3a.png';
import rednose4a from './readmore/rednose4a.png';
import './carousel.css';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [rednose1a, rednose2a, rednose3a, rednose4a];

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
