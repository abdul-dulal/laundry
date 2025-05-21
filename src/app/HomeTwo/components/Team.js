import Link from "next/link";
import React from "react";
import hello from "@/public/img/homeTwo/member-01.jpg";
import Image from "next/image";
import { teams } from "../data";
import TeamContent from "./TeamContent";
import FadeUpAnimationProvider from "@/components/ul/FadeUpAnimationProvider ";
import AnimatedHeading from "@/components/ul/AnimatedHeading";
const Team = () => {
  return (
    <section className="lg:pb-[150px] md:pb-[100px] pb-20">
      <div className="container">
        <div className="flex flex-wrap gap-10 justify-between items-end">
          <div className="">
            <FadeUpAnimationProvider>
              <h4 className="mb-[34px]">Team Members</h4>
            </FadeUpAnimationProvider>
            <div className="max-w-[532px] ">
              <AnimatedHeading text="The Experts in Clean  & Fresh." />
            </div>
          </div>
          <div>
            <FadeUpAnimationProvider>
              <Link
                href="/Team"
                className="block group  rounded-[100px] w-[238px]  bg-white relative overflow-hidden transition-all duration-[0.7s] ease-in-out z-10 text-center leading-[54px] border border-primary/15 before:content-[''] before:absolute before:top-[-80px] before:right-[-60px] before:w-0 before:h-[200px] before:bg-[#142137] before:transition-all before:duration-[1.2s] before:ease-in-out before:z-[-1] before:rotate-[-20deg] after:content-[''] after:absolute after:top-[-70px] after:left-[-60px] after:w-0 after:h-[200px] after:bg-[#142137] after:transition-all after:duration-[1.2s] after:ease-in-out after:z-[-1] after:rotate-[-20deg] hover:after:w-full hover:before:w-full"
              >
                <span className="flex items-center justify-between gap-[10px] pl-6 pr-[10px] text-[#142137] group-hover:text-white group-hover:delay-300 group-hover:transition-all text-[15px] font-medium transition-all duration-[.5s]">
                  All Team Members
                  <span className="grid place-content-center size-[34px] bg-primary rounded-full group-hover:bg-white">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white group-hover:text-primary group-hover:rotate-[45deg] transition-all duration-500"
                    >
                      <path
                        d="M4.75757 13.7576L13.2429 5.27229"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.9497 13.0503V4.56501H5.46442"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </Link>
            </FadeUpAnimationProvider>
          </div>
        </div>
        <TeamContent showItem={4} />
      </div>
    </section>
  );
};

export default Team;
