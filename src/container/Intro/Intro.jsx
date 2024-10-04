import React, { useEffect, useRef } from 'react';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const vidRef = useRef();

  useEffect(() => {
    const videoElement = vidRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Adjust this value to control when the video plays/stops
    });

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

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
