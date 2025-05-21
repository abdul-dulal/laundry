"use client";
import React from "react";
import Button from "@/components/ul/Button";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import FadeUpAnimationProvider from "@/components/ul/FadeUpAnimationProvider ";
const AuthorDetails = ({ author, name, title, showButton }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });
  const words = title.split(" ");
  return (
    <div className="">
      <div
        className={`pt-5 flex flex-row justify-start items-center flex-wrap gap-5 mt-[18px] ${
          showButton && "sm:pl-10 pl-0"
        }`}
      >
        <div className="flex  items-center gap-[14px]">
          <div className="user_img ">
            <Link href="">
              <Image className="size-[54px] block" src={author} alt="" />
            </Link>
          </div>
          <Link
            className="block font-semibold md:text-[18px] text-base text-[#142137] "
            href=""
          >
            {name}
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.3906 0.00652348C17.3671 0.00652348 18.3446 0.0285093 19.3211 0.00102703C20.8363 -0.0411124 22.0281 1.21941 21.9997 2.69245C21.9631 4.58415 21.9887 6.47767 21.9915 8.37028C21.9933 9.80119 21.4821 11.0177 20.4726 12.0263C17.4386 15.0576 14.4064 18.0907 11.3696 21.1202C10.1998 22.2864 8.67634 22.2946 7.51568 21.1367C5.28962 18.9161 3.06814 16.691 0.849406 14.4631C-0.0190321 13.5901 -0.237974 12.4798 0.268615 11.4492C0.40053 11.1808 0.583745 10.9215 0.795358 10.7099C3.87245 7.6136 6.95412 4.52094 10.0459 1.43926C11.0078 0.480134 12.1913 0.0120199 13.5517 0.00743955C14.498 0.00377525 15.4443 0.00743955 16.3906 0.00743955V0.00652348ZM16.3503 1.73241C15.48 1.73241 14.6098 1.74981 13.7395 1.72783C12.6823 1.70034 11.8166 2.0796 11.0755 2.82528C8.11662 5.80252 5.14671 8.7706 2.18229 11.7423C2.07511 11.8504 1.96244 11.9576 1.87816 12.0822C1.66929 12.3891 1.68395 12.7665 1.90747 13.0642C1.98076 13.1613 2.07053 13.2456 2.15664 13.3327C4.32408 15.5047 6.49242 17.6758 8.66077 19.8469C8.73589 19.922 8.81009 20.0008 8.89345 20.0667C9.22599 20.3287 9.61074 20.337 9.94877 20.0869C10.0468 20.0145 10.1329 19.9275 10.2199 19.8414C13.2127 16.8531 16.2019 13.8631 19.1975 10.8776C19.9157 10.1612 20.2839 9.31842 20.2702 8.29516C20.2528 6.90639 20.2656 5.51671 20.2656 4.12794C20.2656 3.60853 20.2766 3.08911 20.2601 2.57062C20.2436 2.05853 19.9331 1.76264 19.4191 1.73424C19.3129 1.72874 19.2057 1.73149 19.0985 1.73149C18.1824 1.73149 17.2664 1.73149 16.3503 1.73149V1.73241Z"
              fill="#1D92CD"
            />
            <path
              d="M15.7473 3.57547C17.1937 3.56815 18.3379 4.70408 18.3361 6.14598C18.3342 7.56315 17.1965 8.7119 15.7876 8.71832C14.3557 8.72473 13.1896 7.56773 13.1914 6.1414C13.1923 4.72881 14.3347 3.5828 15.7473 3.57547ZM16.6129 6.14415C16.6129 5.66412 16.2584 5.30502 15.7793 5.29953C15.2993 5.29403 14.9319 5.6458 14.9228 6.12033C14.9127 6.61684 15.2846 6.99426 15.7793 6.98785C16.2593 6.98235 16.6139 6.62325 16.6139 6.14415H16.6129Z"
              fill="#1D92CD"
            />
          </svg>

          <Link
            className="text-base font-medium leading-[26px] text-primary/60"
            href=""
          >
            Laundry Services
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.75195 1V3.70016"
              stroke="#1D92CD"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.9531 1V3.70016"
              stroke="#1D92CD"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.4528 6.84939V14.4999C17.4528 17.2 16.1027 19.0001 12.9525 19.0001H5.75218C2.60202 19.0001 1.25195 17.2 1.25195 14.4999V6.84939C1.25195 4.14923 2.60202 2.34912 5.75218 2.34912H12.9525C16.1027 2.34912 17.4528 4.14923 17.4528 6.84939Z"
              stroke="#1D92CD"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.75195 9.09912H12.9523"
              stroke="#1D92CD"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.75195 13.5994H9.35213"
              stroke="#1D92CD"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <Link
            className="text-base font-medium leading-[26px] text-primary/60"
            href=""
          >
            March 25, 2025
          </Link>
        </div>
        <div className="flex  justify-start items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.9411 6.37784V10.8687C18.9411 11.1606 18.9298 11.4413 18.8962 11.7108C18.6379 14.7421 16.8528 16.2465 13.5632 16.2465H13.1142C12.8335 16.2465 12.564 16.3813 12.3956 16.6058L11.0484 18.4022C10.4533 19.1993 9.48776 19.1993 8.89272 18.4022L7.54544 16.6058C7.39949 16.4149 7.07392 16.2465 6.82692 16.2465H6.37784C2.79636 16.2465 1 15.3596 1 10.8687V6.37784C1 3.08827 2.51568 1.30314 5.5358 1.04492C5.80525 1.01124 6.08593 1 6.37784 1H13.5632C17.1447 1 18.9411 2.79636 18.9411 6.37784Z"
              stroke="#1D92CD"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.904 9.13973H13.9141"
              stroke="#1D92CD"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.98209 9.13973H9.99219"
              stroke="#1D92CD"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.04849 9.13973H6.0586"
              stroke="#1D92CD"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <Link
            className="text-base font-medium leading-[26px] text-primary/60"
            href=""
          >
            3 Comment
          </Link>
        </div>

        <div ref={ref}>
          {inView && (
            <Link
              href="/Blog-details"
              className={`font-semibold md:text-[34px] sm:text-[28px] text-2xl leading-[119%] tracking-[-0.02em] text-[#142137] mb-[14px] transition-all duration-400 ease-in-out move-right`}
            >
              {words.map((word, index) => (
                <span key={index} className="inline-block mr-1">
                  {word}
                </span>
              ))}
            </Link>
          )}
        </div>

        <div className="lg:pt-[34px] pt-3">
          <FadeUpAnimationProvider>
            <p className="text-base font-normal leading-[26px] text-primary/70">
              Cleaning is more than just visiting places—it's about creating
              lasting memories, discovering new cultures, and experiencing the
              extrinary. From breathtaking landscapes to immersive local
              adventures, we curate seamless travel experiences tailored to your
              dreams. Whether you seek relaxation, adventure, or cultural
              exploration.
            </p>
          </FadeUpAnimationProvider>

          {showButton && (
            <FadeUpAnimationProvider>
              <div className="mt-[50px]">
                <Button title="Read More" path="Blog-details" />
              </div>
            </FadeUpAnimationProvider>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorDetails;
