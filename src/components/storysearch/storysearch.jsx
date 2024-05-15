import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import "../abc.css";
import "./carousel1.css";
import Carousel from './Carousel'; 
import unihack1 from './readmore/unihack1.png';
import unihack2 from './readmore/unihack2.png';
import unihack3 from './readmore/unihack3.png';
import unihack4 from './readmore/unihack4.png';

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
       <div  style={{marginBottom: '45px'}}>
  <div>
    <span className="text-6xl md:text-6xl lg:text-7xl font-bold leading-snug " style={{
      marginBottom: '0px',
      fontFamily: "'League Spartan', sans-serif",
      background: 'linear-gradient(45deg, #fc307f,#9c12fc)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block'
    }}>StorySearch</span>
  </div>  <div>
    

      <span className="text-sm sm:text-base md:text-xl md:mt-0" style={{
        marginBottom: '0px',
        fontFamily: "'Sometype Mono', monospace",
        background: 'linear-gradient(45deg, #fc307f,#9c12fc)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline'
      }}>UniHack 2024: A 48-hour hackathon for web/mobile development.</span> </div>
      </div>

      <motion.div
        className="text-sm sm:text-base md:text-lg pb-3 pt-3"
        style={{ fontFamily: "'Sometype Mono', monospace", color: '#cccccc',}}
        initial={{opacity: 0,y: 25,}}
        whileInView={{opacity: 1,y: 0,}}
        transition={{duration: 1}}>
        <p>⭐️ StorySearch uses AI to create engaging learning experiences through personalized picture books. We aim to combat the decline in children's attention spans, often attributed to short-form content.

        </p>
      </motion.div>

      <motion.div
        className="text-sm sm:text-base md:text-lg pb-3 mt-1 pt-3 "
        style={{ fontFamily: "'Sometype Mono', monospace", color: '#cccccc',}}
        initial={{opacity: 0,y: 25,}}
        whileInView={{opacity: 1,y: 0,}}
        transition={{duration: 1}}>
        <p>❓ How does it work? Utilizing OpenAI for content generation, StorySearch enables kids to explore a wide range of topics tailored to their specific interests. Each book contains unique images and text relevant to the chosen topic, fostering curiosity and creativity.
        </p>
      </motion.div>

      <motion.div
        className="text-sm sm:text-base md:text-lg pb-3 mt-1 pt-3 "
        style={{ fontFamily: "'Sometype Mono', monospace", color: '#cccccc',}}
        initial={{opacity: 0,y: 25,}}
        whileInView={{opacity: 1,y: 0,}}
        transition={{duration: 1,}}>
        <p>
          🛠️ Built With: Firebase, OpenAI, React, Python, and Tailwind CSS.
        </p>
      </motion.div>

    </div>
  );
};



const ImageRow = ({ images }) => {
  const calculateWidth = () => {
    const numImagesPerRow = 4; // Adjust this value as needed
    return `${80 / numImagesPerRow}%`;
  };

  const calculateBorderRadius = () => {
    const containerWidth = 100 / 4; // Assuming 4 images per row, adjust this accordingly
    const borderRadiusPercentage = 25; // Adjust this value as needed
    return `${(containerWidth / 2) * (borderRadiusPercentage / 100)}%`;
  };

  return (
    <div className="flex flex-wrap justify-center space-x-4 w-full">
      {images.map((item, index) => (
        <div key={index} className="bg-gray-800 p-4" style={{ width: calculateWidth(), margin: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: calculateBorderRadius(), background: 'linear-gradient(to bottom, rgba(242, 36, 198, 0.6),rgba(28, 28, 28, 0.4))' }}>
          <img src={item.image} alt={`Display ${index + 1}`} style={{ width: '100%', height: 'auto', borderRadius: calculateBorderRadius() }} />
          <p className="text-white text-sm sm:text-base md:text-md text-center" style={{ marginTop: "10px", fontFamily: "'Sometype Mono', monospace" }}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};




const TestPage4 = (props) => {
  const images = [
    { image: unihack1, text: "Brainstorming ideas" },
    { image: unihack2, text: '5 minutes in' },
    { image: unihack3, text: '7 AM after an all-nighter' },
    { image: unihack4, text: 'Monash x UniMelb x RMIT' }
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
              <a href="https://unihack-2024-story-search.vercel.app/" target="_blank" rel="noopener noreferrer" className="site-link" style={{ position: 'absolute', left: '26px', bottom: '7px',borderBottom: '1px solid transparent', transition: 'border-color 0.3s ease' }}>
                 <span>&gt;&nbsp;</span>View site
              </a>

            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-4 bg-gray-900 p-4" style={{ backgroundColor: '#0f0f0f', paddingBottom: '100px' }}>
          <ImageRow images={images} />
        </div>
      </div>
    );
  };
  
  export default TestPage4;