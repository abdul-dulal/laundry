"use client";
import React from "react";
import { teams } from "../data";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
const TeamContent = ({ showItem }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });
  const items = teams.slice(0, showItem);
  return (
    <div
      ref={ref}
      className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:gap-[29px] gap-5  mt-[70px]"
    >
      {items.map((team, index) => {
        return (
          <div key={index}>
            {inView && (
              <div className="zoomIn group border border-primary/15 py-11 xl:px-10 px-5 bg-transparent transition-all ease-out duration-[.4s] hover:bg-[#EBEFF3] hover:-mt-3">
                <Link
                  href="/team-details"
                  className="text-[18px] font-semibold leading-[100%] "
                >
                  {team.name}
                </Link>
                <p className="mt-[17px]  text-[15px] text-primary/70 font-medium leading-[26px]">
                  {team.design}
                </p>
                <p className="lg:mt-[34px] mt-6 text-[16px] font-medium text-primary/60">
                  Our skilled laundry & dry cleaning team guarantees top-quality
                  care your garments.
                </p>
                <div className="flex justify-end lg:mt-10 mt-8">
                  <Image
                    src={team.img}
                    width={135}
                    height={170}
                    className="w-[135px] h-[170px]"
                    alt={team.name}
                  />
                </div>
                <div className="flex gap-1 items-center mt-11">
                  <div className="group relative grid place-content-center size-[34px] border border-primary/15 rounded-full  cursor-pointer after:absolute after:size-full after:bg-primary after:content-[''] after:rounded-full after:transition-all after:ease-out after:duration-500  after:opacity-0 after:scale-0   group-hover:after:opacity-100 group-hover:after:scale-100">
                    {team.icon}
                  </div>
                  <Link
                    href="/"
                    className="border border-primary/15 rounded-full py-[11px] px-[22px]
                 text-[16px] font-medium text-primary/70 leading-[100%] transition-all duration-500 group-hover:bg-primary group-hover:text-white"
                  >
                    {team.buttonTitle}
                  </Link>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TeamContent;
