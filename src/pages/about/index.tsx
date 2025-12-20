import React from "react";

import AboutTheInsti from "../../components/WhoWeAre";
import Banner        from "../../components/Banner";
import WhatWeDo      from "../../components/WhatWeDo";
import Milestones    from "../../components/Milestones";   // ← NEW
import Principles    from "../../components/Principles";
import { FAQs }      from "../../components/FAQs";

function Index() {
  return (
    <>
      <Banner
        title={<span className="text-[#47BDFF]">About BRA</span>}
        subtitle="About Banadir Region"
      />
      <AboutTheInsti />
      <WhatWeDo />
      <Milestones />       {/* ← NEW */}
      <Principles />
      <FAQs />
    </>
  );
}

export default Index;
