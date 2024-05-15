import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import "../abc.css";
import Carousel from './Carousel'; 
import Carousel1 from './Carousel1';
import sun from './readmore/sun.png';
import moon from './readmore/moon.png';


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
      {!showCarousel && <Carousel1 style={{width: '100%', height: '100%'}} />}
    </motion.section>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  
  return (
    <div>
       <div  style={{marginBottom: '45px'}}>
  <div>
    <span className="text-6xl md:text-6xl lg:text-7xl font-bold leading-snug " style={{
      marginBottom: '0px',
      fontFamily: "'League Spartan', sans-serif",
      background: 'linear-gradient(45deg, #fc307f,#9c12fc)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block'
    }}>Red Nose</span>
  </div>  <div>
    

      <span className="text-sm sm:text-base md:text-xl md:mt-0" style={{
        marginBottom: '0px',
        fontFamily: "'Sometype Mono', monospace",
        background: 'linear-gradient(45deg, #fc307f,#9c12fc)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline'
      }}>Awarded for best content in 180DC Semester 1, 2023.</span> </div>
      </div>
        
      <motion.div
        className="text-sm sm:text-base md:text-lg pb-3 pt-3"
        style={{ fontFamily: "'Sometype Mono', monospace", color: '#cccccc',}}
        initial={{opacity: 0,y: 25,}}
        whileInView={{opacity: 1,y: 0,}}
        transition={{duration: 1}}>
        <p>⭐️ Red Nose is Australia's leading authority on safe sleep and safer pregnancy advice and bereavement support for anyone affected by the sudden and unexpected death of a baby or child during pregnancy, birth, infancy, or childhood.
        </p>
      </motion.div>

      <motion.div
        className="text-sm sm:text-base md:text-lg pb-3 mt-1 pt-3 "
        style={{ fontFamily: "'Sometype Mono', monospace", color: '#cccccc',}}
        initial={{opacity: 0,y: 25,}}
        whileInView={{opacity: 1,y: 0,}}
        transition={{duration: 1}}>
        <p>❓ Developed a mobile application aimed at promoting safe sleep practices for infants while providing customized articles tailored for expecting mothers and new parents.
        </p>
      </motion.div>

      <motion.div
        className="text-sm sm:text-base md:text-lg pb-3 mt-1 pt-3 "
        style={{ fontFamily: "'Sometype Mono', monospace", color: '#cccccc',}}
        initial={{opacity: 0,y: 25,}}
        whileInView={{opacity: 1,y: 0,}}
        transition={{duration: 1,}}>
        <p>
          🛠️ Built With: ReactJS, TypeScript, Django, CSS, Figma, Firebase, and Rowy.
        </p>
      </motion.div>

    </div>
  );
};

const TestPage2 = (props) => {
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
        <div className="flex flex-col md:flex-row items-center justify-center w-screen min-h-screen" style={{ backgroundColor: '#0f0f0f' }}>
          <div className="p-8 max-w-screen-2xl mx-auto flex flex-col items-start">
            <AboutSection setSection={setSection} />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <div className="relative w-full">
              {showCarousel ? <Carousel1 style={{ maxWidth: '100%', maxHeight: '500px' }} /> : <Carousel style={{ maxWidth: '100%', maxHeight: '500px' }} />}
              <div className="carousel-controls-button absolute top-0 mr-5 m-3" onClick={toggleCarousel} style={{
              backgroundColor: showCarousel ? '#333333' : '#cccccc', marginLeft: '200px'}}>
                <div className={`slider-thumb ${showCarousel ? 'thumb-right' : 'thumb-left'}`}>
                  <img src={showCarousel ? moon : sun} alt={showCarousel ? 'Moon' : 'Sun'} className="slider-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default TestPage2;