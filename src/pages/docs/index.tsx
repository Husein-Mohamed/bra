import React from "react";

import Banner from "../../components/Banner";
import Docs from "../../components/Docs";

function Doc() {
  return (
    <>
      <Banner
        title={
          <>
            <span className="text-[#47BDFF]">Our Resources</span>
          </>
        }
        subtitle="Somalia Data Protection Authority Resources"
      />
      <Docs />
    </>
  );
}

export default Doc;
