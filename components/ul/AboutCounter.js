import React from "react";
import CountUp from "react-countup";
import FadeUpAnimationProvider from "./FadeUpAnimationProvider ";
import { useInView } from "react-intersection-observer";
const AboutCounter = ({ count, sufix }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });
  return (
    <FadeUpAnimationProvider>
      <div
        ref={ref}
        className="w-[210px] h-[210px] flex flex-col justify-center items-center text-center relative border border-[#142137] border-opacity-14 rounded-full overflow-hidden"
      >
        <h2 className="">
          {inView && <CountUp end={count} duration={3} suffix={sufix} />}
        </h2>
        <p className="text-[16px] font-medium leading-[22px] text-primary/70 mt-2">
          Free Pickup & <br />
          Delivery
        </p>
      </div>
    </FadeUpAnimationProvider>
  );
};

export default AboutCounter;
