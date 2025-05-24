import Link from "next/link";
import AnimatedHeading from "@/components/ul/AnimatedHeading";
import FadeUpAnimationProvider from "@/components/ul/FadeUpAnimationProvider ";
import FaqContentTwo from "./FaqContentTwo";

const Faqs = () => {
  return (
    <section className="lg:py-[150px] md:py-[100px] py-20">
      <div className="container">
        <div className="grid grid-cols-12 lg:gap-[70px] items-stretch">
          {/* Left Column */}
          <div className="lg:col-span-5 col-span-12 h-full w-full">
            <div className="bg-[#F2F6FF] sm:p-10 p-7 h-full rounded flex flex-col justify-between">
              <div>
                <div>
                  <AnimatedHeading text="FAQ" />
                </div>
                <FadeUpAnimationProvider>
                  <h3 className="md:text-[30px] sm:text-[26px] text-2xl font-semibold text-primary -tracking-[2%] sm:my-11 my-5">
                    Having Another Question?
                  </h3>
                </FadeUpAnimationProvider>
              </div>

              <div className="group mt-auto">
                <FadeUpAnimationProvider>
                  <Link
                    href="/contact"
                    className="block rounded-[100px] 2xl:w-[56%] lg:w-[80%] sm:w-[50%] w-full bg-primary relative overflow-hidden transition-all duration-[0.7s] ease-in-out z-10 text-center leading-[54px] before:content-[''] before:absolute before:top-[-80px] before:right-[-60px] before:w-0 before:h-[200px] before:bg-secondary before:transition-all before:duration-[1.2s] before:ease-in-out before:z-[-1] before:rotate-[-20deg] after:content-[''] after:absolute after:top-[-70px] after:left-[-60px] after:w-0 after:h-[200px] after:bg-secondary after:transition-all after:duration-[1.2s] after:ease-in-out after:z-[-1] after:rotate-[-20deg] group-hover:after:w-full group-hover:before:w-full"
                  >
                    <div className="flex  gap-[16px] justify-between items-center pl-6 text-white group-hover:text-white group-hover:delay-300 group-hover:transition-all text-[15px] font-medium transition-all duration-[.4s]">
                      <span> Send a Message</span>
                      <span className="grid place-content-center size-[34px] bg-white transition-all duration-500 group-hover:bg-white rounded-full mr-[10px]">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-primary transition-all duration-500 group-hover:text-primary group-hover:rotate-[45deg]"
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
                </FadeUpAnimationProvider>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 col-span-12 h-full w-full">
            <div className="h-full pb-[50px]">{/* <FaqContentTwo /> */}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
