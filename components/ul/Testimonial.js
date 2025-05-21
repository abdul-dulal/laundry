import React from "react";
import AnimatedHeading from "./AnimatedHeading";
import FadeUpAnimationProvider from "./FadeUpAnimationProvider ";
import TestimonialContent from "./TestimonialContent";

const Testimonial = () => {
  return (
    <section className="bg-[#ECF2FE] lg:mt-[170px] md:mt-[100px] mt-20">
      <div className="container">
        <div className="pt-[100px] pb-[77px]">
          <div className="text-center">
            <FadeUpAnimationProvider>
              <h5 className="text-primary/70 leading-[27px]  border border-[rgb(217,219,223)] px-[20px] py-0 inline-block">
                <span className="mr-2 ">•</span>Our Happy Clients
              </h5>
            </FadeUpAnimationProvider>
            <div className="max-w-[563px] block m-auto mb-[70px] mt-4">
              <AnimatedHeading text="Raving Reviews From Satisfied Clients." />
            </div>
          </div>

          <TestimonialContent anim="marque-left" />
          <TestimonialContent anim="marque-right" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
