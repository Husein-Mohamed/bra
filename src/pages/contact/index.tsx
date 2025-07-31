import Banner from "@/components/Banner";
import { FAQs } from "@/components/FAQs";
import ContactForm from "@/components/contactForm";
import React from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation("contact"); // use a namespace, e.g. "contact"

  return (
    <>
      <Banner
        title={
          <>
            <span className="text-[#47BDFF]">{t("contactUs")}</span>
          </>
        }
        subtitle={t("getInTouch")}
      />

      <ContactForm />
      <FAQs />
    </>
  );
}

export default Contact;
