import React, { useEffect, useRef, useState } from 'react';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const vidRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the device is mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize); // Check on resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up
    };
  }, []);

  useEffect(() => {
    if (isMobile) return; // Skip the observer if on mobile

    const videoElement = vidRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement.play().catch((error) => {
            console.error('Error playing video:', error);
          });
        } else {
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [isMobile]);

  // Return null if on mobile or tablet
  if (isMobile) return null;

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
    </div>
  );
};

export default Intro;
