import React, { useState } from 'react';
import mobilise1 from './readmore/mobilise1_img.png';
import mobilise2 from './readmore/mobilise2_img.png';
import mobilise3 from './readmore/mobilise3_img.png';
import mobilise4 from './readmore/mobilise4_img.png';
import mobilise5 from './readmore/mobilise5_img.png';
import mobilise6 from './readmore/mobilise6_img.png';
import './carousel1.css';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [mobilise1, mobilise2, mobilise3, mobilise4, mobilise5, mobilise6];

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
        alt={`Red Nose Image ${currentImageIndex + 1}`} 
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
