// pages/privacy-policy/index.tsx
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#f7f7f8] min-h-screen pt-[110px] pb-20">
      <section className="max-w-3xl mx-auto px-4">
        {/* Page Title */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#061829]">Privacy Policy</h1>
          <div className="text-md text-gray-500">Effective Date: March 20, 2023</div>
        </div>

        {/* Policy Content */}
        <article className="bg-white rounded-xl shadow p-6 md:p-10 border border-gray-200 text-gray-800 leading-relaxed text-base space-y-6">
          <p>
            At <span className="font-semibold">dpa.gov.so</span>, accessible at <a href="https://dpa.gov.so" className="text-blue-700 underline">https://dpa.gov.so</a>, the privacy and protection of your personal data are among our top priorities. This Privacy Policy outlines the types of information we collect, how we use it, and your rights regarding your personal data.
          </p>
          <p>
            If you have any questions or require more information about this Privacy Policy, please contact us at: <br />
            <a href="mailto:info@dpa.gov.so" className="text-blue-700 underline">info@dpa.gov.so</a>
          </p>

          <ol className="space-y-6">
            <li>
              <h2 className="text-xl font-semibold mt-6 mb-2">1. Consent</h2>
              <p>
                By using our website, you consent to our Privacy Policy and agree to its terms.
              </p>
            </li>
            <li>
              <h2 className="text-xl font-semibold mt-6 mb-2">2. Information We Collect</h2>
              <ul className="list-disc pl-5">
                <li>
                  <b>Information you provide voluntarily:</b> such as your name, email address, phone number, and any content submitted via contact forms or account registration.
                </li>
                <li>
                  <b>Information collected automatically:</b> such as your IP address, browser type, device information, location, and usage data through cookies or similar technologies.
                </li>
              </ul>
              <p>
                We will always make it clear when personal information is required and why it is being collected.
              </p>
            </li>
            <li>
              <h2 className="text-xl font-semibold mt-6 mb-2">3. How We Use Your Information</h2>
              <ul className="list-disc pl-5">
                <li>To operate, maintain, and improve our website</li>
                <li>To analyze how users interact with our content and features</li>
                <li>To personalize your experience and tailor our communications</li>
                <li>To develop new services, tools, or functionality</li>
                <li>To respond to inquiries and provide support</li>
                <li>To send important updates, newsletters, and administrative information (if you opt in)</li>
              </ul>
            </li>
            <li>
              <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies and Tracking Technologies</h2>
              <p>
                Our website uses cookies to enhance user experience and collect analytics data. These cookies help:
              </p>
              <ul className="list-disc pl-5">
                <li>Remember your preferences</li>
                <li>Understand how the website is used</li>
                <li>Provide you with relevant content</li>
              </ul>
              <p>
                You can choose to accept only essential cookies or adjust your preferences through our cookie settings. For full details, see our Cookie Policy.
              </p>
            </li>
            <li>
              <h2 className="text-xl font-semibold mt-6 mb-2">5. Links to Other Sites/Apps</h2>
              <p>
                Our website may contain links to third-party websites or applications. The Data Protection Authority of Somalia is not responsible for the privacy practices or content of those external sites. We encourage you to review their privacy policies before providing any personal data.
              </p>
            </li>
            <li>
              <h2 className="text-xl font-semibold mt-6 mb-2">6. Security Precautions</h2>
              <p>
                We implement strong technical and organizational measures to protect your data from unauthorized access, misuse, or disclosure. These include:
              </p>
              <ul className="list-disc pl-5">
                <li>Use of secure servers and encrypted connections</li>
                <li>Access controls and data minimization practices</li>
                <li>Regular monitoring and updates to our security infrastructure</li>
              </ul>
              <p>
                However, while we strive to protect your information, no method of transmission over the internet is 100% secure.
              </p>
            </li>
            <li>
              <h2 className="text-xl font-semibold mt-6 mb-2">7. Choice and Opt-Out</h2>
              <p>
                You have the right to opt out of receiving non-essential communications such as newsletters or marketing content. You may do so by:
              </p>
              <ul className="list-disc pl-5">
                <li>Clicking the “unsubscribe” link in our emails</li>
                <li>Managing your preferences through your account (if applicable)</li>
                <li>Contacting us directly at <a href="mailto:info@dpa.gov.so" className="text-blue-700 underline">info@dpa.gov.so</a></li>
              </ul>
            </li>
            <li>
              <h2 className="text-xl font-semibold mt-6 mb-2">8. User Comments and Public Input</h2>
              <p>
                In areas where users can post comments or feedback:
              </p>
              <ul className="list-disc pl-5">
                <li>You are responsible for the content you post.</li>
                <li>Comments should not contain unlawful, offensive, or copyrighted material without permission.</li>
                <li>DPA reserves the right to review and remove content that violates our terms.</li>
              </ul>
              <p>
                By submitting comments, you grant DPA a non-exclusive license to use, reproduce, and distribute your content in any format.
              </p>
            </li>
            <li>
              <h2 className="text-xl font-semibold mt-6 mb-2">9. Children’s Privacy</h2>
              <p>
                Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children without parental consent. If we become aware that such data has been collected, we will take steps to delete it promptly.
              </p>
            </li>
            <li>
              <h2 className="text-xl font-semibold mt-6 mb-2">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. All changes will be posted on this page with the revised date. Continued use of our website indicates acceptance of those changes.
              </p>
            </li>
            <li>
              <h2 className="text-xl font-semibold mt-6 mb-2">11. Contact Us</h2>
              <p>
                For any privacy-related inquiries or to exercise your data rights, please contact us at:
                <br />
                Data Protection Authority of Somalia (DPA) <br />
                📧 <a href="mailto:info@dpa.gov.so" className="text-blue-700 underline">info@dpa.gov.so</a>
                <br />
                🌐 <a href="https://dpa.gov.so" className="text-blue-700 underline">https://dpa.gov.so</a>
              </p>
            </li>
          </ol>
        </article>
      </section>
    </main>
  );
}
