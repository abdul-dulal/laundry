"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
const RevealLefToRight = ({ img, title }) => {
  const revealRef = useRef(null);
  const imageRef = useRef(null);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      gsap.to(revealRef.current, {
        left: "100%",
        duration: 3.5,
        ease: "power3.out",
      });

      gsap.to(imageRef.current, {
        opacity: 1,
        duration: 3.5,
        ease: "power3.out",
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div
        ref={revealRef}
        className="absolute top-0 left-0 w-full h-full bg-white z-10"
      ></div>

      <Image className="w-full" src={img} alt="Laundry Image" />
    </div>
  );
};

export default RevealLefToRight;
