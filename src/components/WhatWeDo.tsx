"use client";

import { useTranslation } from "react-i18next";
import { Badge } from "./ui/badge";

const posts = [
  {
    id: "post-1",
    titleKey: "posts.post1.title",
    summaryKey: "posts.post1.summary",
    image: "/images/Enforcement and Compliance-01.png"
  },
  {
    id: "post-2",
    titleKey: "posts.post2.title",
    summaryKey: "posts.post2.summary",
    image: "/images/Awareness Campaign-01.png",
  },
  {
    id: "post-3",
    titleKey: "posts.post3.title",
    summaryKey: "posts.post3.summary",
    image: "/images/Regulation-01.png",
  },
];

function WhoWeAre() {
  const { t } = useTranslation("whoWeAre"); // Use namespace "whoWeAre"

  return (
    <section className="mil-Bg w-full py-20 lg:py-20">
      <div className="flex flex-col gap-16 lg:px-16">
        <div className="flex flex-col space-y-4 p-8">
          <div>
            <Badge variant="outline" className="text-zinc-700 font-medium">
              // {t("badge")}
            </Badge>
          </div>
          <h2 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            {t("mainTitle")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-6 p-8">
          {posts.map((post) => (
            <a
              key={post.id}
              className="flex flex-col overflow-clip rounded-xl border border-gray-300"
            >
              <div>
                <img
                  src={post.image}
                  alt={t(post.titleKey)}
                  className="aspect-[16/9] h-full w-full object-cover object-center"
                />
              </div>
              <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl lg:mb-6">
                  {t(post.titleKey)}
                </h3>
                <div className="mil-divider-sm mt-[10px] mb-[30px]" />
                <p className="mb-3 text-muted-foreground md:mb-4 lg:mb-6">
                  {t(post.summaryKey)}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
