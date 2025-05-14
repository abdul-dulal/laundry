import React from "react";

const Address = ({ icon, title, add1, add2 }) => {
  return (
    <div className="2xl:mb-11 mb-8">
      <div className="flex xs:gap-[30px] gap-4">
        <div className="xs:size-[50px] size-10 grid place-content-center bg-primary rounded-full">
          <span>{icon}</span>
        </div>
        <div>
          <h5 className="text-[18px] font-medium leading-[36px] text-primary">
            {title}
          </h5>
          <p className=" text-[15px] font-normal leading-[24px] text-primary/70">
            {add1} <br /> {add2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Address;
