import React from "react";
import blog from "@/public/img/home/blog-01.png";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/utils/data";
const Blog = () => {
  return (
    <section class=" lg:py-[150px] md:py-[100px] py-20">
      <div class="container">
        <div class=" flex flex-wrap gap-10 items-end justify-between ">
          <div class="">
            <div class="">
              <h4 className="mb-[34px]">
                <span className="mr-2">•</span>Latest News & Blog
              </h4>
            </div>
            <div class="">
              <h2>
                Clothing Care & Laundry <br /> Best Practices.
              </h2>
            </div>
          </div>
          <div class=" ">
            <button
              class="group   w-[188px] pl-[30px] text-center leading-[54px] border border-[#d9dbdf] transition-all duration-700 ease-in-out relative z-[1] overflow-hidden cursor-pointer  hover:text-white  before:content-[''] before:w-0 before:h-[200px] before:absolute before:top-[-80px] before:right-[-60px] 
before:bg-[#4375e7] before:transition-all before:duration-[1200ms] before:ease-in-out 
before:z-[-1] before:rotate-[-20deg] hover:before:w-[250px] hover:before:text-white   after:content-[''] after:w-0 after:h-[200px] after:absolute 
after:top-[-70px] after:left-[-60px] after:bg-[#4375e7] 
after:transition-all after:duration-[1200ms] after:ease-in-out 
after:z-[-1] after:rotate-[-20deg] hover:after:w-[250px] hover:after:text-white

"
            >
              <Link href="/" className="flex items-center gap-2">
                See More Blog
                <span>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-all duration-700 ease-out text-[#142137] group-hover:text-white"
                  >
                    <path
                      d="M1 7L13 7"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 13L14 7L8 0.999999"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </button>
          </div>
        </div>
        <div class="pt-[68px]">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2   gap-[30px]">
            {blogs.map((blog, index) => {
              return (
                <div key={index} className="relative ">
                  <div className="overflow-hidden relative">
                    <Image
                      className="w-full transition-all duration-700 hover:scale-[1.1]"
                      src={blog.img}
                      width={378}
                      height={330}
                      alt={blog.blogTitle}
                    />
                    <div className="absolute right-5 top-8 inline-block bg-secondary py-2 px-3 ">
                      <p className=" text-[15px] font-medium leading-[26px] text-white">
                        Eco Wash
                      </p>
                    </div>
                  </div>
                  <div
                    class=" pt-[13px] flex flex-col justify-end items-start
"
                  >
                    <div
                      class=" flex flex-wrap   sm:gap-[20px] gap-4
"
                    >
                      <p
                        className="flex items-center gap-[6px] font-medium text-[15px] leading-[173%] text-[#142137b3] 
"
                      >
                        <span className="text-[#142137]">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17 9C17 13.416 13.416 17 9 17C4.584 17 1 13.416 1 9C1 4.584 4.584 1 9 1C13.416 1 17 4.584 17 9Z"
                              stroke="#142137"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M11.9681 11.5442L9.4881 10.0642C9.0561 9.8082 8.7041 9.1922 8.7041 8.6882V5.4082"
                              stroke="#142137"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        March 29, 2025
                      </p>
                      <p className=" font-medium text-[15px] leading-[173%] text-[#142137b3] ">
                        <Link href="/" className="flex items-center gap-[6px]">
                          <span>
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.1752 12.8638L14.4872 15.3918C14.5672 16.0558 13.8552 16.5197 13.2872 16.1757L9.93546 14.1838C9.56749 14.1838 9.20752 14.1598 8.85554 14.1118C9.4475 13.4158 9.79947 12.5358 9.79947 11.5838C9.79947 9.31185 7.8316 7.47192 5.39976 7.47192C4.47182 7.47192 3.61588 7.73589 2.90392 8.19989C2.87992 7.99989 2.87192 7.79989 2.87192 7.59189C2.87192 3.95195 6.03171 1 9.93546 1C13.8392 1 16.999 3.95195 16.999 7.59189C16.999 9.75185 15.8871 11.6638 14.1752 12.8638Z"
                                stroke="#142137"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M9.79943 11.5836C9.79943 12.5356 9.44746 13.4156 8.8555 14.1116C8.06355 15.0716 6.80762 15.6875 5.39971 15.6875L3.31185 16.9275C2.95987 17.1435 2.5119 16.8475 2.5599 16.4395L2.75988 14.8636C1.68795 14.1196 1 12.9276 1 11.5836C1 10.1756 1.75196 8.93564 2.90388 8.19965C3.61583 7.73565 4.47177 7.47168 5.39971 7.47168C7.83156 7.47168 9.79943 9.31161 9.79943 11.5836Z"
                                stroke="#142137"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </span>
                          08 Comment
                        </Link>
                      </p>
                    </div>

                    <div
                      class="border border-[#14213724] w-full mt-[13px] mb-8
"
                    ></div>

                    <div className="block">
                      <Link
                        href="/"
                        className="text-2xl font-semibold leading-[34px] text-primary -tracking-[2%]   bg-no-repeat bg-[linear-gradient(transparent_calc(100%-1px),currentColor_2px)] transition-all duration-[900ms] ease-[cubic-bezier(0.32,0.32,0.15,1.17)] bg-[size:0_100%] capitalize hover:bg-[size:100%_100%] hover:text-primary"
                      >
                        {blog.blogTitle} <br className="2xl:block hidden" />{" "}
                        {blog.blogTitle2}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
