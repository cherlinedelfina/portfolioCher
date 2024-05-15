import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  useScroll,
  OrbitControls 
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { Background } from "./Background";
import { Office } from "./Office";
import { Projects } from "./Projects";

export const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();

  const isMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width / 12;
  const officeScaleRatio = Math.max(1, Math.min(2 * responsiveRatio, 2)); 

  const [section, setSection] = useState(0);

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  const characterContainerAboutRef = useRef();

  const [characterAnimation, setCharacterAnimation] = useState("Typing");
  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" : "Standing");
    }, 600);
  }, [section]);

  const characterGroup = useRef();

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);

    // const position = new THREE.Vector3();
    if (section === 0) {
      characterContainerAboutRef.current.getWorldPosition(
        characterGroup.current.position
      );
    }
    // console.log([position.x, position.y, position.z]);

    // const quaternion = new THREE.Quaternion();
    // characterContainerAboutRef.current.getWorldQuaternion(quaternion);
    // const euler = new THREE.Euler();
    // euler.setFromQuaternion(quaternion, "XYZ");

    // console.log([euler.x, euler.y, euler.z]);
  });


  return (
    <>
      <Background />
      
      <motion.group
        ref={characterGroup}
        rotation={[-3.141592653589793, 1.2053981633974482, 3.141592653589793]}
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX: officeScaleRatio,
            scaleY: officeScaleRatio,
            scaleZ: officeScaleRatio,
      
           
      
          },
          1: {
            y: isMobile ?-viewport.height + 1 : -viewport.height + 0.8,
            x: isMobile ? 0.6 : 1.4,
            z: 6.5,
            rotateX: 0,
            rotateY: isMobile ? -Math.PI / 4 :-Math.PI / 4,
            rotateZ: 0.1,
            scaleX: isMobile ? 0.7 : 0.9,
            scaleY: isMobile ? 0.7 : 0.9,
            scaleZ: isMobile ? 0.7 : 0.9,
          }
        }}
      >
        <Avatar animation={characterAnimation} scale={[1.2, 1.2, 1.2]} wireframe={section === 1} />
      </motion.group>
      <ambientLight intensity={1} />
      <motion.group
        position={[
          
          isMobile ? -0.9 * officeScaleRatio : 0.3 * officeScaleRatio,
          isMobile ? -viewport.height / 6 - 3 : - 2,
          3,
        ]}
        scale={[officeScaleRatio, officeScaleRatio,officeScaleRatio]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: isMobile ? -viewport.height / 6 - 2.5 : -2,
        }}
        transition={{
          duration: 0.8,
        }}
      >


        <Office section={section} />
        <group
          ref={characterContainerAboutRef}
          name="CharacterSpot"
          position={[-0.2, 0.25, -0.55]} 
          rotation={[-Math.PI, 0.42, -Math.PI]}
        ></group>
      </motion.group>
      <Projects />
    </>
  );
};
