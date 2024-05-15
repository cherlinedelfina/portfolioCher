import React, { useState } from 'react';
import storysearch1 from './readmore/StorySearch.png';
import storysearch2 from './readmore/StorySearch2.png';
import storysearch3 from './readmore/StorySearch3.png';
import storysearch4 from './readmore/StorySearch4.png';
import storysearch5 from './readmore/StorySearch5.png';
import './carousel1.css';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [storysearch1, storysearch2, storysearch3, storysearch4, storysearch5];

  const nextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container2">
      <img 
        src={images[currentImageIndex]} 
        alt={`Red Nose Image ${currentImageIndex + 1}`} 
        className="carousel-image2"
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
