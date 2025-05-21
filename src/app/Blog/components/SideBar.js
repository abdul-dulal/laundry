"use client";
import React from "react";
import post from "@/public/img/blog/post-01.png";
import post2 from "@/public/img/blog/post-02.png";
import post3 from "@/public/img/blog/post-03.png";
import Posts from "./Posts";
import Category from "../../Service-details/components/Category";
import Tag from "./Tag";
import Link from "next/link";
import FadeUpAnimationProvider from "@/components/ul/FadeUpAnimationProvider ";
const SideBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex lg:flex-col lg:flex-nowrap flex-row flex-wrap justify-center gap-[30px]  w-full">
      <FadeUpAnimationProvider>
        <div
          className="bg-[#ebeff3] w-full max-w-[380px] xs:px-[30px] px-[15px] pt-[30px] pb-[40px]
"
        >
          <div className="">
            <h5
              className="font-semibold text-[24px] leading-[142%] tracking-[-0.02em] text-[#142137]
"
            >
              Search
            </h5>
          </div>
          <div className="">
            <form
              onSubmit={handleSubmit}
              className="mt-[24px] w-full h-[44px] flex flex-row justify-between items-center
"
            >
              <input
                className="w-[calc(100%-44px)] h-[44px] outline-none px-[20px] border border-[#1421371a] bg-[#ebeff3]
"
                type="text"
                placeholder="Search Here..."
              />
              <button
                type="submit"
                className="size-11 grid place-content-center  text-center leading-[44px] bg-[#4375e7] text-white
"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.11109 15.2222C12.0384 15.2222 15.2222 12.0384 15.2222 8.1111C15.2222 4.18375 12.0384 1 8.11109 1C4.18375 1 1 4.18375 1 8.1111C1 12.0384 4.18375 15.2222 8.11109 15.2222Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.9995 16.9995L13.1328 13.1328"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </FadeUpAnimationProvider>

      <div className="bg-[#ebeff3] w-full max-w-[380px] xs:px-[30px] px-[15px] pt-[30px] pb-[40px]">
        <div className="">
          <FadeUpAnimationProvider>
            <h5 className="font-semibold text-[24px] leading-[142%] tracking-[-0.02em] text-[#142137]">
              Recent Posts
            </h5>
          </FadeUpAnimationProvider>
        </div>
        <div className="pt-6 flex flex-col justify-start items-center gap-6">
          <Posts img={post} title="Natural Laundry Detergents Explained." />
          <Posts img={post2} title="15 Reason  Expert Handle Dry Cleaning." />
          <Posts img={post3} title="Complete Guide  Green  Natural Laundry." />
        </div>
      </div>
      <Category />
      <div
        className="bg-[#ebeff3] w-full max-w-[380px] xs:px-[30px] px-[15px] pt-[30px] pb-[40px]
"
      >
        <div className="">
          <h5
            className="font-semibold text-[24px] leading-[142%] tracking-[-0.02em] text-[#142137]
"
          >
            Popular Tags
          </h5>
        </div>
        <div className="mt-11">
          <div className="flex flex-wrap items-center gap-[10px]">
            <Tag tagTitle=" Fresh" />
            <Tag tagTitle="Flawless" />
            <Tag tagTitle="Clean" />
            <Tag tagTitle="Crisp" />
            <Tag tagTitle="Rent" />
            <Tag tagTitle="Fresh Clothes" />
            <Tag tagTitle="Flawless" />
            <Tag tagTitle=" Our Care" />
          </div>
        </div>
      </div>
      <div
        className="bg-[#ebeff3] w-full max-w-[380px] xs:px-[30px] px-[15px] pt-[30px] pb-[40px]
"
      >
        <div className="">
          <FadeUpAnimationProvider>
            {" "}
            <h5
              className="font-semibold text-[24px] leading-[142%] tracking-[-0.02em] text-[#142137]
"
            >
              Follow Us
            </h5>
          </FadeUpAnimationProvider>
        </div>
        <div className="mt-11">
          <ul className="flex items-center gap-[10px]">
            <li className="">
              <Link
                className="size-[50px] grid place-content-center bg-[#1877F2] rounded-full"
                href="https://www.facebook.com/"
              >
                <svg
                  width="12"
                  height="22"
                  viewBox="0 0 12 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0H8.72727C7.28064 0 5.89325 0.579463 4.87033 1.61091C3.8474 2.64236 3.27273 4.04131 3.27273 5.5V8.8H0V13.2H3.27273V22H7.63636V13.2H10.9091L12 8.8H7.63636V5.5C7.63636 5.20826 7.7513 4.92847 7.95588 4.72218C8.16047 4.51589 8.43795 4.4 8.72727 4.4H12V0Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                className="size-[50px] grid place-content-center bg-[#040618] rounded-full"
                href="https://x.com/"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.72547 11.0089C7.24388 11.5553 6.77313 12.0895 6.30239 12.624C4.75788 14.377 3.21279 16.1295 1.67092 17.8846C1.59613 17.9699 1.51928 18.0012 1.40724 17.9997C0.996627 17.9939 0.58601 17.9977 0.175392 17.9971C0.127878 17.9971 0.080657 17.9928 0 17.9887C0.160434 17.8056 0.302097 17.6434 0.444347 17.482C2.46312 15.1907 4.48189 12.899 6.50066 10.6077C6.65141 10.4368 6.79836 10.2627 6.95439 10.0966C7.01774 10.0295 7.01393 9.98383 6.9629 9.91181C6.14782 8.75748 5.33568 7.60111 4.52236 6.44533C3.57824 5.10356 2.63323 3.76209 1.68881 2.42061C1.14592 1.64864 0.603021 0.876674 0.0598328 0.104705C0.0437014 0.081566 0.0293298 0.056981 0.000586596 0.011571C0.0683385 0.00810016 0.119079 0.00318315 0.169526 0.00318315C1.84602 0.00260468 3.5228 0.00376162 5.1993 1.56027e-06C5.31222 -0.000287675 5.37557 0.0396268 5.43687 0.127265C6.62443 1.81843 7.81493 3.50785 9.00425 5.19785C9.2996 5.61725 9.59378 6.0375 9.88884 6.45719C9.92462 6.50838 9.96187 6.55842 10.0091 6.62407C10.1642 6.44967 10.3118 6.28538 10.4578 6.11965C12.2203 4.11929 13.9827 2.11894 15.7431 0.116853C15.8126 0.0376022 15.8821 -0.00144462 15.9921 0.000290796C16.4074 0.00636474 16.823 0.00260468 17.2386 0.00289392C17.2858 0.00289392 17.333 0.00752168 17.4128 0.0118602C17.2257 0.225895 17.0594 0.417947 16.8913 0.608553C14.8658 2.90682 12.8409 5.20566 10.8121 7.50104C10.7274 7.59677 10.7309 7.65983 10.8004 7.75817C12.5048 10.175 14.2059 12.5936 15.9082 15.0119C16.5713 15.9539 17.2354 16.8951 17.8985 17.8372C17.9287 17.8803 17.9569 17.9248 18 17.9899C17.9302 17.9931 17.8792 17.9971 17.8284 17.9971C16.1566 17.9974 14.4851 17.9962 12.8133 18C12.691 18.0003 12.6221 17.9595 12.5532 17.8612C11.3301 16.1179 10.1027 14.3776 8.87667 12.6364C8.51444 12.1222 8.15369 11.6067 7.79176 11.0919C7.77504 11.0688 7.75598 11.0474 7.72547 11.0089ZM15.8355 16.8827C15.7994 16.8257 15.7765 16.7849 15.7495 16.747C15.4791 16.369 15.2078 15.9918 14.9374 15.6141C12.923 12.8001 10.9086 9.98615 8.89427 7.17246C7.49113 5.2126 6.08711 3.25361 4.68602 1.29202C4.62355 1.20438 4.56079 1.16504 4.44816 1.16562C3.72958 1.17083 3.01129 1.16793 2.29271 1.16822C2.25077 1.16822 2.20912 1.17285 2.14724 1.17661C2.18947 1.23909 2.22027 1.28652 2.25312 1.33251C3.98387 3.74849 5.71491 6.1639 7.44537 8.57989C9.40402 11.3146 11.3624 14.0496 13.3178 16.7869C13.3776 16.8705 13.441 16.8922 13.536 16.8916C14.2496 16.8888 14.9632 16.8902 15.6771 16.8896C15.7228 16.8902 15.7695 16.8859 15.8355 16.8827Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                className="size-[50px] grid place-content-center bg-[#1877F2] rounded-full"
                href="https://www.linkedin.com/"
              >
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.732 6.31543C16.407 6.31543 18.0135 6.98085 19.198 8.1653C20.3825 9.34976 21.0479 10.9562 21.0479 12.6313V19.9998H16.8373V12.6313C16.8373 12.0729 16.6155 11.5374 16.2206 11.1426C15.8258 10.7478 15.2903 10.526 14.732 10.526C14.1736 10.526 13.6381 10.7478 13.2433 11.1426C12.8485 11.5374 12.6266 12.0729 12.6266 12.6313V19.9998H8.41602V12.6313C8.41602 10.9562 9.08144 9.34976 10.2659 8.1653C11.4504 6.98085 13.0569 6.31543 14.732 6.31543Z"
                    fill="white"
                  />
                  <path
                    d="M4.21063 7.36816H0V19.9999H4.21063V7.36816Z"
                    fill="white"
                  />
                  <path
                    d="M2.10531 4.21057C3.26805 4.21057 4.21063 3.268 4.21063 2.10529C4.21063 0.942569 3.26805 0 2.10531 0C0.942581 0 0 0.942569 0 2.10529C0 3.268 0.942581 4.21057 2.10531 4.21057Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                className="size-[50px] grid place-content-center bg-[#CB2027] rounded-full"
                href="https://www.instagram.com/"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.009 0C4.92886 0 0 4.92078 0 10.991C0 15.6496 2.89956 19.6298 6.99474 21.2309C6.89446 20.3629 6.81398 19.0236 7.03047 18.0739C7.22974 17.2141 8.31691 12.6096 8.31691 12.6096C8.31691 12.6096 7.9911 11.9496 7.9911 10.9815C7.9911 9.4527 8.879 8.31316 9.98425 8.31316C10.9264 8.31316 11.38 9.01914 11.38 9.86047C11.38 10.8011 10.7822 12.2126 10.4646 13.5244C10.202 14.6188 11.0172 15.5143 12.0953 15.5143C14.0528 15.5143 15.557 13.4518 15.557 10.4844C15.557 7.85168 13.6637 6.01562 10.9544 6.01562C7.81981 6.01562 5.97988 8.35871 5.97988 10.783C5.97988 11.7236 6.3427 12.7372 6.79504 13.2894C6.88671 13.3968 6.89618 13.4965 6.86864 13.6048C6.78686 13.9485 6.59706 14.6992 6.56005 14.8534C6.51485 15.0524 6.3965 15.0971 6.18819 14.9982C4.81093 14.3559 3.94971 12.3565 3.94971 10.7375C3.94971 7.27246 6.46837 4.08891 11.2255 4.08891C15.0405 4.08891 18.0115 6.80324 18.0115 10.4397C18.0115 14.0761 15.6198 17.279 12.3032 17.279C11.1885 17.279 10.137 16.6998 9.78455 16.0123C9.78455 16.0123 9.23192 18.1105 9.09592 18.6265C8.85189 19.5852 8.18047 20.7797 7.7277 21.5123C8.7615 21.8277 9.84954 22 10.9909 22C17.0711 22 22 17.0792 22 11.009C22.0176 4.92078 17.0892 0 11.009 0Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
