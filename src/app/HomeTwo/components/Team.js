import Link from "next/link";
import React from "react";
import hello from "@/public/img/homeTwo/member-01.jpg";
import Image from "next/image";
import { teams } from "../data";
const Team = () => {
  return (
    <section className="lg:pb-[150px] md:pb-[100px] pb-20">
      <div className="container">
        <div className="flex flex-wrap gap-10 justify-between items-end">
          <div class="">
            <h4 className="mb-[34px]">Team Members</h4>
            <h2 className=" ">
              The Experts in Clean <br className="md:block hidden" /> & Fresh.
            </h2>
          </div>
          <div>
            <Link
              href="/"
              class="block group  rounded-[100px] w-[238px]  bg-white relative overflow-hidden transition-all duration-[0.7s] ease-in-out z-10 text-center leading-[54px] border border-primary/15 before:content-[''] before:absolute before:top-[-80px] before:right-[-60px] before:w-0 before:h-[200px] before:bg-[#142137] before:transition-all before:duration-[1.2s] before:ease-in-out before:z-[-1] before:rotate-[-20deg] after:content-[''] after:absolute after:top-[-70px] after:left-[-60px] after:w-0 after:h-[200px] after:bg-[#142137] after:transition-all after:duration-[1.2s] after:ease-in-out after:z-[-1] after:rotate-[-20deg] hover:after:w-full hover:before:w-full"
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
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.9497 13.0503V4.56501H5.46442"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </Link>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:gap-[29px] gap-5  mt-[70px]">
          {teams.map((team, index) => {
            return (
              <div
                key={index}
                className="group border border-primary/15 py-11 xl:px-10 px-5 bg-transparent transition-all ease-out duration-[.4s] hover:bg-[#EBEFF3] hover:-mt-3"
              >
                <h3 className="text-[18px] font-semibold leading-[100%] mb-[17px] ">
                  {team.name}
                </h3>
                <p className="text-[15px] text-primary/70 font-medium leading-[26px]">
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
