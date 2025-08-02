import React from "react";

import News from "@/components/News";
import Banner from "@/components/Banner";
import TrendingNews from "@/components/TrendingNews";
import LatestNews from "@/components/LatestNews";
import Blogs from "@/components/Blogs";
function NewsMedia() {
  return (
    <>
      <Banner
        title={
          <>
            <span className="text-[#47BDFF]">Our News and Media</span>
          </>
        }
        subtitle="Discover Our Latest News"
      />
      <LatestNews />
      <TrendingNews />
       <Blogs />       {/* ← new blogs section */}
    </>
  );
}

export default NewsMedia;
