"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
const AnimatedHeading = ({ text, showColor }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });
  const words = text.split(" ");
  return (
    <div ref={ref}>
      {inView && (
        <h2 className={`move-right ${showColor && "text-white"}`}>
          {words.map((word, index) => (
            <span key={index} className="inline-block mr-1">
              {word}
            </span>
          ))}
        </h2>
      )}
    </div>
  );
};

export default AnimatedHeading;
