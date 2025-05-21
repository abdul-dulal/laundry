"use client";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
const SkillBar = ({ title, percent }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const barRef = useRef(null);

  useEffect(() => {
    if (inView) {
      gsap.to(barRef.current, {
        width: `${percent}%`,
        duration: 2,
        ease: "power3.out",
      });
    }
  }, [inView, percent]);
  return (
    <div ref={ref}>
      <div className="flex justify-between mb-3">
        <span className="text-base font-normal text-primary">{title}</span>
        <span className="text-base font-normal text-primary">{percent}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          ref={barRef}
          className="bg-blue-500 h-2.5 rounded-full"
          style={{ width: "0%" }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
