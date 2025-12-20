// src/components/About.tsx
"use client";

import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation("about");

  return (
    <section className="relative w-full overflow-hidden py-28 lg:py-40">

      {/* Background Image */}
      <div
        className="
          absolute inset-0 
          bg-[url('/images/covers/bg.jpg')] 
          bg-cover bg-center bg-no-repeat
        "
      />

      {/* Dark Overlay */}
      <div
        className="
          absolute inset-0 
          bg-black/80 
          backdrop-blur-sm
        "
      />

      {/* Decorative accent (kept as requested) */}
      <div className="hidden lg:block absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/10 dark:bg-primary-dark/25 transform -translate-x-1/3 translate-y-1/3" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-0 lg:flex lg:items-center lg:gap-12">

        {/* Photo & caption */}
        <figure className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="relative group">
            <img
              src="/images/PNG/mayor2.png"
              alt={t("heading.title")}
              className="
                w-72 h-72 sm:w-96 sm:h-96 
                lg:w-[32rem] lg:h-[32rem] 
                rounded-full object-cover shadow-xl 
                transition-transform duration-700 group-hover:scale-105
              "
            />
          </div>

          <figcaption
            className="
              mt-6 w-full max-w-md 
              px-6 py-4 
              bg-white/80 dark:bg-gray-800/80 
              backdrop-blur 
              rounded-xl shadow-lg
            "
          >
            <div className="flex gap-4">
              <span className="block w-1 rounded bg-red-500 dark:bg-primary-light" />
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-red-700 dark:text-primary-light">
                  {t("director.name")}
                </h4>
                <p className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-300">
                  {t("director.title")}
                </p>
              </div>
            </div>
          </figcaption>
        </figure>

        {/* Text content */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
          {t("pill") && (
            <p className="mb-2 text-sm text-gray-300 dark:text-gray-400">
              {t("pill")}
            </p>
          )}

          <h3 className="text-4xl lg:text-5xl font-extrabold text-white dark:text-primary-light">
            {t("heading.title")}&nbsp;
            <span className="text-primary-light dark:text-primary">
              {t("heading.highlight")}
            </span>
          </h3>

          {/* Quote */}
          <blockquote
            className="
              mx-auto mt-8 max-w-prose 
              text-left text-xl 
              leading-relaxed 
              text-white dark:text-gray-300
            "
          >
            “{t("disclosure")}”
          </blockquote>
        </div>
      </div>
    </section>
  );
}
