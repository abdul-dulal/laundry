import React from "react";
import TeamContent from "../../HomeTwo/components/TeamContent";

const Team = () => {
  return (
    <div className="container">
      <div className="border-[1px] border-t border-primary/20  lg:mb-[120px] md:mb-[90px] mb-[70px]"></div>
      <div className="lg:mb-[120px] md:mb-[90px] mb-[70px]">
        <TeamContent showItem={8} />
      </div>
    </div>
  );
};

export default Team;
