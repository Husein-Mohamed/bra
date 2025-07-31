import Banner from "@/components/Banner";
import ForOrgan from "@/components/ForOrgan";
import React from "react";

function index() {
  return (
    <>
      <Banner
        title={
          <>
            <span className="text-[#47BDFF]">For Organizations</span>
          </>
        }
        subtitle="Know Your Obligtions"
      />
      <ForOrgan />
    </>
  );
}

export default index;
