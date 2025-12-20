"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Mic,
  Tv,
  Users,
  Newspaper,
  Share2,
  Radio,
  Globe,
  Quote,
  LayoutTemplate,
  Layers,
  Shield,
  CheckCircle
} from "lucide-react";

const BRA_BLUE = "#080C2C";

/* ----------------- ICON CIRCLE ----------------- */
const IconCircle = ({ children }: { children: React.ReactNode }) => (
  <div
    className="w-14 h-14 flex items-center justify-center rounded-full shadow-lg"
    style={{ background: BRA_BLUE }}
  >
    {children}
  </div>
);

/* ----------------- CARDS ----------------- */
const FeatureCard = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.04 }}
    className="bg-white/5 border border-white/15 backdrop-blur-xl rounded-3xl p-8 shadow-xl"
  >
    <IconCircle>{icon}</IconCircle>
    <h3 className="text-xl font-semibold mt-5 mb-2">{title}</h3>
    <p className="text-sm text-gray-300 leading-relaxed">{text}</p>
  </motion.div>
);

/* ----------------- STAT ----------------- */
const Stat = ({ num, label }: { num: string; label: string }) => (
  <div className="bg-white/10 border border-white/15 backdrop-blur-xl p-6 rounded-2xl text-center shadow-lg">
    <h4 className="text-3xl font-extrabold text-blue-300 mb-1">{num}</h4>
    <p className="text-gray-300 text-xs">{label}</p>
  </div>
);

/* ----------------- FLOW STEP ----------------- */
const ProcessStep = ({
  number,
  text,
}: {
  number: number;
  text: string;
}) => (
  <div className="flex items-start gap-5">
    <div
      className="w-10 h-10 text-white font-bold flex items-center justify-center rounded-full"
      style={{ background: BRA_BLUE }}
    >
      {number}
    </div>
    <p className="text-gray-300 text-sm leading-relaxed max-w-xl">{text}</p>
  </div>
);

export default function MediaCommunicationPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0A1A3f] to-[#dA0B0B] text-white py-24">
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ---------------- HERO ---------------- */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-28"
        >
          <h1 className="text-6xl font-bold text-blue-300 mb-6">
            Media & Communication Department
          </h1>
          <p className="max-w-4xl mx-auto text-lg text-gray-200 leading-relaxed">
            Driving transparency, civic trust, and community engagement through
            powerful storytelling, multimedia communication, and public
            information services for the Banadir Regional Administration.
          </p>
        </motion.section>

        {/* ---------------- DIRECTOR MESSAGE ---------------- */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-white/10 backdrop-blur-xl border border-white/15 
          rounded-[3rem] p-12 mb-28 relative"
        >
          <Quote className="absolute top-6 left-6 text-blue-300/40 w-14 h-14" />

          <div className="grid md:grid-cols-3 gap-12 items-center">
            <img
              src="/images/PNG/HB.jpg"
              className="w-60 h-60 rounded-3xl border-4 border-blue-300 shadow-2xl mx-auto"
            />

            <div className="md:col-span-2">
              <h2 className="text-3xl text-blue-300 font-bold mb-4">
                Director’s Message
              </h2>
              <p className="text-gray-200 leading-relaxed mb-4">
                “Communication builds the foundation of public confidence.
                Our department works tirelessly to craft messaging that
                empowers communities, supports informed decision-making,
                and amplifies the remarkable development taking place across
                Banadir.”
              </p>
              <p className="font-semibold text-blue-300">
                Hussein Abdulle Mohamed 
              </p>
              <small className="text-blue-300/70">
                Director, Media & Communications — BRA
              </small>
            </div>
          </div>
        </motion.section>

        {/* ---------------- STRATEGIC PILLARS ---------------- */}
        <section className="grid md:grid-cols-3 gap-8 mb-28">
          <FeatureCard
            icon={<Camera />}
            title="Creative Media Production"
            text="Professional photography, drone footage, broadcast videos,
            and documentation of development programs and public initiatives."
          />

          <FeatureCard
            icon={<Mic />}
            title="Press & Public Relations"
            text="Accrediting journalists, organizing press briefings,
            managing statements, and maintaining reliable media partnerships."
          />

          <FeatureCard
            icon={<Share2 />}
            title="Digital Civic Engagement"
            text="Website content, social media campaigns, digital alerts,
            livestream coverage, and citizen interaction platforms."
          />
        </section>

        {/* ---------------- MEDIA WORKFLOW ---------------- */}
        <section className="bg-white/5 backdrop-blur-xl border border-white/15 rounded-3xl p-10 mb-28">
          <h2 className="text-3xl text-blue-300 font-bold mb-10">
            Media Workflow Process
          </h2>

          <div className="space-y-6">
            <ProcessStep
              number={1}
              text="Planning stakeholder narratives, identifying key public information priorities."
            />
            <ProcessStep
              number={2}
              text="Field coverage including photography, filming, interviews, and live documentation."
            />
            <ProcessStep
              number={3}
              text="Professional editing, content production, graphic design, and translation."
            />
            <ProcessStep
              number={4}
              text="Publishing via broadcast media, radio, social platforms, web portals, and press channels."
            />
            <ProcessStep
              number={5}
              text="Public feedback analysis and performance evaluation for improvement."
            />
          </div>
        </section>

        {/* ---------------- CAPABILITIES ---------------- */}
        <section className="grid md:grid-cols-4 gap-8 mb-28">
          <FeatureCard
            icon={<Tv />}
            title="Television & Broadcasting"
            text="Official conferences, documentaries, and civic awareness programs."
          />

          <FeatureCard
            icon={<Radio />}
            title="Radio Broadcasting"
            text="Information dissemination across local radio networks."
          />

          <FeatureCard
            icon={<Newspaper />}
            title="Print Publications"
            text="Magazines, brochures, newsletters, and public information posters."
          />

          <FeatureCard
            icon={<Globe />}
            title="International Outreach"
            text="Diplomatic communications and multilingual content coordination."
          />
        </section>

        {/* ---------------- STATS ---------------- */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-28">
          <Stat num="850+" label="Annual Productions" />
          <Stat num="7M+" label="Digital Reach" />
          <Stat num="2,500+" label="Public Campaigns" />
          <Stat num="18+" label="Media Partnerships" />
        </section>

        {/* ---------------- VALUES ---------------- */}
        <section className="bg-white/5 border border-white/15 backdrop-blur-xl 
        rounded-3xl p-12 mb-28">
          <h2 className="text-3xl text-blue-300 mb-8 font-bold">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            <FeatureCard
              icon={<Shield />}
              title="Integrity"
              text="Delivering objective, factual, and responsible journalism."
            />
            <FeatureCard
              icon={<CheckCircle />}
              title="Accountability"
              text="Ensuring public service communications remain transparent."
            />
            <FeatureCard
              icon={<Layers />}
              title="Innovation"
              text="Employing cutting-edge tools and creative storytelling."
            />
            <FeatureCard
              icon={<LayoutTemplate />}
              title="Professionalism"
              text="Adhering to the highest standards of ethical media."
            />
          </div>
        </section>

      </div>
    </div>
  );
}
