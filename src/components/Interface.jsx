import { ValidationError, useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import "./abc.css";
import { useInView } from 'react-intersection-observer';
import { useState,useEffect } from 'react';



const Section = (props) => {
  const { children, mobileTop } = props;

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
    </motion.section>
  );
};


export const Interface = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { setSection } = props;

  return (
    <div className={`flex flex-col items-center w-screen ml-${isMobile ? '1' : '8'}`}>
      <AboutSection setSection={setSection} />
      <ExperienceSection />
      <div className={`ml-8`}>
        <ProjectsSection />
      </div>
    </div>
  );
  
};


const AboutSection = (props) => {
  const { setSection } = props;
  const [isMobile, setIsMobile] = useState(false);
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openResume = () => {
    window.open('projects/Resume2.png', '_blank');
  };

  return (
    <Section mobileTop>
      <span className="px-1 text-sm sm:text-base md:text-xl" style={{
        marginTop: '20px',
        paddingBottom: isMobile ? '0rem' : '0.5rem',
        fontFamily: "'Sometype Mono', monospace",
        background: 'linear-gradient(45deg, #fc307f,#9c12fc)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline'
      }}>Hi there! My name is</span>
      <h1 className="text-6xl md:text-6xl lg:text-9xl  font-bold leading-snug" style={{ color: 'white', fontFamily: "'League Spartan', sans-serif" ,
    paddingBottom: isMobile ? '0rem' : '2rem', }}>
        Cherline
        <br />
        <span className=" px-1 " style={{ color: 'white', fontFamily: "'League Spartan', sans-serif" }}>Delfina</span>
      </h1>
      <motion.p
  className="px-1 text-sm sm:text-base md:text-lg"
  style={{
    fontFamily: "'Sometype Mono', monospace",
    color: '#cccccc',
    whiteSpace: 'normal', /* Allow text to wrap to the next line */
    overflow: 'hidden',   /* Hide overflowing content */
    maxWidth: isMobile ? '100%' : 'calc(100% / 2.5)', /* Adjust width based on isMobile */
    width: '100%',    /* Default to full width */
    textAlign: 'left',  /* Align text to the right */
  }}
  initial={{
    opacity: 0,
    y: 25,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 1,
    delay: 1.5,
  }}
>
  I'm pursuing my Master's in Artificial Intelligence at Monash University, with experience in full-stack software development. Additionally, I enjoy art and possess a keen eye for designing and coding clean, interactive frontends.
</motion.p>


      <motion.button
        className="px-1 text-sm sm:text-base md:text-md pb-3 pt-3 pl-6 pr-6"
        onClick={openResume}
        style={{
          background: 'linear-gradient(45deg, #fc307f, #9c12fc)',
          color: '#cccccc',
          borderRadius: '10px', 
          marginTop: isMobile ? '8px' : '48px'
        }}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        My Resume
      </motion.button>
    </Section>
  );
};



const ExperienceSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [threshold, setThreshold] = useState(isMobile ? 1 : 0.5);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
      setThreshold(mobile ? 1 : 0.5);
    }; // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const { ref, inView } = useInView({
    triggerOnce: false, // Set to true if you want the animation to occur only once
    threshold: 0.5 // Adjust this threshold as needed
  });
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "Additive Assurance",
      duration: "Jul 2024 - Aug 2024",
      description: 'Developed a geometric similarity package using SIFT and LOFTR for feature extraction with selective invariance. Achieved an accuracy rate of 95.9% by experimenting with various threshold levels and matching techniques. Employed DBSCAN to cluster builds based on geometric similarity, to optimise train-test-validation splits to enhance the CNN model&apos;s ability to predict defects in unseen builds. Enhanced data quality through defect labeling using Anno and Geeqie.', 
    },
    {
      title: "Artificial Intelligence Engineer",
      company: "Monash DeepNeuron",
      duration: "Apr 2023 - Present",
      description: 'Collaborated with a team of 4 on various projects: CNN skin lesion classification, YOLOV7 for video road entity detection, generated scene graphs from bounding boxes using GNN. Presented findings in 2 winter showcases.', 
    },
    { 
      title: 'Lead Technical Consultant',
      company: '180 Degrees Consulting',
      duration: 'Jul 2023 - Jan 2024',
      description: 'Led a team of 7 in developing a web application for Mobilise using Jira sprint methodology. Worked as a full-stack software developer, providing training to team members on Django, React.js, and PostgreSQL. Maintained regular bi-weekly communication with our client via Zoom to provide project updates.', 
    },
    { 
      title: 'Technical Consultant', 
      company: '180 Degrees Consulting',
      duration: 'Feb 2023 - Jun 2023',
      description: 'Collaborated with a team of 5 to develop a safe sleep mobile application for Red Nose, taking the lead in UI/UX design and primarily focusing on frontend development. Awarded for best content in 180DC semester 1, 2023.',
    },
    { 
      title: 'Lead Consultant', 
      company: 'Monash Institute of Medical Engineering',
      duration: 'Feb 2023 - Jun 2023',
      description: "Led a team of 4 to craft a comprehensive product launch business plan for the TAVI (Transcatheter Aortic Valve Implantation) stroke risk tool.", 
    },
    { 
      title: 'SEO Specialist', 
      company: 'Global Victoria Intellect Program',
      duration: 'Apr 2023 - Apr 2023',
      description: "Performed SEO keyword research, image optimization, and meta tag enhancements for Sirohi.", 
    }
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleExpansion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };
  

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isSmallScreen = windowWidth <= 1200;




  return (
    <div ref={ref} className="w-full">
      
     <Section>
        <div className="relative w-full">
          <div className={`${isMobile ? 'w-full' : 'w-3/5'}`}>
            <h2 className="text-3xl md:text-7xl text-white font-bold" style={{ fontFamily: "'League Spartan', sans-serif"}}>Professional Experience</h2>
            <div className="mt-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  style={{ backgroundColor: "rgba(156, 18, 252, 0.5)",position: "relative" }}
                  className="gradient-bg mb-4 p-4 rounded-md"
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                  transition={{ duration: 0.5, delay: inView ? 0.6 + index * 0.3 : 0 }}
                >
                  <h3 className="text-lg md:text-2xl font-bold"  style={{ color: 'white', fontFamily: "'Sometype Mono', monospace"}}>{exp.title}</h3>
                  {!isSmallScreen && (
                  <p className="text-xs md:text-base text-gray-300" style={{ fontFamily: "'Sometype Mono', monospace", color: '#cccccc', fontSize: "16px", position: "absolute", top: 20, right: 50 }}>{exp.duration}</p>
                  )}
                  <p className="text-xs md:text-base" style={{ fontFamily: "'Sometype Mono', monospace", color: '#cccccc'}}>{exp.company}</p>
                  
                  <details className="text-gray-200 mt-2 relative" open={expandedIndex === index}>
                    <summary className="flex justify-between cursor-pointer" onClick={() => toggleExpansion(index)}>
                      <span></span>
                    </summary>
                    <p style={{ fontFamily: "'League Spartan', sans-serif", fontSize: "16px" }}>{exp.description}</p>
                  </details>
                  <div style={{ position: "absolute", top: 12, right: 15 }}>
  {expandedIndex === index ? (
    <span className="minus-icon" style={{ color: 'white', fontSize: "1.5em", fontFamily: "'Sometype Mono', monospace", cursor: "pointer" }} onClick={() => toggleExpansion(index)}>-</span>
  ) : (
    <span className="plus-icon" style={{ color: 'white', fontSize: "1.5em", fontFamily: "'Sometype Mono', monospace", cursor: "pointer" }} onClick={() => toggleExpansion(index)}>+</span>
  )}
</div>

                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      
    </div>
  );
};


const ProjectsSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };
  

  return (
    <div className="mt-80 " style={{ paddingTop: isMobile ? '0px' : '20px',paddingLeft: isMobile ? '20px' : '0px',}}> 
    <Section >
      <div className="flex w-full h-full gap-8 items-center justify-center mt-60 pr-20 ">
        <button
          className="hover:text-indigo-600 transition-colors text-sm md:text-lg" style={{ color: '#cccccc', fontFamily: "'Sometype Mono', monospace", 
            background: 'linear-gradient(45deg, #fc307f,#9c12fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline'}}
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-4xl md:text-8xl font-bold" style={{
    fontFamily: "'League Spartan', sans-serif",color: 'white',paddingLeft: isMobile ? '0.5rem' : '4rem',
    paddingRight: isMobile ? '1rem' : '4rem',
   }}>Projects</h2>
        <button
          className="hover:text-indigo-600 transition-colors text-sm md:text-lg"  style={{ color: '#cccccc', fontFamily: "'Sometype Mono', monospace", 
          background: 'linear-gradient(45deg, #fc307f,#9c12fc)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline'}}
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>  </div>
  );
};

