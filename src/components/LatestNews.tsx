"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { motion } from "framer-motion";

const posts = [
  {
    id: "post-1",
    titleKey: "posts.0.title",
    summaryKey: "posts.0.summary",
    publishedKey: "posts.0.published",
    href: "https://www.facebook.com/share/p/14iRvKtRUB/",
    image: "/images/Covers/Third.jpg",
  },
  {
    id: "post-2",
    titleKey: "posts.1.title",
    summaryKey: "posts.1.summary",
    publishedKey: "posts.1.published",
    href: "https://www.facebook.com/share/p/12Kxm1cYDfk/",
    image: "/images/News/SOMNOG.jpg",
  },
  {
    id: "post-3",
    titleKey: "posts.2.title",
    summaryKey: "posts.2.summary",
    publishedKey: "posts.2.published",
    href: "https://www.facebook.com/share/p/1GnfFFvyNr/",
    image: "/images/News/Dep.jpg",
  },
  {
    id: "post-4",
    titleKey: "posts.3.title",
    summaryKey: "posts.3.summary",
    publishedKey: "posts.3.published",
    href: "https://www.facebook.com/share/p/15QJCkrKc6/",
    image: "/images/News/SNCF.jpg",
  },
  {
    id: "post-5",
    titleKey: "posts.4.title",
    summaryKey: "posts.4.summary",
    publishedKey: "posts.4.published",
    href: "https://www.facebook.com/dpasomalia/posts/pfbid0gxbyCeC941Vo9fq3VES7SCLQFiQiPY7jaX2Zsz7meEr4xpoHh2v6xfa9xjHiHjprl",
    image: "/images/News/EAC.jpg",
  },
];

const LatestNews = () => {
  const { t } = useTranslation("latestNews");

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      scrollToTop();
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      scrollToTop();
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    scrollToTop();
  };

  const pageVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={pageVariant}
      className="py-20 lg:py-32"
    >
      <div className="container mx-auto p-8">
        <div className="flex flex-col space-y-6 mb-8 md:mb-14 lg:mb-16 ">
          <Badge variant="outline" className="text-zinc-700 font-medium">
            {t("newsTitle")}
          </Badge>
          <h1 className="mb-4 w-full text-4xl font-medium md:mb-5 md:text-5xl lg:mb-6 lg:text-6xl">
            {t("newsTitle")}
          </h1>
        </div>
        <div className="grid gap-x-4 gap-y-8 md:grid-cols-3 lg:gap-x-6 lg:gap-y-12 2xl:grid-cols-3">
          {currentPosts.map((post) => (
            <a
              key={post.id}
              href={post.href}
              className="group flex flex-col"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="mb-4 flex overflow-clip rounded-xl md:mb-5">
                <div className="h-full w-full transition duration-300 group-hover:scale-105">
                  <img
                    src={post.image}
                    alt={t(post.titleKey)}
                    className="aspect-[3/2] h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-2xl lg:pt-4 lg:text-2xl">
                {t(post.titleKey)}
              </div>
              <div className="mb-4 line-clamp-2 text-sm text-muted-foreground md:mb-5 md:text-base">
                {t(post.summaryKey)}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">
                  {t(post.publishedKey)}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 border-t border-border py-2 md:mt-10 lg:mt-12">
          <Pagination>
            <PaginationContent className="w-full justify-between">
              <PaginationItem>
                <PaginationPrevious onClick={handlePrevious} />
              </PaginationItem>

              <div className="hidden items-center gap-1 md:flex">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      onClick={() => handlePageChange(index + 1)}
                      href="#"
                      className={`${
                        currentPage === index + 1
                          ? "font-bold text-[#47BDFF]"
                          : "text-gray-500"
                      }`}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
              </div>

              <PaginationItem>
                <PaginationNext onClick={handleNext} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </motion.section>
  );
};

export default LatestNews;
