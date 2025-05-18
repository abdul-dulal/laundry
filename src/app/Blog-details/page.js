import HeaderOne from "@/components/header/HeaderOne";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";
import BreadCumb from "../About/components/BreadCumb";
import FooterOne from "@/components/footer/FooterOne";
import Details from "./components/Details";

const BlogDetails = () => {
  return (
    <>
      <HeaderTop />
      <HeaderOne />
      <main>
        <BreadCumb currentPage="Blog Details" />
        <Details />
      </main>
      <FooterOne />
    </>
  );
};

export default BlogDetails;
