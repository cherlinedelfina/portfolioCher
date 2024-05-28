import React, { useState } from 'react';
import skin2 from './readmore/skin2.png';
import skin2a from './readmore/skin2a.png';
import skin2b from './readmore/skin2b.png';
import skin3 from './readmore/skin3.png';
import skin4 from './readmore/skin4.png';
import skin6 from './readmore/skin6.png';
import './carousel1.css';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [skin2, skin2a, skin2b, skin3, skin4, skin6];

  const nextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container1">
      <img 
        src={images[currentImageIndex]} 
        alt={`Skin Lesion ${currentImageIndex + 1}`} 
        className="carousel-image1"
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
