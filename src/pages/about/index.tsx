import React from "react";

import AboutTheInsti from "../../components/WhoWeAre";
import Banner from "../../components/Banner";
import WhoWeAre from "../../components/WhatWeDo";
import Principles from "../../components/Principles";
import { FAQs } from "../../components/FAQs";

function index() {
  return (
    <>
      <Banner
        title={
          <>
            <span className="text-[#47BDFF]">About Us</span>
          </>
        }
        subtitle="About The DPA Somalia"
      />
      <AboutTheInsti />
      <WhoWeAre />
      <Principles />
      <FAQs />
    </>
  );
}

export default index;
