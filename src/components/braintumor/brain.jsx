import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import "../abc.css";
import "./carousel1.css";
import Carousel from './Carousel'; 
import brain1 from './readmore/brain1.png';
import brain2 from './readmore/brain2.png';
import brain3 from './readmore/brain3.png';
import brain4 from './readmore/brain4.png';

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
      {showCarousel && <Carousel style={{width: '100%', height: '100%'}} />}
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
          }}>Brain Tumor Segmentation</span>
        </div>
      </div>
      <motion.div
        className="text-sm sm:text-base md:text-lg pb-3 pt-3"
        style={{ fontFamily: "'Sometype Mono', monospace", color: '#cccccc' }}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <p>⭐️ This project aims to contribute to the field of medical imaging by enhancing the accuracy and reliability of brain tumor segmentation and developing interactive 3D visualization tools to aid in the analysis and interpretation of medical images.
        </p>
      </motion.div>
      <motion.div
        className="text-sm sm:text-base md:text-lg pb-3 mt-1 pt-3"
        style={{ fontFamily: "'Sometype Mono', monospace", color: '#cccccc' }}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <p>❓ As a project manager, I led a team of 4 in executing this project, delegating tasks, recruiting team members, and reaching out to industry partners and organizations for showcase and collaboration opportunities.
        </p>
      </motion.div>
      <motion.div
        className="text-sm sm:text-base md:text-lg pb-3 mt-1 pt-3"
        style={{ fontFamily: "'Sometype Mono', monospace", color: '#cccccc' }}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <p>
          🛠️ Built With: Streamlit, Python, CNN, Tensorflow, Pytorch, Vedo
        </p>
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
        <div key={index} className="image-container2 bg-gray-800 p-4" style={{
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

const TestPage3 = (props) => {
  const images = [
    { image: brain1, text: "Monash x AMTIL AI in Manufacturing event" },
    { image: brain2, text: 'Monash x AMTIL AI in Manufacturing event' },
    { image: brain3, text: 'Monash x AMTIL AI in Manufacturing event' },
    { image: brain4, text: 'Monash x AMTIL AI in Manufacturing event' }
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
    <div className="flex flex-col items-center justify-center w-screen min-h-screen" style={{ backgroundColor: '#0f0f0f', paddingTop: '130px' }}>
      <div className="flex flex-col md:flex-row w-full" style={{ paddingBottom: '60px' }}>
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

export default TestPage400;
