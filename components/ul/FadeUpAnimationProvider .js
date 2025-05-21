"use client";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

const FadeUpAnimationProvider = ({ children, stagger = 0.8 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const containerRef = useRef(null);

  useEffect(() => {
    if (inView && containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { translateY: 70 },
        {
          translateY: 0,
          duration: 1.8,
          stagger: stagger,
        }
      );
    }
  }, [inView, stagger]);

  return (
    <div ref={ref}>
      <div ref={containerRef}>{children}</div>
    </div>
  );
};

export default FadeUpAnimationProvider;
