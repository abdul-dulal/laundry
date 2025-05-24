import HeaderOne from "@/components/header/HeaderOne";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";

import FooterOne from "@/components/footer/FooterOne";
import Details from "./components/Details";
import SmoothScrollerProvider from "@/utils/SmoothScrollWrapper";
import BreadCumb from "@/components/ul/BreadCumb";

const BlogDetails = () => {
  return (
    <>
      <HeaderTop />
      <HeaderOne />
      <main>
        <SmoothScrollerProvider>
          <BreadCumb currentPage="Blog Details" />
          <Details />
          <FooterOne />
        </SmoothScrollerProvider>
      </main>
    </>
  );
};

export default BlogDetails;
