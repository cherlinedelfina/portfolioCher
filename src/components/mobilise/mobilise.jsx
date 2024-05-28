import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import "../abc.css";
import "./carousel1.css";
import Carousel from './Carousel'; 
import mob1 from './readmore/mob1.png';
import mob2 from './readmore/mob2.png';
import mob3 from './readmore/mob3.png';
import mob4 from './readmore/mob4.png';

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
          }}>Mobilise</span>
        </div>
      </div>
      <motion.div
        className="text-sm sm:text-base md:text-lg pb-3 pt-3"
        style={{ fontFamily: "'Sometype Mono', monospace", color: '#cccccc' }}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <p>⭐️ Mobilise is a non-profit organization dedicated to uniting a generation across Australia, providing practical support and sparking conversations about homelessness through monthly outreaches.
        </p>
      </motion.div>
      <motion.div
        className="text-sm sm:text-base md:text-lg pb-3 mt-1 pt-3"
        style={{ fontFamily: "'Sometype Mono', monospace", color: '#cccccc' }}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <p>❓ As a team leader, I led a team of seven to develop a volunteer portal website for Mobilise. This platform enables Mobilise to efficiently organize and schedule outreaches, allowing volunteers to view and sign up for available opportunities.
        </p>
      </motion.div>
      <motion.div
        className="text-sm sm:text-base md:text-lg pb-3 mt-1 pt-3"
        style={{ fontFamily: "'Sometype Mono', monospace", color: '#cccccc' }}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <p>
          🛠️ Built With: React Native, Django, CSS, Firebase, PostgreSQL database, figma, managed tasks through Jira, and deployed using Heroku.
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
    { image: mob1, text: "180dc's 10th anniversary" },
    { image: mob2, text: 'Volunteering with Mobilise' },
    { image: mob3, text: 'Team bonding with HSP' },
    { image: mob4, text: 'Co-team leaders' }
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

export default TestPage3;
