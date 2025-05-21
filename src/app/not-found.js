import React from "react";

import HeaderTop from "@/components/header/HeaderTop";
import HeaderOne from "@/components/header/HeaderOne";
import NotFoundContent from "./HomeTwo/components/NotFoundContent";
import SmoothScrollerProvider from "@/utils/SmoothScrollWrapper";

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
