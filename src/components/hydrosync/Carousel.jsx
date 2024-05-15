import React, { useState } from 'react';
import hydrosync1 from './readmore/hydrosync1.png';
import hydrosync3 from './readmore/hydrosync3.png';
import hydrosync4 from './readmore/hydrosync4.png';
import hydrosync5 from './readmore/hydrosync5.png';

import './carousel1.css';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [hydrosync1, hydrosync3, hydrosync4, hydrosync5];

  const nextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container3">
      <img 
        src={images[currentImageIndex]} 
        alt={`Red Nose Image ${currentImageIndex + 1}`} 
        className="carousel-image3"
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
