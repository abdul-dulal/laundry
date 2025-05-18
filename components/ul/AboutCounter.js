import React from "react";

const AboutCounter = () => {
  return (
    <div className="about_card_wrapper w-[210px] h-[210px] flex flex-col justify-center items-center text-center relative border border-[#142137] border-opacity-14 rounded-full overflow-hidden">
      <h2 className="about_count">86K</h2>
      <p className="text-[16px] font-medium leading-[22px] text-primary/70 mt-2">
        Free Pickup & <br />
        Delivery
      </p>
    </div>
  );
};

export default AboutCounter;
