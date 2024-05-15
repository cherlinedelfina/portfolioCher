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
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen ml-8">
      <AboutSection setSection={setSection} />
      <ExperienceSection />
      <ProjectsSection />
      
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;

  const openResume = () => {
    window.open('/projects/resume.pdf', '_blank');
  };

  return (
    <Section mobileTop>
       <span className="px-1 text-sm sm:text-base md:text-xl pb-2" style={{
          marginTop: '30px',
          fontFamily: "'Sometype Mono', monospace",
          background: 'linear-gradient(45deg, #fc307f,#9c12fc)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline'
      }}>Hi there! My name is</span>
      <h1 className="text-6xl md:text-6xl lg:text-9xl  font-bold leading-snug mt-8 md:mt-0 pb-8" style={{ color: 'white', fontFamily: "'League Spartan', sans-serif"}}>
      Cherline
        <br />
        <span className=" px-1 " style={{ color: 'white', fontFamily: "'League Spartan', sans-serif"}}>Delfina</span>
      </h1>
      <motion.p
        className="px-1 text-sm sm:text-base md:text-lg " style={{ fontFamily: "'Sometype Mono', monospace", color: '#cccccc'}}
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
        I'm pursuing my Master's in Artificial Intelligence
        <br />
        at Monash University, with experience in full-stack 
        <br />
        software development. Additionally, I enjoy art and 
        <br />
        possess a keen eye for designing and coding clean,
        <br />
        interactive frontends.
      </motion.p>
      <motion.button 
        className="px-1 text-sm sm:text-base md:text-md pb-3 mt-12 pt-3 pl-6 pr-6"
        onClick={openResume}
        style={{
          background: 'linear-gradient(45deg, #fc307f, #9c12fc)',
          color: '#cccccc',
          borderRadius: '10px'
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
  const { ref, inView } = useInView({
    triggerOnce: false, // Set to true if you want the animation to occur only once
    threshold: 0.5 // Adjust this threshold as needed
  });
  const experiences = [
    {
      title: "Artificial Intelligence Engineer",
      company: "Monash DeepNeuron",
      duration: "Apr 2023 - Present",
      description: 'Collaborated with a team of 5 to develop a generative model integrating GNN backbone, advanced graph learning techniques, and diffusion models to create images from scene graph descriptions.', 
    },
    { 
      title: 'Lead Technical Consultant',
      company: '180 Degrees Consulting',
      duration: 'Jul 2023 - Jan 2024',
      description: 'Led a team of 7 to successfully develop a web application for Mobilise, fostering collaboration and efficiently organizing tasks using sprints to ensure a streamlined workflow and optimized team performance. Maintained bi-weekly communication with the client for project updates through Zoom.', 
    },
    { 
      title: 'Technical Consultant', 
      company: '180 Degrees Consulting',
      duration: 'Feb 2023 - Jun 2023',
      description: 'Collaborated with a team of 5 to develop a safe sleep mobile application for Red Nose, taking the lead in UI/UX design and frontend development. Awarded for best content in 180DC semester 1, 2023.',
    },
    { 
      title: 'Media Officer', 
      company: 'CCA',
      duration: 'Dec 2022 - Jan 2024',
      description: "Researched target audience preferences to design visually engaging promotional materials using graphic design skills, enhancing brand visibility and driving audience engagement", 
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
          <div className="w-3/5">
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
  
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };
  

  return (
    <div className="mt-80 " style={{ paddingTop: '20px'}}> 
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
    fontFamily: "'League Spartan', sans-serif",color: 'white',paddingLeft: '4rem',paddingRight: '4rem',
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

