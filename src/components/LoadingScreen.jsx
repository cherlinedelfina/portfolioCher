import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
import './abc.css';

export const LoadingScreen = (props) => {
  const { started, setStarted } = props;
  const { progress, total, loaded, item } = useProgress();
  const [isMobile, setIsMobile] = useState(false);
  const [isBelow1500, setIsBelow1500] = useState(false);

  useEffect(() => {
    console.log(progress, total, loaded, item);
    if (progress === 100) {
      setTimeout(() => {
        setStarted(true);
      }, 500);
    }
  }, [progress, total, loaded, item]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
      setIsBelow1500(window.innerWidth < 1500);
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none
  flex items-center justify-center
  ${started ? "opacity-0" : "opacity-100"}`}
      style={{ background: "#0f0f0f" }}
    >
      <div className="text-4xl md:text-9xl font-bold relative">
        <div
          className="mt-2 absolute left-0 top-0 overflow-hidden truncate text-clip transition-all duration-500"
          style={{
            width: isMobile ? '0' : `${progress}%`,
            fontFamily: "'Sometype Mono', monospace",
            background: 'linear-gradient(45deg, #fc307f, #9c12fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline',
          }}
        >
          Cherline Delfina
        </div>

        <div
          className="pt-8"
          style={{
            opacity: isBelow1500 ? 0.3 : 0.4,
            fontFamily: "'Sometype Mono', monospace",
            background: 'linear-gradient(45deg, #fc307f, #9c12fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline',
          }}
        >
          Cherline Delfina
        </div>
      </div>
    </div>
  );
};
