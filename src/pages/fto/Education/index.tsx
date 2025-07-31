import Banner from "@/components/Banner";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import React from "react";

function EducationDataProtection() {
  const { t } = useTranslation('educationDataProtection');

  const bestPractices = t('bestPractices', { returnObjects: true });
  const benefits = t('benefits', { returnObjects: true });

  return (
    <>
      <Banner
        title={<span className="text-[#47BDFF]">{t('bannerTitle')}</span>}
        subtitle={t('bannerSubtitle')}
      />
      <section className="mil-Bg py-32">
        <div className="container mx-auto p-8">
          <div className="flex flex-col space-y-12">
            
            {/* Introduction */}
            <div className="flex flex-col space-y-6">
              <h1 className="text-5xl text-black font-bold">{t('mainTitle')}</h1>
              <p className="text-[18px] font-semibold text-gray-600">{t('mainDescription')}</p>
            </div>

            {/* Data Collection Section */}
            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl text-black font-bold">{t('collectionTitle')}</h2>
              <p className="text-[18px] font-semibold text-gray-600">{t('collectionDescription')}</p>
            </div>

            {/* Best Practices */}
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              <h2 className="text-2xl text-black font-bold">{t('bestPracticesTitle')}</h2>
              {Array.isArray(bestPractices) && bestPractices.map((item, index) => (
                <div key={index} className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-gray-600" />
                  <div>
                    <p className="text-[18px] font-semibold">{item.title}</p>
                    <p className="text-[18px] font-semibold text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              <h2 className="text-2xl text-black font-bold">{t('benefitsTitle')}</h2>
              {Array.isArray(benefits) && benefits.map((benefit, index) => (
                <div key={index} className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-gray-600" />
                  <p className="text-[18px] font-semibold text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default EducationDataProtection;
