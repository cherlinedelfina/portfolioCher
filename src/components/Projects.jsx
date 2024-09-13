import { Image, Text  } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import { Link } from 'react-router-dom';


const GradientMaterial = {
  uniforms: {
    color1: { value: new THREE.Color('#1c1c1c') }, // Red
    color2: { value: new THREE.Color('#f224c6') }, // Blue
    opacity: { value: 0.8 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
  `,
  fragmentShader: `
    uniform vec3 color1;
    uniform vec3 color2;
    uniform float opacity;
    varying vec2 vUv;
    void main() {
      gl_FragColor = vec4(mix(color1, color2, vUv.y), opacity);
    }
  `
};


export const projects = [
  {
    title: "Safe Sleep App",
    url: "/rednose",
    image: "projects/rednose.png",
    description: "A mobile application for Red Nose aimed at promoting safe sleep practices for babies.",
  },
  {
    title: "StorySearch",
    url: "/storysearch",
    image: "projects/StorySearch.png",
    description: "An AI-powered website delivering personalized picture books to counteract the decline in children's attention spans.",
  },
  {
    title: "Mobilise Platform",
    url: "/mobilise",
    image: "projects/mobilise.png",
    description: "Volunteer portal website for Mobilise to organize outreaches and facilitate volunteer participation.",
  },
  {
    title: "Brain Tumor Segmentation",
    url: "/braintumor",
    image: "projects/brain_seg1.png",
    description: "3D Brain tumor segmentation with convolutional neural network (CNN).",
  },
  {
    title: "Skin Lesion Classification",
    url: "/skinlesion",
    image: "projects/skin1.png",
    description: "Skin lesion identification website with convolutional neural network.",
  },
  {
    title: "HydroSync",
    url: "/hydrosync",
    image: "projects/Hydrosync.png",
    description: "Hydration monitoring solution that utilizes k-means clustering to detect dehydration from photoplethysymography and atmospheric pressure.",
  },
  {
    title: "Scene Graph Generation",
    image: "projects/GNN.png",
    description: "Trained a convolutional neural network model for object detection and generated scene graphs.",
  },
  {
    title: "Road Entity Detection System",
    image: "projects/collision.png",
    description: "Trained a model to detect road entities through a traffic dashcam using convolutional neural network architecture.",
  },
  {
    title: "US Plastic Surgery Trends",
    url: "https://plasticsurgeryvis.vercel.app/",
    image: "projects/plasticsurgvis.png",
    description: "Interactive data visualization website illustrating the trends of plastic surgery procedures in the US.",
  },
  {
    title: "Self-Driving Car Dashboard",
    image: "projects/selfdrivecar.png",
    description: "Interactive dashboard report on self-driving car queries.",
  },
];



const Project = (props) => {
  
  const { project } = props;
  const { title, description, image, url } = project;
  const background = useRef();
 
  
  

  const bgOpacity = useMotionValue(0.8);
 
  
  const handleTextClick = () => {
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <group {...props}>
      <mesh
        position-z={-0.001}
      
        ref={background}>
        <planeGeometry args={[2.2, 2.3]} />
        <shaderMaterial
          attach="material"
          args={[GradientMaterial]}
          transparent
        />
      </mesh>
      <Image
        scale={[1.9, 1.4, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.35}
        style={{
          transition: "transform s ease", // Smooth transition for scale change
        }}/>
        
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.15}
        position={[-0.95, -0.45, 0]}
      >
        {project.title}
      </Text>


      <Text
        maxWidth={2}
        anchorX="left"
        anchorY="top"
        fontSize={0.09}
        position={[-0.94, -0.65, 0]}
      >
        {project.description} 
        </Text>
        
      {project.url && (
      <Text
      maxWidth={2}
      anchorX="left"
      anchorY="top"
      fontSize={0.09}
      fontWeight="bold"
      onClick={handleTextClick}
      position={[0.6, -1, 0]}
      interactive
      color="#3063fc">
      Read more
      </Text>
      )}

      {project.url && (
      <Text
        maxWidth={2}
        anchorX="left"
        anchorY="top"
        fontSize={0.09}
        position={[0.6, -1.01, 0]} // Positioned below the "Read more" text
        color="#3063fc" 
      >
      ___________
      </Text>
      )}
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 4));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  const sectionPositionY = -viewport.height +5.5;
  

  return (
    <group position={[0, sectionPositionY, 0]}>
    <group position-y={-viewport.height * 2 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 4, 0, -5]} // Adjusted position for spacing
          animate={{
            x: 0 + (index - currentProject) * 4, // Adjusted x position for spacing
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
          }}
          rotation={[currentProject === index ? -0.2 : Math.PI / -7, 0, 0]} // Adjusted rotation for facing up
        >
          <Project
            project={project}
            highlighted={index === currentProject}
            scale={currentProject === index ? [2.2,2.2,2.2] : [1.5, 1.5, 1.5]} // Adjusted scale for making projects bigger
            
          />
        </motion.group>
      ))}
    </group></group>
  );
};
