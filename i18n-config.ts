// src/i18n-config.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import JSON bundles using alias "@/locales/..."
// Make sure each path matches the actual file under src/locales/...
import enKnowYourRights from "@/locales/en/knowYourRights.json";
import soKnowYourRights from "@/locales/so/knowYourRights.json";
import enPartners from "@/locales/en/partners.json";
import soPartners from "@/locales/so/partners.json";
import enYourRights from "@/locales/en/yourRights.json";
import soYourRights from "@/locales/so/yourRights.json";
import enCookie from "@/locales/en/cookiePolicy.json";
import soCookie from "@/locales/so/cookiePolicy.json";
import enAdvise from "@/locales/en/advise.json";
import soAdvise from "@/locales/so/advise.json";

import enHeader from "@/locales/en/header.json";
import soHeader from "@/locales/so/header.json";

import enFaq from "@/locales/en/faq.json";
import soFaq from "@/locales/so/faq.json";

import enAbout from "@/locales/en/about.json";
import soAbout from "@/locales/so/about.json";

import enDataController from "@/locales/en/dataController.json";
import soDataController from "@/locales/so/dataController.json";

import enForOrgan from "@/locales/en/forOrgan.json";
import soForOrgan from "@/locales/so/forOrgan.json";

import enPrinciples from "@/locales/en/principles.json";
import soPrinciples from "@/locales/so/principles.json";

import enTrendingNews from "@/locales/en/trendingNews.json";
import soTrendingNews from "@/locales/so/trendingNews.json";

import enDocs from "@/locales/en/docs.json";
import soDocs from "@/locales/so/docs.json";

import enDock from "@/locales/en/dock.json";
import soDock from "@/locales/so/dock.json";

import enRoles from "@/locales/en/roles.json";
import soRoles from "@/locales/so/roles.json";

import enAboutTheInsti from "@/locales/en/aboutTheInsti.json";
import soAboutTheInsti from "@/locales/so/aboutTheInsti.json";

import enAccessPortability from "@/locales/en/accessPortability.json";
import soAccessPortability from "@/locales/so/accessPortability.json";

import enAccountability from "@/locales/en/accountabilityObligation.json";
import soAccountability from "@/locales/so/accountabilityObligation.json";

import enBankingCompliance from "@/locales/en/bankingCompliance.json";
import soBankingCompliance from "@/locales/so/bankingCompliance.json";

import enCrossBorder from "@/locales/en/crossBorder.json";
import soCrossBorder from "@/locales/so/crossBorder.json";

import enCOC from "@/locales/en/cocRegistration.json";
import soCOC from "@/locales/so/cocRegistration.json";

import enYourData from "@/locales/en/yourData.json";
import soYourData from "@/locales/so/yourData.json";
import enPrivacyPolicy from "@/locales/en/privacyPolicy.json";
import soPrivacyPolicy from "@/locales/so/privacyPolicy.json";

import enDataBreach from "@/locales/en/dataBreach.json";
import soDataBreach from "@/locales/so/dataBreach.json";

import enDataTransfer from "@/locales/en/dataTransfer.json";
import soDataTransfer from "@/locales/so/dataTransfer.json";

import enDirectMarketing from "@/locales/en/directMarketing.json";
import soDirectMarketing from "@/locales/so/directMarketing.json";

import enDataProtectionBasics from "@/locales/en/dataProtectionBasics.json";
import soDataProtectionBasics from "@/locales/so/dataProtectionBasics.json";

import enDpiaPrivacy from "@/locales/en/dpiaPrivacy.json";
import soDpiaPrivacy from "@/locales/so/dpiaPrivacy.json";

import enDpo from "@/locales/en/dpo.json";
import soDpo from "@/locales/so/dpo.json";

import enDataRights from "@/locales/en/dataRights.json";
import soDataRights from "@/locales/so/dataRights.json";

import enEGovernance from "@/locales/en/eGovernance.json";
import soEGovernance from "@/locales/so/eGovernance.json";
// NEW ─────────────────────────────────────────────────────────
import enTerms from "@/locales/en/terms.json";
import soTerms from "@/locales/so/terms.json";

import enDataCollectionHealth from "@/locales/en/dataCollectionHealth.json";
import soDataCollectionHealth from "@/locales/so/dataCollectionHealth.json";

import enLawfulProcessing from "@/locales/en/lawfulProcessing.json";
import soLawfulProcessing from "@/locales/so/lawfulProcessing.json";

import enTelecomDataProtection from "@/locales/en/telecomDataProtection.json";
import soTelecomDataProtection from "@/locales/so/telecomDataProtection.json";
import enMilestones  from "@/locales/en/milestones.json";
import soMilestones  from "@/locales/so/milestones.json";
import enEducationDataProtection from "@/locales/en/educationDataProtection.json";
import soEducationDataProtection from "@/locales/so/educationDataProtection.json";

import enWhoWeAre from "@/locales/en/whoWeAre.json";
import soWhoWeAre from "@/locales/so/whoWeAre.json";

import enAboutPage from "@/locales/en/aboutUsPage.json";
import soAboutPage from "@/locales/so/aboutUsPage.json";

import enFeatures from "@/locales/en/features.json";
import soFeatures from "@/locales/so/features.json";

import enServices from "@/locales/en/services.json";
import soServices from "@/locales/so/services.json";

import enAboutAi from "@/locales/en/aboutAi.json";
import soAboutAi from "@/locales/so/aboutAi.json";

import enLatestNews from "@/locales/en/latestNews.json";
import soLatestNews from "@/locales/so/latestNews.json";
import enWhy from "@/locales/en/whyDataProtection.json";
import soWhy from "@/locales/so/whyDataProtection.json";
import enComplianceChecklist from "@/locales/en/complianceChecklist.json";
import soComplianceChecklist from "@/locales/so/complianceChecklist.json";

import enFooter from "@/locales/en/footer.json";
import soFooter from "@/locales/so/footer.json";

import enContact from "@/locales/en/contact.json";
import soContact from "@/locales/so/contact.json";

import enCitizenRights from "@/locales/en/citizenRights.json";
import soCitizenRights from "@/locales/so/citizenRights.json";

import enLawsPolicies from "@/locales/en/lawsPolicies.json";
import soLawsPolicies from "@/locales/so/lawsPolicies.json";

import enResources from "@/locales/en/resources.json";
import soResources from "@/locales/so/resources.json";



// Initialize i18next with language detector & React plugin
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ["cookie", "navigator"],
      caches: ["cookie"],
      cookieMinutes: 60 * 24 * 365,
      // if SSR, guard window:
      cookieDomain: typeof window !== "undefined" ? window.location.hostname : undefined,
    },
    ns: [
      "translation",
      "forOrgan",
      "lawfulProcessing",
      "dataProcessor",
      "complianceChecklist",
      "header",
      "contact",
      // add all other namespaces you imported:
      "knowYourRights",
      "yourRights",
      "citizenRights",
      "lawsPolicies",
      "resources",
      "advise",
      "faq",
      "about",
      "dataController",
      "privacyPolicy",
      "trendingNews",
      "docs",
      "dock",
      "roles",
      "aboutTheInsti",
      "accessPortability",
      "accountabilityObligation",
      "bankingCompliance",
      "crossBorder",
      "cocRegistration",
      "yourData",
       "milestones",
       "whyDataProtection",
      "cookiePolicy",
      "dataBreach",
      "dataTransfer",
      "directMarketing",
      "dataProtectionBasics",
      "dpiaPrivacy",
      "dpo",
      "dataRights",
      "eGovernance",
      "dataCollectionHealth",
      "telecomDataProtection",
      "educationDataProtection",
      "whoWeAre",
      "aboutPage",
      "features",
      "services",
      "aboutAi",
      "latestNews",
        "terms"  ,
      "footer",
      "partners"
    ],
    defaultNS: "translation",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

// Add resource bundles. The last two booleans are (deep, overwrite).
i18n.addResourceBundle("en", "knowYourRights", enKnowYourRights, true, true);
i18n.addResourceBundle("so", "knowYourRights", soKnowYourRights, true, true);

i18n.addResourceBundle("en", "yourRights", enYourRights, true, true);
i18n.addResourceBundle("so", "yourRights", soYourRights, true, true);

i18n.addResourceBundle("en", "advise", enAdvise, true, true);
i18n.addResourceBundle("so", "advise", soAdvise, true, true);
// 🔹 NEW: add Partners resource bundles
i18n.addResourceBundle("en", "partners", enPartners, true, true);
i18n.addResourceBundle("so", "partners", soPartners, true, true);
i18n.addResourceBundle("en", "header", enHeader, true, true);
i18n.addResourceBundle("so", "header", soHeader, true, true);
i18n.addResourceBundle("en", "privacyPolicy", enPrivacyPolicy, true, true);
i18n.addResourceBundle("so", "privacyPolicy", soPrivacyPolicy, true, true);

i18n.addResourceBundle("en", "faq", enFaq, true, true);
i18n.addResourceBundle("so", "faq", soFaq, true, true);

i18n.addResourceBundle("en", "about", enAbout, true, true);
i18n.addResourceBundle("so", "about", soAbout, true, true);

i18n.addResourceBundle("en", "dataController", enDataController, true, true);
i18n.addResourceBundle("so", "dataController", soDataController, true, true);

i18n.addResourceBundle("en", "forOrgan", enForOrgan, true, true);
i18n.addResourceBundle("so", "forOrgan", soForOrgan, true, true);

i18n.addResourceBundle("en", "principles", enPrinciples, true, true);
i18n.addResourceBundle("so", "principles", soPrinciples, true, true);

i18n.addResourceBundle("en", "trendingNews", enTrendingNews, true, true);
i18n.addResourceBundle("so", "trendingNews", soTrendingNews, true, true);

i18n.addResourceBundle("en", "docs", enDocs, true, true);
i18n.addResourceBundle("so", "docs", soDocs, true, true);

i18n.addResourceBundle("en", "dock", enDock, true, true);
i18n.addResourceBundle("so", "dock", soDock, true, true);

i18n.addResourceBundle("en", "roles", enRoles, true, true);
i18n.addResourceBundle("so", "roles", soRoles, true, true);

i18n.addResourceBundle("en", "aboutTheInsti", enAboutTheInsti, true, true);
i18n.addResourceBundle("so", "aboutTheInsti", soAboutTheInsti, true, true);

i18n.addResourceBundle("en", "accessPortability", enAccessPortability, true, true);
i18n.addResourceBundle("so", "accessPortability", soAccessPortability, true, true);

i18n.addResourceBundle("en", "accountabilityObligation", enAccountability, true, true);
i18n.addResourceBundle("so", "accountabilityObligation", soAccountability, true, true);
i18n.addResourceBundle("en", "whyDataProtection", enWhy, true, true);
i18n.addResourceBundle("so", "whyDataProtection", soWhy, true, true);


i18n.addResourceBundle("en", "bankingCompliance", enBankingCompliance, true, true);
i18n.addResourceBundle("so", "bankingCompliance", soBankingCompliance, true, true);

i18n.addResourceBundle("en", "crossBorder", enCrossBorder, true, true);
i18n.addResourceBundle("so", "crossBorder", soCrossBorder, true, true);

i18n.addResourceBundle("en", "cocRegistration", enCOC, true, true);
i18n.addResourceBundle("so", "cocRegistration", soCOC, true, true);

i18n.addResourceBundle("en", "yourData", enYourData, true, true);
i18n.addResourceBundle("so", "yourData", soYourData, true, true);

i18n.addResourceBundle("en", "dataBreach", enDataBreach, true, true);
i18n.addResourceBundle("so", "dataBreach", soDataBreach, true, true);

i18n.addResourceBundle("en", "dataTransfer", enDataTransfer, true, true);
i18n.addResourceBundle("so", "dataTransfer", soDataTransfer, true, true);
i18n.addResourceBundle("en", "cookiePolicy", enCookie, true, true);
i18n.addResourceBundle("so", "cookiePolicy", soCookie, true, true);
i18n.addResourceBundle("en", "directMarketing", enDirectMarketing, true, true);
i18n.addResourceBundle("so", "directMarketing", soDirectMarketing, true, true);

i18n.addResourceBundle("en", "dataProtectionBasics", enDataProtectionBasics, true, true);
i18n.addResourceBundle("so", "dataProtectionBasics", soDataProtectionBasics, true, true);
/* …existing addResourceBundle lines … */

// NEW ─────────────────────────────────────────────────────────
i18n.addResourceBundle("en", "terms", enTerms, true, true);
i18n.addResourceBundle("so", "terms", soTerms, true, true);

i18n.addResourceBundle("en", "dpiaPrivacy", enDpiaPrivacy, true, true);
i18n.addResourceBundle("so", "dpiaPrivacy", soDpiaPrivacy, true, true);

i18n.addResourceBundle("en", "dpo", enDpo, true, true);
i18n.addResourceBundle("so", "dpo", soDpo, true, true);

i18n.addResourceBundle("en", "dataRights", enDataRights, true, true);
i18n.addResourceBundle("so", "dataRights", soDataRights, true, true);

i18n.addResourceBundle("en", "eGovernance", enEGovernance, true, true);
i18n.addResourceBundle("so", "eGovernance", soEGovernance, true, true);

i18n.addResourceBundle("en", "dataCollectionHealth", enDataCollectionHealth, true, true);
i18n.addResourceBundle("so", "dataCollectionHealth", soDataCollectionHealth, true, true);

i18n.addResourceBundle("en", "lawfulProcessing", enLawfulProcessing, true, true);
i18n.addResourceBundle("so", "lawfulProcessing", soLawfulProcessing, true, true);

i18n.addResourceBundle("en", "telecomDataProtection", enTelecomDataProtection, true, true);
i18n.addResourceBundle("so", "telecomDataProtection", soTelecomDataProtection, true, true);

i18n.addResourceBundle("en", "educationDataProtection", enEducationDataProtection, true, true);
i18n.addResourceBundle("so", "educationDataProtection", soEducationDataProtection, true, true);

i18n.addResourceBundle("en", "whoWeAre", enWhoWeAre, true, true);
i18n.addResourceBundle("so", "whoWeAre", soWhoWeAre, true, true);

i18n.addResourceBundle("en", "aboutPage", enAboutPage, true, true);
i18n.addResourceBundle("so", "aboutPage", soAboutPage, true, true);

i18n.addResourceBundle("en", "features", enFeatures, true, true);
i18n.addResourceBundle("so", "features", soFeatures, true, true);
i18n.addResourceBundle("en", "milestones", enMilestones, true, true);
i18n.addResourceBundle("so", "milestones", soMilestones, true, true); 
i18n.addResourceBundle("en", "services", enServices, true, true);
i18n.addResourceBundle("so", "services", soServices, true, true);

i18n.addResourceBundle("en", "aboutAi", enAboutAi, true, true);
i18n.addResourceBundle("so", "aboutAi", soAboutAi, true, true);

i18n.addResourceBundle("en", "latestNews", enLatestNews, true, true);
i18n.addResourceBundle("so", "latestNews", soLatestNews, true, true);

i18n.addResourceBundle("en", "complianceChecklist", enComplianceChecklist, true, true);
i18n.addResourceBundle("so", "complianceChecklist", soComplianceChecklist, true, true);

i18n.addResourceBundle("en", "footer", enFooter, true, true);
i18n.addResourceBundle("so", "footer", soFooter, true, true);

i18n.addResourceBundle("en", "contact", enContact, true, true);
i18n.addResourceBundle("so", "contact", soContact, true, true);

i18n.addResourceBundle("en", "citizenRights", enCitizenRights, true, true);
i18n.addResourceBundle("so", "citizenRights", soCitizenRights, true, true);

i18n.addResourceBundle("en", "lawsPolicies", enLawsPolicies, true, true);
i18n.addResourceBundle("so", "lawsPolicies", soLawsPolicies, true, true);

i18n.addResourceBundle("en", "resources", enResources, true, true);
i18n.addResourceBundle("so", "resources", soResources, true, true);

export default i18n;
