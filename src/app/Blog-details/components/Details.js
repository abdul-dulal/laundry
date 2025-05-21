"use client";
import Image from "next/image";
import React from "react";
import AuthorDetails from "../../Blog/components/AuthorDetails";
import bds from "@/public/img/blog/bds.png";
import author from "@/public/img/blog/author-01.jpg";
import SideBar from "../../Blog/components/SideBar";
import Quote from "../../Blog/components/Quote";
import laundry from "@/public/img/blog-details/bds-02.png";
import author2 from "@/public/img/blog-details/author.png";
import Link from "next/link";
import Social from "../../Blog/components/Social";
import Tag from "../../Blog/components/Tag";
import author3 from "@/public/img/blog-details/post-01.png";
import { comments } from "../data";
import RevealLefToRight from "@/components/ul/RevealLefToRight";
import FadeUpAnimationProvider from "@/components/ul/FadeUpAnimationProvider ";
import RevealRightToLeft from "@/components/ul/RevealRightToLeft";
const Details = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="lg:py-[150px] md:py-[100px] py-20">
      <div className="container">
        <div className="grid grid-cols-12 lg:gap-[60px] gap-0">
          <div className="2xl:col-span-9 xl:col-span-8 col-span-12">
            <article className="pb-[58px]">
              <div className="">
                <RevealLefToRight img={bds} />
              </div>
              <AuthorDetails
                author={author}
                name="Miles Tone"
                title="Refresh Your Wardrobe, Refresh Your Life"
              />
            </article>
            <FadeUpAnimationProvider>
              <div className="grid sm:grid-cols-2 gap-10 justify-between">
                <div>
                  <div className="flex gap-[6px]">
                    <span>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22Z"
                          fill="#4375E7"
                        />
                        <path
                          d="M15.5 8L9.3125 14L6.5 11.2727"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[16px] font-medium leading-[100%] text-primary">
                      Professional Dry Cleaning & Laundry
                    </span>
                  </div>
                  <p className="text-base font-normal leading-[26px] text-primary/70 mt-6">
                    Cleaning is more than just visiting places creating memories
                    discovering new cultures.
                  </p>
                </div>
                <div>
                  <div className="flex gap-[6px]">
                    <span>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22Z"
                          fill="#4375E7"
                        />
                        <path
                          d="M15.5 8L9.3125 14L6.5 11.2727"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[16px] font-medium leading-[100%] text-primary">
                      Fast & Reliable Laundry Services
                    </span>
                  </div>
                  <p className="text-base font-normal leading-[26px] text-primary/70 mt-6">
                    Cleaning is more than just visiting places creating memories
                    discovering new cultures.
                  </p>
                </div>
              </div>
            </FadeUpAnimationProvider>
            <FadeUpAnimationProvider>
              <p className="text-base font-normal leading-[26px] text-primary/70 mt-11">
                Cleaning is more than just visiting places—it's about creating
                lasting memories, discovering new cultures, and experiencing the
                extrinary. From breathtaking landscapes to immersive local
                adventures, we curate seamless trave.
              </p>
            </FadeUpAnimationProvider>
            <FadeUpAnimationProvider>
              {" "}
              <Quote />
            </FadeUpAnimationProvider>
            <div className="py-20">
              <div className="grid md:grid-cols-2 gap-[34px] items-stretch  2xl:pr-[87px] pr-[15px]  h-full">
                <div className="border-r-2 pr-[26px] border-secondary h-full w-full flex items-center justify-center">
                  {" "}
                  <Image
                    src={laundry}
                    alt="Laundry"
                    className="w-full h-full"
                  />
                </div>
                <div className="w-full h-full flex flex-col justify-between">
                  <FadeUpAnimationProvider>
                    <h3 className="sm:text-2xl text-xl font-medium text-primary tracking-[2%] leading-[34px] 2xl:mb-[33px] mb-5">
                      A picture speaks of quality—just like fresh,
                      professionally cleaned clothes.
                    </h3>
                  </FadeUpAnimationProvider>
                  <FadeUpAnimationProvider>
                    {" "}
                    <p className="text-base font-normal text-primary/70 leading-[26px]">
                      Cleaning is more than just visiting places—it's about
                      creating lasting memories, discovering new cultures, and
                      expencing the extrinary. From breathtaking landscapes to
                      immersiveal adventures, we curate seamless travel
                      experiences tailored to your dreams. Whether you seek
                      relaxation, adventure, or cultural exploration, we are
                      here.
                    </p>
                  </FadeUpAnimationProvider>
                </div>
              </div>
              <FadeUpAnimationProvider>
                {" "}
                <p className="text-base font-normal leading-[26px] text-primary/70 mt-11">
                  Cleaning is more than just visiting places—it's about creating
                  lasting memories, discovering new cultures, and experiencing
                  the extrinary. From breathtaking landscapes to immersive local
                  adventures, we curate seamless travel experiences tailored to
                  your dreams. Whether you seek relaxation, adventure, or
                  cultural exploration, we are here to turn your journey.
                </p>
              </FadeUpAnimationProvider>
            </div>
            <FadeUpAnimationProvider>
              {" "}
              <div className="py-[14px] pl-[14px] 2xl:pr-[87px] pr-[15px] bg-[#EBEFF3]">
                <div className="grid grid-cols-12 md:gap-[50px] items-center">
                  <div className="md:col-span-4 col-span-12">
                    <Image
                      src={author2}
                      alt="Laundry author"
                      className="object-cover w-full h-[360px]"
                    />
                  </div>
                  <div className="md:col-span-8 col-span-12 md:mt-0 mt-[30px]">
                    <button className="px-[14px] py-[9px] bg-secondary text-[15px] font-medium text-white -tracking-[2%] leading-[26px] uppercase ">
                      ceo & co-founder
                    </button>
                    <h5 className="my-10 text-xl font-semibold text-primary">
                      Lurch Schpellchek
                    </h5>
                    <p className="text-base font-medium leading-[28px] text-primary/70">
                      We believe that fresh clean clothes bring confidence and
                      comfort. With a passion for quality and convenience, we
                      provide top-notch laundry & dry cleaning services tailored
                      to meet your needs.
                    </p>
                    <div className="flex flex-wrap gap-6 justify-between  items-center mt-10">
                      <Link
                        className="flex  gap-2 items-center text-base font-medium "
                        href="/Blog"
                      >
                        See All Post{" "}
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 7.00024L13 7.00024"
                            stroke="#142137"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7 1L13 7L7 13"
                            stroke="#142137"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                      <Social width={40} />
                    </div>
                  </div>
                </div>
              </div>
            </FadeUpAnimationProvider>
            <FadeUpAnimationProvider>
              {" "}
              <div className="my-[86px]">
                <div className="flex flex-wrap gap-10 justify-between">
                  <div className="flex flex-wrap gap-3 items-center">
                    <h5 className="text-[24px] font-medium leading-[34px] -tracking-[-2%] text-primary">
                      Related Tags:
                    </h5>
                    <div className="flex flex-wrap gap-[10px]">
                      <Tag tagTitle="Fresh" />
                      <Tag tagTitle="Flawless" />
                      <Tag tagTitle="Clean" />
                      <Tag tagTitle="Crisp" />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <h5 className="text-[24px] font-medium leading-[34px] -tracking-[-2%] text-primary">
                      Social Share:
                    </h5>
                    <Social />
                  </div>
                </div>
              </div>
            </FadeUpAnimationProvider>
            <FadeUpAnimationProvider>
              {" "}
              <div className="flex md:flex-nowrap flex-wrap  gap-[30px] justify-between">
                <div className="border border-primary/15 p-[14px]  w-full">
                  <div className="flex items-center gap-[30px]">
                    <div>
                      <Image src={author3} alt="author" />
                    </div>
                    <div>
                      <Link
                        className="flex gap-2 items-center text-[15px] text-primary/70 font-medium leading-[100%]"
                        href=""
                      >
                        <span>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13 7H1"
                              stroke="#5B6473"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7 13L1 7L7 1"
                              stroke="#5B6473"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        Previous Post
                      </Link>
                      <h5 className="md:text-xl xs:text-lg text-base font-semibold leading-[30px] -tracking-[2%] mt-[26px] max-w-[352px]">
                        How to Keep Your Garments Fresh & Clean Laundry Tips.
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="border border-primary/15 p-[14px] w-full">
                  <div className="flex items-center justify-end gap-[30px]">
                    <div className="text-right">
                      <Link
                        className="flex gap-2 items-center justify-end text-[15px] text-primary/70 font-medium leading-[100%]"
                        href=""
                      >
                        <span>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13 7H1"
                              stroke="#5B6473"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7 13L1 7L7 1"
                              stroke="#5B6473"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        Previous Post
                      </Link>
                      <h5 className="md:text-xl xs:text-lg text-base font-semibold leading-[30px] -tracking-[2%] mt-[26px] max-w-[370px]">
                        Stain Removal to Fabric Care Laundry & Dry Cleaning
                        Tips.
                      </h5>
                    </div>
                    <div>
                      <Image src={author3} alt="author" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeUpAnimationProvider>
            <div className="2xl:my-[90px] my-16">
              <div className="max-w-[922px]">
                <FadeUpAnimationProvider>
                  <h2 className="lg:text-[44px] md:text-[32px] sm:text-[28px] text-2xl font-semibold leading-[64px] -tracking-[2%] mb-10">
                    2 Comments
                  </h2>
                </FadeUpAnimationProvider>
                {comments.map((comment, idx) => (
                  <div
                    key={idx}
                    className={`${comment.id == 2 ? "lg:ml-20 ml-0" : "ml-0"}`}
                  >
                    <FadeUpAnimationProvider>
                      {" "}
                      <div className="mb-10">
                        <div className="flex flex-wrap gap-5 items-start justify-between">
                          <div className="flex gap-5 items-center">
                            <Image
                              src={comment.imag}
                              alt={comment.name}
                              width={60}
                              height={60}
                              className="rounded-[6px] object-cover"
                            />
                            <div className="">
                              <h5 className="text-lg font-semibold leading-[100%] text-primary">
                                {comment.name}
                              </h5>
                              <p className="text-base font-medium leading-[26px] text-[#616161]">
                                {comment.date}
                              </p>
                            </div>
                          </div>
                          <button className="flex items-center gap-2 text-base font-normal text-primary/70 border px-3 py-1 rounded-md hover:bg-gray-100">
                            <svg
                              width="13"
                              height="10"
                              viewBox="0 0 13 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.1615 10C11.953 10 11.7721 9.92334 11.6187 9.77002C11.4654 9.61669 11.3888 9.43578 11.3888 9.22726V7.11141C11.3888 6.51039 11.1772 5.9983 10.754 5.57513C10.3308 5.15196 9.81874 4.94038 9.21772 4.94038H2.63101L4.71005 7.01942C4.85724 7.16661 4.93083 7.3414 4.93083 7.54378C4.93083 7.74617 4.85111 7.92709 4.69165 8.08654C4.54446 8.23373 4.36354 8.30733 4.14889 8.30733C3.93424 8.30733 3.75332 8.23373 3.60613 8.08654L0.239182 4.71959C0.153322 4.63373 0.0919932 4.5448 0.0551959 4.45281C0.0183986 4.36082 0 4.26576 0 4.16763C0 4.06951 0.0183986 3.97445 0.0551959 3.88245C0.0919932 3.79046 0.153322 3.70153 0.239182 3.61567L3.62453 0.230324C3.77172 0.0831346 3.94957 0.0064736 4.15809 0.000340716C4.36661 -0.00579216 4.5506 0.0708688 4.71005 0.230324C4.85724 0.377513 4.93083 0.558433 4.93083 0.773084C4.93083 0.987734 4.85724 1.16865 4.71005 1.31584L2.63101 3.39489H9.21772C10.248 3.39489 11.125 3.75673 11.8487 4.48041C12.5724 5.20409 12.9342 6.08109 12.9342 7.11141V9.22726C12.9342 9.43578 12.8576 9.61669 12.7043 9.77002C12.5509 9.92334 12.37 10 12.1615 10Z"
                                fill="#616161"
                              />
                            </svg>
                            Reply
                          </button>
                        </div>
                        <p className="xs:ml-20 ml-0 mt-8 text-base font-normal leading-[26px] text-primary/70">
                          {comment.comment}
                        </p>
                        <hr className="my-6 border-gray-300" />
                      </div>
                    </FadeUpAnimationProvider>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <FadeUpAnimationProvider>
                {" "}
                <h2 className="lg:text-[44px] md:text-[32px] sm:text-[28px] text-2xl font-semibold leading-[64px] -tracking-[2%] mb-10">
                  Leave a Comment
                </h2>
              </FadeUpAnimationProvider>

              <form
                onSubmit={handleSubmit}
                className="max-w-4xl mx-auto px-4 py-6"
              >
                <FadeUpAnimationProvider>
                  {" "}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="text-[16px] font-normal leading-[26px] text-primary/70 ">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="mt-4 w-full border border-primary/10 rounded h-[50px] focus:outline-none focus:ring focus:ring-blue-200"
                      />
                    </div>
                    <div>
                      <label className="text-[16px] font-normal leading-[26px] text-primary/70 ">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-4 w-full border border-primary/10 rounded h-[50px] focus:outline-none focus:ring focus:ring-blue-200"
                      />
                    </div>
                  </div>
                </FadeUpAnimationProvider>

                <FadeUpAnimationProvider>
                  <div className="mb-5">
                    <label className="text-[16px] font-normal leading-[26px] text-primary/70">
                      Your Comment *
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      rows="5"
                      required
                      className="mt-4 w-full border border-primary/10 rounded h-[210px] focus:outline-none focus:ring focus:ring-blue-200"
                    />
                  </div>
                </FadeUpAnimationProvider>

                <FadeUpAnimationProvider>
                  <div className="mb-10 flex items-center">
                    <input
                      type="checkbox"
                      id="saveInfo"
                      name="saveInfo"
                      className="mr-2"
                    />
                    <label htmlFor="saveInfo" className="text-sm text-gray-600">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </div>
                </FadeUpAnimationProvider>

                <FadeUpAnimationProvider>
                  {" "}
                  <button
                    type="submit"
                    className="mt-5 block group  rounded-[100px] w-[200px] bg-primary relative overflow-hidden transition-all duration-[0.7s] ease-in-out z-10 text-center leading-[54px] border border-transparent before:content-[''] before:absolute before:top-[-80px] before:right-[-60px] before:w-0 before:h-[200px] before:bg-white before:transition-all before:duration-[1.2s] before:ease-in-out before:z-[-1] before:rotate-[-20deg] after:content-[''] after:absolute after:top-[-70px] after:left-[-60px] after:w-0 after:h-[200px] after:bg-white after:transition-all after:duration-[1.2s] after:ease-in-out after:z-[-1] after:rotate-[-20deg] hover:after:w-full hover:before:w-full"
                  >
                    <div className="flex  gap-[16px] justify-between items-center pl-6  text-white group-hover:text-primary group-hover:delay-300 group-hover:transition-all text-[15px] font-medium transition-all duration-[.4s]">
                      <span> Post Comment</span>
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
                  </button>
                </FadeUpAnimationProvider>
              </form>
            </div>
          </div>
          <div className="2xl:col-span-3 xl:col-span-4 col-span-12 lg:mt-0 mt-10">
            <SideBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
