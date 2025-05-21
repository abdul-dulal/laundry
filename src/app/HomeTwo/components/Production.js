"use client";
import React from "react";
import { production } from "../data";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
const Production = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });
  return (
    <section className="lg:py-[140px] md:py-[100px] py-20">
      <div className="container">
        <div
          ref={ref}
          className="flex items-center 2xl:flex-nowrap flex-wrap justify-center"
        >
          {production.map((item, index) => {
            return (
              <div key={index}>
                {inView && (
                  <div
                    className={`relative group zoomIn ${
                      item.id == 2 || item.id == 3 || item.id == 4
                        ? "sm:-ml-14 ml-0"
                        : ""
                    } overflow-hidden  grid place-content-center xxl:size-[455px] lg:size-[400px] sm:size-[350px] size-[260px]  border border-primary/15 rounded-full before:content-[''] before:absolute before:w-full before:h-full before:top-[350px] before:left-[-100px] before:bg-[#4375e7] before:rounded-full before:opacity-0 before:invisible before:z-10 before:transition-all before:duration-500 before:ease-out hover:before:top-0 hover:before:left-0 hover:before:transition-all hover:before:ease-out hover:before:duration-500 hover:before:opacity-100 hover:before:visible `}
                  >
                    <div className="z-[99]">
                      <h3 className="lg:text-[120px] sm:text-[90px] text-[55px] font-semibold text-primary transition-all duration-500 group-hover:text-white leading-[64px] -tracking-[2%]">
                        <CountUp
                          end={item.count}
                          duration={3}
                          suffix={item.sufix}
                        />
                      </h3>

                      <p className="pt-[34px] text-[18px] text-center font-medium text-primary/70 leading-[100%] transition-all duration-500 group-hover:text-white">
                        {item.title}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Production;
