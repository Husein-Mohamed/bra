import Advise from "@/components/Advise";
import Banner from "@/components/Banner";
import KnowYourRights from "@/components/KnowYourRights";
import YourRights from "@/components/YourRights";
import React from "react";

function FTP() {
  return (
    <>
      <Banner
        title={
          <>
            <span className="text-[#47BDFF]">For The Public Public</span>
          </>
        }
        subtitle="Know Your Rights"
      />
      <KnowYourRights />
      <YourRights />
      <Advise />
    </>
  );
}

export default FTP;
