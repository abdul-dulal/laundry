import FadeUpAnimationProvider from "@/components/ul/FadeUpAnimationProvider ";
import Link from "next/link";
import React from "react";

const Tag = ({ tagTitle }) => {
  return (
    <div className="list-none">
      <FadeUpAnimationProvider>
        <Link
          className="text-[15px] font-medium t leading-[26px] py-[10px] px-[13px] border inline-block bg-transparent transition-all duration-500 ease-out hover:bg-secondary hover:text-white text-primary/70 border-primary/15"
          href=""
        >
          {tagTitle}
        </Link>
      </FadeUpAnimationProvider>
    </div>
  );
};

export default Tag;
