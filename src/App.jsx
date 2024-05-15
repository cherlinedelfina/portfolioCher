import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Leva } from "leva";
import { Cursor } from "./components/Cursor";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { LoadingScreen } from "./components/LoadingScreen";
import { Menu } from "./components/Menu";
import { ScrollManager } from "./components/ScrollManager";
import { framerMotionConfig } from "./config";
import TestPage2 from "./components/rednose/rednose";
import TestPage3 from "./components/mobilise/mobilise";
import TestPage4 from "./components/storysearch/storysearch";
import TestPage5 from "./components/hydrosync/hydrosync";

function App() {
  const [section, setSection] = useState(0);
  const [started, setStarted] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/rednose" element={<TestPage2 />} /> {/* Define route for TestPage2 */}
        <Route path="/mobilise" element={<TestPage3 />} /> {/* Define route for TestPage2 */}
        <Route path="/storysearch" element={<TestPage4 />} /> {/* Define route for TestPage2 */}
        <Route path="/hydrosync" element={<TestPage5 />} /> {/* Define route for TestPage2 */}
        <Route path="/*" element={<AppContent />} /> {/* Fallback route */}
      </Routes>
    </BrowserRouter>
  );
}

function AppContent() {
  const [section, setSection] = useState(0);
  const [started, setStarted] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} />
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
          <color attach="background" args={["#0f0f0f"]} />
          <ScrollControls pages={3.3} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Suspense>
                {started && (
                  <Experience section={section} menuOpened={menuOpened} />
                )}
              </Suspense>
            </Scroll>
            <Scroll html>
              {started && <Interface setSection={setSection} />}
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
        <Cursor />
      </MotionConfig>
      <Leva hidden />
    </>
  );
}

export default App;
