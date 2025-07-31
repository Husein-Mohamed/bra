import React from "react";
import { Mail } from "lucide-react";

export default function CookiePolicyPage() {
  return (
    <main className="bg-[#f6fafd] min-h-screen pt-[110px] pb-16">
      {/* Banner/Title Section */}
      <section className="relative bg-gradient-to-r from-blue-100 via-white to-indigo-100 py-14 px-4 mb-10 shadow rounded-b-3xl">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#061829] mb-3 tracking-tight drop-shadow">
            Cookie Policy
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            How the Somali Data Protection Authority (DPA) uses cookies and similar technologies on dpa.gov.so
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
        {/* 1. What Are Cookies? */}
        <h2 className="text-xl font-bold text-[#061829] mb-2">1. What Are Cookies?</h2>
        <p className="mb-6 text-gray-800">
          Cookies are small data files that are placed on your device (computer, tablet, or smartphone) when you visit a website.
          They are widely used to make websites work, improve user experience, provide analytics, and support marketing.
        </p>

        {/* 2. Why We Use Cookies and Tracking Technologies */}
        <h2 className="text-xl font-bold text-[#061829] mb-2">2. Why We Use Cookies and Tracking Technologies</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-800">
          <li>Ensure core website functionality and security (essential cookies)</li>
          <li>Recognize your device and preferences</li>
          <li>Improve site performance and usability</li>
          <li>Analyze user behavior and traffic</li>
          <li>Support outreach and awareness efforts relevant to our regulatory work</li>
        </ul>
        <p className="mb-6 text-gray-800">
          Some information processed may be considered personal data (such as your IP address or browser type), subject to our Privacy Policy.
        </p>

        {/* 3. Types of Cookies We Use */}
        <h2 className="text-xl font-bold text-[#061829] mb-2">3. Types of Cookies We Use</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-800">
          <li><b>Essential Cookies</b> – Required for website functionality and cannot be disabled.</li>
          <li><b>Analytics Cookies</b> – Help us understand how users interact with our site to improve performance.</li>
          <li><b>Functional Cookies</b> – Enable enhanced features such as remembering your preferences.</li>
          <li><b>Third-party Cookies</b> – May be set by other websites for embedded content or external links.</li>
        </ul>

        {/* 4. Your Cookie Choices */}
        <h2 className="text-xl font-bold text-[#061829] mb-2">4. Your Cookie Choices</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-800">
          <li>Accept All Cookies – Allow all categories of cookies to enhance your experience.</li>
          <li>Accept Only Necessary Cookies – Use the site with only essential cookies enabled.</li>
          <li>Adjust Preferences – Customize your consent for each type of cookie.</li>
        </ul>
        <p className="mb-6 text-gray-800">
          You can update your cookie preferences at any time by clicking “Cookie Settings” at the bottom of our site.
        </p>

        {/* 5. User-Generated Content */}
        <h2 className="text-xl font-bold text-[#061829] mb-2">5. User-Generated Content (Comments)</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-800">
          <li>You have the right to publish such content and do not infringe on third-party rights.</li>
          <li>Your content does not contain defamatory, offensive, or unlawful material.</li>
          <li>You grant DPA a non-exclusive license to use, reproduce, and edit your content across platforms and media.</li>
        </ul>
        <p className="mb-6 text-gray-800">
          We reserve the right to monitor, moderate, and remove any content we deem inappropriate or in violation of our policies.
        </p>

        {/* 6. Hyperlinking to Our Website */}
        <h2 className="text-xl font-bold text-[#061829] mb-2">6. Hyperlinking to Our Website</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-800">
          <li>Government agencies, search engines, news organizations, and online directories linking to government resources may link to dpa.gov.so without prior written permission.</li>
          <li>Other organizations must request written approval before linking to our website.</li>
        </ul>

        {/* 7. Changes to This Policy */}
        <h2 className="text-xl font-bold text-[#061829] mb-2">7. Changes to This Policy</h2>
        <p className="mb-6 text-gray-800">
          We may update this Cookie Policy from time to time. Changes will be posted on this page with a revised “last updated” date. 
          Your continued use of the website constitutes your agreement to the updated policy.
        </p>

        {/* Contact */}
        <h2 className="text-xl font-bold text-[#061829] mb-2">Contact Us</h2>
        <div className="flex items-center gap-2 mb-2">
          <Mail className="w-5 h-5 text-[#061829]" />
          <a href="mailto:info@dpa.gov.so" className="underline text-blue-800">
            info@dpa.gov.so
          </a>
        </div>
        <a href="https://dpa.gov.so" className="text-blue-700 underline" target="_blank" rel="noopener">
          https://dpa.gov.so
        </a>
      </section>
    </main>
  );
}
