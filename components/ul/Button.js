import Link from "next/link";
import React from "react";

const Button = ({ title, path }) => {
  return (
    <Link
      href={`/${path}`}
      className="mt-5 block group  rounded-[100px] w-[200px] bg-primary relative overflow-hidden transition-all duration-[0.7s] ease-in-out z-10 text-center leading-[54px] border border-transparent before:content-[''] before:absolute before:top-[-80px] before:right-[-60px] before:w-0 before:h-[200px] before:bg-white before:transition-all before:duration-[1.2s] before:ease-in-out before:z-[-1] before:rotate-[-20deg] after:content-[''] after:absolute after:top-[-70px] after:left-[-60px] after:w-0 after:h-[200px] after:bg-white after:transition-all after:duration-[1.2s] after:ease-in-out after:z-[-1] after:rotate-[-20deg] hover:after:w-full hover:before:w-full"
    >
      <div className="flex  gap-[16px] justify-between items-center pl-6  text-white group-hover:text-primary group-hover:delay-300 group-hover:transition-all text-[15px] font-medium transition-all duration-[.4s]">
        <span> {title}</span>
        <span className="grid place-content-center size-[34px] bg-white transition-all duration-500 group-hover:bg-primary mr-2 rounded-full">
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary transition-all duration-500 group-hover:text-white group-hover:rotate-[45deg]"
          >
            <path
              d="M4.75757 13.7577L13.2429 5.27241"
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
      </div>
    </Link>
  );
};

export default Button;
