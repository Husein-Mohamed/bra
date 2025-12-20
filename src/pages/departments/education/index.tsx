"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  School,
  BookOpen,
  Laptop,
  Users,
  Globe,
  Target,
} from "lucide-react";

/* BRAND */
const BLUE = "#080C2C";

const fade = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.9 },
};

/* STORY STRIPE BLOCK */
function StoryBlock({
  icon,
  title,
  text,
  right,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  right?: boolean;
}) {
  return (
    <motion.div
      {...fade}
      className={`relative grid md:grid-cols-[90px_1fr] gap-8 max-w-5xl mx-auto ${
        right ? "md:ms-auto" : ""
      }`}
    >
      {/* Vertical connector */}
      <div className="hidden md:block absolute left-[44px] top-0 bottom-0 w-[2px] bg-blue-300/30" />

      {/* Icon disc */}
      <div
        style={{ background: BLUE }}
        className="w-[90px] h-[90px] rounded-full flex items-center justify-center z-20 shrink-0"
      >
        {icon}
      </div>

      {/* Content */}
      <div className="pt-4">
        <h3 className="text-2xl font-bold text-blue-300 mb-4">{title}</h3>

        <p className="text-gray-200 leading-8 text-lg max-w-3xl">
          {text}
        </p>
      </div>
    </motion.div>
  );
}

/* PAGE */
export default function EducationDepartmentPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0A1A3f] to-[#dA0B0B] py-20 text-white">

      {/* Preserve Original Background Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-[1400px] mx-auto px-8 space-y-24">

        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <span className="tracking-[0.3em] uppercase text-blue-300 text-sm">
            Banadir Regional Administration
          </span>

          <h1 className="text-6xl font-extrabold mt-4 mb-6">
            Education Department
          </h1>

          <p className="text-xl text-gray-200 leading-9">
            The Education Department leads the transformation of learning
            across Mogadishu. Our programs strengthen teaching standards,
            expand safe classrooms, modernize digital learning, and support
            education equity for girls, at-risk youth, and underserved
            communities.
          </p>
        </motion.section>

        {/* MISSION */}
        <motion.section {...fade} className="max-w-4xl">
          <h2 className="text-3xl font-bold text-blue-300 mb-4">
            Our Mission
          </h2>

          <p className="text-gray-200 leading-8">
            We ensure every child receives a quality, inclusive, and
            future-ready education. By investing in teachers, infrastructure,
            and curriculum modernization, the department lays a foundation
            for long-term social stability and civic leadership.
          </p>
        </motion.section>

        {/* DIRECTOR — OUTLINED FEATURE BLOCK */}
        <motion.section
          {...fade}
          className="max-w-5xl mx-auto p-10 rounded-[2rem]
                     border border-blue-300/40
                     shadow-[0_0_0_2px_rgba(71,189,255,0.06)]
                     backdrop-blur-[2px]"
        >
          <div className="grid md:grid-cols-[260px_1fr] gap-12 items-center">

            {/* Director Photo */}
            <img
              src="/images/PNG/mayor2.png"
              alt="Director"
              className="w-60 h-60 object-cover rounded-[1.5rem] border-4 border-blue-300"
            />

            {/* Statement */}
            <div>
              <span className="tracking-widest text-xs text-blue-300 uppercase">
                Director’s Statement
              </span>

              <h3 className="text-3xl font-bold mt-4 mb-4">
                Education is the engine of opportunity
              </h3>

              <p className="text-gray-200 leading-8 mb-4">
                “We believe learning transforms lives. Our responsibility
                is to create environments where children feel safe,
                supported, and inspired to achieve. We focus on teacher
                excellence, institutional development, and digital innovation.”
              </p>

              <p className="text-gray-200 leading-8 mb-4">
                “Through strong public-private partnerships and international
                academic collaborations, we work tirelessly to close
                learning gaps and elevate educational outcomes for our youth.”
              </p>

              <p className="text-blue-300 font-semibold">
                Abdullahi Hassan Noor
              </p>

              <small className="text-blue-300/70">
                Director — Education Department
              </small>
            </div>

          </div>
        </motion.section>

        {/* STORY STRIPES */}
        <div className="space-y-28">

          <StoryBlock
            icon={<School className="w-9 h-9 text-white" />}
            title="School Infrastructure Development"
            text="Expansion of classrooms, sanitation facilities, libraries, science labs,
                  and protective school environments to accommodate growing student
                  populations safely."
          />

          <StoryBlock
            right
            icon={<GraduationCap className="w-9 h-9 text-white" />}
            title="Teacher Growth & Certification"
            text="Professional development programs, instructional mentoring, national
                  testing standards, and continuous assessment initiatives support
                  classroom excellence."
          />

          <StoryBlock
            icon={<BookOpen className="w-9 h-9 text-white" />}
            title="Curriculum Renewal"
            text="National alignment of curricula with literacy benchmarks, STEM objectives,
                  heritage education, digital literacy modules, and competency frameworks."
          />

          <StoryBlock
            right
            icon={<Laptop className="w-9 h-9 text-white" />}
            title="Education Digitalization"
            text="Deployment of classroom technology, learning management platforms,
                  smart boards, regional e-libraries, and teacher e-training networks."
          />

          <StoryBlock
            icon={<Users className="w-9 h-9 text-white" />}
            title="Student Welfare"
            text="Scholarship expansion, psychosocial support services, inclusive education
                  for learners with disabilities, nutrition support, and child-protection
                  outreach programs."
          />

          <StoryBlock
            right
            icon={<Globe className="w-9 h-9 text-white" />}
            title="Global Cooperation"
            text="Active partnerships with universities, NGOs, development agencies, and
                  diaspora educators strengthen policy development and funding initiatives."
          />
        </div>

        {/* STRATEGIC VISION */}
        <motion.section {...fade} className="max-w-4xl pb-24">
          <h2 className="text-3xl font-bold text-blue-300 mb-4">
            Strategic Vision
          </h2>

          <p className="flex gap-4 mb-2">
            <Target className="text-blue-300" />
            Achieve universal enrollment and nationwide literacy completion
          </p>

          <p className="flex gap-4 mb-2">
            <GraduationCap className="text-blue-300" />
            National teacher certification and continuing education programs
          </p>

          <p className="flex gap-4 mb-2">
            <Laptop className="text-blue-300" />
            Fully digitized classrooms with smart learning infrastructure
          </p>

          <p className="flex gap-4">
            <Globe className="text-blue-300" />
            International curriculum alignment and school accreditation standards
          </p>
        </motion.section>

      </div>
    </div>
  );
}
