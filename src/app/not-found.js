import React from "react";

import HeaderTop from "@/components/header/HeaderTop";
import HeaderOne from "@/components/header/HeaderOne";

import SmoothScrollerProvider from "@/utils/SmoothScrollWrapper";
import NotFoundContent from "./home-two/components/NotFoundContent";

const NotFount = () => {
  return (
    <>
      <HeaderTop />
      <HeaderOne />
      <main>
        <SmoothScrollerProvider>
          <NotFoundContent />
        </SmoothScrollerProvider>
      </main>
    </>
  );
};

export default NotFount;
