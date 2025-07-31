"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { useTranslation } from "react-i18next"; // Import i18next

const News = () => {
  const { t } = useTranslation("news"); // Use 'news' namespace for translations

  const NewsData = {
    trendingNews: [
      {
        id: 1,
        title:
          "Eng. Mohamed Nur Ali Olow, General Manager of the Data Protection Authority, delivered a key speech during the meeting",
        date: "26 Dec 2024",
        // image: "/images/News/SOMNOG.jpg",
        link: "https://www.facebook.com/share/p/12Kxm1cYDfk/",
      },
      // More items
    ],
    popularPosts: [
      {
        id: 1,
        title:
          "Dr. Vincent Olatunji, Head of Nigeria's Data Protection Authority",
        date: "04 Sep 2024",
        image: "/images/News/Nigeria.jpg",
        link: "https://www.facebook.com/share/p/15u4JYQj1b/",
      },
      // More items
    ],
  };

  const { trendingNews, popularPosts } = NewsData;

  return (
    <section className={`py-20 lg:py-30 lg:px-20 px-10 mil-soft-bg relative bg-[#f2f2f2]`}>
      <div className="container mx-auto items-center">
        <div className="flex flex-col space-y-4 mb-12 p-4 lg:text-left">
          <div>
            <Badge variant="outline" className="text-zinc-700 font-medium">
              News & Media
            </Badge>
          </div>

          <h1 className="text-5xl font-bold tracking-tight">{t("newsTitle")}</h1>
        </div>

        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex flex-row gap-2 rounded-[10px] md:flex-row">
            <motion.div
              className="border-r w-full border-gray-300 p-4  border-dashed "
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-md w-full ">
                <img
                  src="/images/Covers/Third.jpg"
                  alt="Main Blog"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex flex-col space-y-4 mt-5">
                <motion.div>
                  <Link
                    href="https://www.facebook.com/share/p/14iRvKtRUB/"
                    className="text-lg font-semibold text-gray-800"
                  >
                    {t("posts[0].title")}
                  </Link>
                </motion.div>
                <motion.div>
                  <Link
                    href="https://www.facebook.com/share/p/14iRvKtRUB/"
                    className="text-base text-gray-700 "
                  >
                    {t("posts[0].summary")}
                  </Link>
                </motion.div>
                <div className="mt-4 flex items-center gap-2">
                  <span>
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 5.83325V8.49992L9.66667 10.1666"
                        stroke="#969AA9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.66668 2.72513C5.64725 2.1579 6.78572 1.83325 8.00001 1.83325C11.6819 1.83325 14.6667 4.81802 14.6667 8.49992C14.6667 12.1818 11.6819 15.1666 8.00001 15.1666C4.31811 15.1666 1.33334 12.1818 1.33334 8.49992C1.33334 7.28563 1.65799 6.14716 2.22522 5.16658"
                        stroke="#969AA9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <p className="text-sm text-gray-500">{t("posts[0].date")}</p>
                </div>
              </div>
            </motion.div>

            {/* Trending News */}
            <div className="space-y-6 border-r w-full border-gray-300 p-4 border-dashed">
              {trendingNews.map((item) => (
                <motion.div
                  key={item.id}
                  className="flex gap-4 border-b border-gray-200 pb-4 last:border-none"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-none w-[120px] h-[120px] relative overflow-hidden rounded-lg">
                    {/* <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    /> */}
                  </div>
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ color: "#0070f3" }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={item.link}
                        className="tracking-tighter text-base font-semibold text-gray-800"
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                    <p className="text-sm text-gray-500 mt-2 ">{item.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Section (Popular Posts) */}
          <div className="flex-none lg:w-[350px]">
            <div className="space-y-6 border border-gray-300 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-4 last:border-none">
                <h3 className="text-lg font-semibold">{t("popularPostsTitle")}</h3>
              </div>
              {popularPosts.map((item) => (
                <motion.div
                  key={item.id}
                  className="flex gap-4 border-b border-gray-200 pb-4 last:border-none"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-none w-[80px] h-[80px] relative overflow-hidden rounded-lg">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div>
                    <motion.div
                      whileHover={{ color: "red" }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={item.link}
                        className="text-md font-semibold text-gray-800"
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                    <p className="text-sm text-gray-500 mt-2">{item.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
