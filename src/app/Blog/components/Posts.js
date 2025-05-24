import React from "react";
import post from "@/public/img/blog/post-01.png";
import Image from "next/image";
import Link from "next/link";
import FadeUpAnimationProvider from "@/components/ul/FadeUpAnimationProvider ";
const Posts = ({ img, title }) => {
  return (
    <div>
      <FadeUpAnimationProvider>
        <div className="flex sm:flex-nowrap flex-wrap flex-row justify-between items-center gap-5">
          <div className="size-[100px]">
            <Image src={img} className="w-full h-full" alt="Laundry post" />
          </div>
          <div className="flex flex-col justify-center items-start gap-2.5">
            <div className="flex flex-row justify-start items-center gap-2">
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

              <Link href="" className="font-medium text-base text-[#142137]">
                June 29, 2025
              </Link>
            </div>
            <h5>
              <Link
                className="font-medium text-[18px] leading-[156%] tracking-[-0.02em] text-[#142137] max-w-[190px]"
                href="/blog-details"
              >
                {title}
              </Link>
            </h5>
          </div>
        </div>
      </FadeUpAnimationProvider>
    </div>
  );
};

export default Posts;
