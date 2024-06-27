import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import "../abc.css";
import "./carousel1.css";
import Carousel from './Carousel'; 
import hs10 from './readmore/hs10.png';
import hs2 from './readmore/hs2.png';
import hs30 from './readmore/hs30.png';
import hs4 from './readmore/hs4.png';

const Section = (props) => {
  const { children, mobileTop, showCarousel } = props;

  return (
    <motion.section
      className={`
        h-screen w-screen p-8 max-w-screen-2xl mx-auto
        flex flex-col items-start
        ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
      `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
      {/* Render the appropriate carousel based on the showCarousel prop */}
      {showCarousel && <Carousel style={{ width: '100%', height: '100%' }} />}
    </motion.section>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;

  return (
    <div>
      <div style={{ marginBottom: '45px' }}>
        <div>
          <span className="text-6xl md:text-6xl lg:text-7xl font-bold leading-snug" style={{
            marginBottom: '0px',
            fontFamily: "'League Spartan', sans-serif",
            background: 'linear-gradient(45deg, #fc307f,#9c12fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>HydroSync</span>
        </div>
        <div>
          <span className="text-sm sm:text-base md:text-xl md:mt-0" style={{
            marginBottom: '0px',
            fontFamily: "'Sometype Mono', monospace",
            background: 'linear-gradient(45deg, #fc307f,#9c12fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline'
          }}>MedHack 2024: A 48-hour hackathon driving innovation in aged-care.</span>
        </div>
      </div>
      <motion.div
        className="text-sm sm:text-base md:text-lg pb-3 pt-3"
        style={{ fontFamily: "'Sometype Mono', monospace", color: '#cccccc' }}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <p>⭐️ HydroSync provides a non-invasive hydration monitoring solution, allowing families to track their loved ones' hydration levels via our app. Our mission is to tackle elderly dehydration, a often ignored issue with profound health impacts.</p>
      </motion.div>
      <motion.div
        className="text-sm sm:text-base md:text-lg pb-3 mt-1 pt-3"
        style={{ fontFamily: "'Sometype Mono', monospace", color: '#cccccc' }}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <p>❓ How does it work? photoplethysmography (PPG) patch seamlessly integrated into the sole of shoes collect data, which is then transmitted to our mobile app. Using this data, our app employs a basic k-means clustering to analyze and establish personalized hydration thresholds based on photoplethysmography and atmospheric pressure. It then displays hydration levels and alerts family members in case of alarming dehydration.</p>
      </motion.div>
      <motion.div
        className="text-sm sm:text-base md:text-lg pb-3 mt-1 pt-3"
        style={{ fontFamily: "'Sometype Mono', monospace", color: '#cccccc' }}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <p>🛠️ Built With: Python, React, TypeScript, Django, and CSS.</p>
      </motion.div>
    </div>
  );
};

const ImageRow = ({ images }) => {
  const calculateBorderRadius = () => {
    const containerWidth = 100 / 4; // Assuming 4 images per row, adjust this accordingly
    const borderRadiusPercentage = 25; // Adjust this value as needed
    return `${(containerWidth / 2) * (borderRadiusPercentage / 100)}%`;
  };

  return (
    <div className="flex flex-wrap justify-center w-full">
      {images.map((item, index) => (
        <div key={index} className="image-container3 bg-gray-800 p-4" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: calculateBorderRadius(),
          background: 'linear-gradient(to bottom, rgba(242, 36, 198, 0.6), rgba(28, 28, 28, 0.4))'
        }}>
          <img src={item.image} alt={`Display ${index + 1}`} style={{ width: '100%', height: 'auto', borderRadius: calculateBorderRadius() }} />
          <p className="text-white text-sm sm:text-base md:text-md text-center" style={{ marginTop: "10px", fontFamily: "'Sometype Mono', monospace" }}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

const TestPage5 = (props) => {
  const images = [
    { image: hs10, text: "PCA" },
    { image: hs30, text: 'K-means' },
    { image: hs2, text: 'Final pitch' },
    { image: hs4, text: 'Team Aged Care 3' }
  ];

  const { setSection } = props;
  const [isMobile, setIsMobile] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Adjust the breakpoint as needed
    };

    handleResize(); // Call once on initial render
    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on component unmount
    };
  }, []);

  const toggleCarousel = () => {
    setShowCarousel((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen" style={{ backgroundColor: '#0f0f0f', paddingTop: '110px' }}>
      <div className="flex flex-col md:flex-row w-full" style={{ paddingBottom: '30px' }}>
        <div className="w-full md:w-3/5 p-8"> {/* Text section */}
          <AboutSection setSection={props.setSection} />
        </div>
        <div className="w-full md:w-2/5 flex justify-center items-center"> {/* Carousel section */}
          <div style={{ position: 'relative', maxWidth: '100%', maxHeight: '500px' }}>
            {showCarousel ? <Carousel1 style={{ maxWidth: '100%', maxHeight: '500px' }} /> : <Carousel style={{ maxWidth: '100%', maxHeight: '500px' }} />}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-4 bg-gray-900 p-4" style={{ backgroundColor: '#0f0f0f', paddingBottom: '100px' }}>
        <ImageRow images={images} />
      </div>
    </div>
  );
};

export default TestPage5;
