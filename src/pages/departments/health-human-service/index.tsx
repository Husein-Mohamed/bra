"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Baby,
  Ambulance,
  Apple,
  Brain,
  ShieldCheck,
  Syringe,
  Users,
  Globe,
  Stethoscope,
} from "lucide-react";

/* ---------------- BRAND ---------------- */
const BRA_BLUE = "#080C2C";

/* ---------------- ANIMATION ---------------- */
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.9 },
};

/* ---------------- SERVICE ITEM ---------------- */
function ServiceRow({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div {...fadeUp} className="flex items-start gap-6">
      <div
        style={{ background: BRA_BLUE }}
        className="w-12 h-12 flex items-center justify-center rounded-full shrink-0"
      >
        {icon}
      </div>

      <div>
        <h3 className="text-xl text-white font-bold mb-2">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-200 max-w-3xl">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* ---------------- MAIN PAGE ---------------- */
export default function HealthHumanServicePage() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#0A1A3f] to-[#dA0B0B] text-white py-20">

      {/* INITIAL OVERLAY KEEPING ORIGINAL BG */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ---------------- HERO ---------------- */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-28"
        >
          <h1 className="text-6xl font-extrabold text-blue-300 mb-6">
            Health & Human Services Department
          </h1>

          <p className="text-lg text-gray-200 max-w-5xl mx-auto leading-relaxed">
            The Health & Human Services Department of the Banadir Regional Administration
            is responsible for safeguarding the physical, mental, and social well-being
            of Mogadishu’s citizens. Through regional healthcare management, humanitarian
            assistance coordination, food security response, and community development
            initiatives, the department ensures accessible, compassionate, and
            effective health services for all residents — especially vulnerable families,
            women, children, and displaced populations.
          </p>
        </motion.section>

        {/* ---------------- DIRECTOR (OUTLINE STYLE) ---------------- */}
        <motion.section
          {...fadeUp}
          className="
            grid md:grid-cols-3 gap-12 items-center mb-28
            outline outline-2 outline-blue-300/40
            outline-offset-12 rounded-2xl p-12
          "
        >
          {/* Director image */}
          <div className="flex justify-center">
            <img
              src="/images/PNG/abdi.jpg"
              alt="Department Director"
              className="
                w-60 h-60 object-cover rounded-[2rem]
                border-4 border-blue-300 shadow-xl
              "
            />
          </div>

          {/* Director Message */}
          <div className="md:col-span-2">
            <span className="text-blue-300 uppercase tracking-[0.3em] text-xs">
              Director’s Statement
            </span>

            <h2 className="text-3xl font-bold mb-4">
              Serving health with dignity and accountability
            </h2>

            <p className="text-gray-200 leading-relaxed mb-4">
              “Our department exists to guarantee that every citizen has access to quality
              health services regardless of income, location, or social status. Through
              strong partnerships with hospitals, NGOs, development agencies, and community
              organizations, we coordinate life-saving programs in maternal care,
              disease control, nutrition, and emergency clinical response.”
            </p>

            <p className="text-gray-200 leading-relaxed mb-4">
              “We prioritize preventative healthcare, transparent resource management, and
              frontline service excellence. Our teams continuously strengthen medical
              capacity through training, data monitoring, and regulatory compliance to ensure
              reliable clinical standards across the region.”
            </p>

            <p className="font-semibold text-blue-300">
             Dr.  Abdirahman Ahmed Mohamud
            </p>
            <small className="text-blue-300/70">
              Director — Health & Human Services, Banadir Regional Administration
            </small>
          </div>
        </motion.section>

        {/* ---------------- DEPARTMENT ROLE ---------------- */}
        <motion.section {...fadeUp} className="mb-20">
          <h2 className="text-3xl text-blue-300 font-bold mb-6">
            Our Department Role
          </h2>

          <p className="text-gray-200 max-w-5xl leading-relaxed">
            The Health & Human Services Department provides leadership in
            health policy formation, facility regulation, public health outreach,
            humanitarian emergency coordination, and clinical service evaluation.
            We guide medical infrastructure investments, maintain citywide disease
            surveillance systems, oversee vaccination programs, and collaborate
            internationally to elevate care standards and public trust.
          </p>
        </motion.section>

        {/* ---------------- CORE SERVICES ---------------- */}
        <section className="space-y-10 mb-28">

          <ServiceRow
            icon={<HeartPulse />}
            title="Primary Healthcare Coordination"
            description="
              Supervising public hospitals and district clinics to ensure continuity of
              patient care, staffing adequacy, medical equipment supply, and facility
              compliance with national healthcare standards across Mogadishu neighborhoods.
            "
          />

          <ServiceRow
            icon={<Baby />}
            title="Maternal & Child Health Programs"
            description="
              Implementing prenatal screening, birth assistance coordination,
              nutritional supplementation programs for mothers and infants, newborn
              vaccination drives, and community maternal education workshops.
            "
          />

          <ServiceRow
            icon={<Apple />}
            title="Nutrition & Food Security"
            description="
              Operating supplementary feeding centers for malnourished children,
              rapid food distribution during humanitarian crises,
              nutritional counseling services, and food access stabilization programs.
            "
          />

          <ServiceRow
            icon={<Brain />}
            title="Mental Health & Psychosocial Care"
            description="
              Delivering psychological counseling programs, trauma rehabilitation,
              community support groups, and mental health awareness campaigns.
            "
          />

          <ServiceRow
            icon={<Ambulance />}
            title="Emergency Medical Response"
            description="
              Managing emergency ambulance services, disaster casualty response systems,
              first-responder training initiatives, and medical evacuation protocols
              during floods, disease outbreaks, and security incidents.
            "
          />

          <ServiceRow
            icon={<Syringe />}
            title="Communicable Disease Control"
            description="
              Coordinating vaccination drives, epidemic surveillance networks,
              laboratory testing expansion, infection reporting systems,
              and community immunization campaigns across all districts.
            "
          />

        </section>

        {/* ---------------- COMMUNITY ENGAGEMENT ---------------- */}
        <motion.section {...fadeUp} className="mb-24">
          <h2 className="text-3xl font-bold text-blue-300 mb-6">
            Community Outreach & Partnerships
          </h2>

          <p className="text-gray-200 leading-relaxed max-w-5xl">
            Through mobile clinics, local clinics partnership, school-based health education
            sessions, and nutrition assistance outreach, the department ensures that
            vulnerable populations receive timely support. Collaborations with UN agencies,
            NGOs, and donor institutions help expand coverage capacity and improve long-term
            healthcare sustainability.
          </p>
        </motion.section>

        {/* ---------------- PRINCIPLES ---------------- */}
        <motion.section {...fadeUp} className="mb-20">
          <h2 className="text-3xl font-bold text-blue-300 mb-6">
            Guiding Public Health Principles
          </h2>

          <ul className="space-y-4 text-gray-200 ml-4">
            <li className="flex gap-3">
              <ShieldCheck className="text-blue-300" />
              Ethical leadership, patient safety, and institutional transparency.
            </li>

            <li className="flex gap-3">
              <Users className="text-blue-300" />
              Inclusive access without geographic or socioeconomic discrimination.
            </li>

            <li className="flex gap-3">
              <Globe className="text-blue-300" />
              International cooperation for healthcare system modernization.
            </li>

            <li className="flex gap-3">
              <Stethoscope className="text-blue-300" />
              Continuous capacity development and evidence-based clinical improvements.
            </li>
          </ul>
        </motion.section>

      </div>
    </div>
  );
}
