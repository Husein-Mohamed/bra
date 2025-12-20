"use client";

import { motion } from "framer-motion";
import {
  Map,
  TrendingUp,
  ClipboardList,
  Building2,
  Users,
  ShieldCheck,
  BookOpen,
  PieChart,
  Landmark,
  Briefcase,
} from "lucide-react";

const BRA_BLUE = "#080C2C";

export default function PlanningPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0A1A3f] to-[#dA0B0B] text-white py-24">
      {/* Premium dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-300 mb-6">
            Planning Department
          </h1>

          <p className="max-w-4xl mx-auto text-lg text-gray-200 leading-relaxed">
            The Planning Department of the Banadir Regional Administration (BRA)
            plays a central role in shaping Mogadishu’s long-term development vision.
            The department coordinates strategic planning, urban development policies,
            infrastructure assessments, and service expansion programs aligned with
            government priorities.
          </p>

          <p className="mt-4 max-w-4xl mx-auto text-gray-300">
            Working closely with ministries, district administrations, development
            partners, and community stakeholders, the department ensures that growth
            initiatives are sustainable, data-driven, inclusive, and responsive to
            the evolving needs of citizens.
          </p>
        </motion.div>

        {/* DIRECTOR MESSAGE */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-xl border border-white/15 p-10 rounded-3xl mb-28 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <img
              src="/images/PNG/dalha.jpg"
              alt="Director"
              className="w-44 h-44 object-cover rounded-3xl border-4 mx-auto"
              style={{ borderColor: BRA_BLUE }}
            />

            <div className="md:col-span-2">
              <p className="leading-relaxed mb-6 text-gray-200">
                “Our responsibility is to ensure that development initiatives across
                the Banadir Region are guided by clear strategies, sound data analysis,
                and inclusive participation. Effective planning is the foundation for
                climate-resilient infrastructure, improved service delivery, and
                economic growth.”
              </p>

              <p className="text-blue-200 font-semibold">
                Abdulkadir Muhudin Dalha
              </p>
              <p className="text-gray-400 italic text-sm">
                Director of Planning – BRA
              </p>
            </div>
          </div>
        </motion.section>

        {/* CORE FUNCTIONS */}
        <section className="mb-28">
          <SectionTitle title="Core Functions" />

          <div className="grid md:grid-cols-3 gap-8">
            <InfoCard
              icon={<Map />}
              title="Urban & Spatial Planning"
              text="Development of land-use plans, zoning policies, road mapping,
                housing layouts, and public space frameworks to guide structured city
                growth and reduce informal settlement expansion."
            />

            <InfoCard
              icon={<TrendingUp />}
              title="Development Strategy"
              text="Preparation of multi-year development strategies and sector action
                plans aligned with government priorities and donor-supported programs."
            />

            <InfoCard
              icon={<ClipboardList />}
              title="Project Monitoring"
              text="Ongoing evaluation of public infrastructure projects, contract
                compliance tracking, implementation review, and reporting of progress
                to leadership and funding partners."
            />
          </div>
        </section>

        {/* KEY ACTIVITIES */}
        <section className="mb-28">
          <SectionTitle title="Key Operational Activities" />

          <div className="grid md:grid-cols-3 gap-8">
            <OutlineCard
              icon={<Landmark />}
              title="City Master Planning"
              text="Preparation and periodic updating of Mogadishu master plans integrating
                housing, transport, drainage, markets, public institutions, and green
                corridors."
            />

            <OutlineCard
              icon={<PieChart />}
              title="Socio-Economic Data Analysis"
              text="Collection of demographic and economic data to guide evidence-based
                policymaking and equitable district-level resource allocation."
            />

            <OutlineCard
              icon={<ShieldCheck />}
              title="Environmental Planning"
              text="Climate adaptation planning, disaster-risk assessments, flood
                management frameworks, and promotion of sustainable urban designs."
            />
          </div>
        </section>

        {/* POLICY & PARTNERSHIPS */}
        <section className="mb-28 border-[3px] border-white/10 rounded-3xl p-12 bg-gradient-to-br from-white/10 to-transparent">
          <SectionTitle title="Policy Frameworks & Partnerships" />

          <div className="grid md:grid-cols-2 gap-10">
            <ComplianceItem
              icon={<BookOpen />}
              title="Development Policy Framework"
              text="Drafting regulatory planning guidelines supporting integrated zoning,
                building codes, infrastructure regulation, and environmental compliance
                for responsible urban expansion."
            />

            <ComplianceItem
              icon={<Users />}
              title="Domestic & International Partnerships"
              text="Coordination with Ministries, UN agencies, municipalities, private-sector
                investors, NGOs, and humanitarian partners to harmonize development
                programs and maximize local benefits."
            />
          </div>
        </section>

        {/* PROGRAM SUPPORT */}
        <section className="mb-28">
          <SectionTitle title="Program & Capacity Support" />

          <div className="grid md:grid-cols-3 gap-8">
            <InfoCard
              icon={<Briefcase />}
              title="Project Advisory Services"
              text="Technical assistance for departmental and district development initiatives,
                feasibility assessments, implementation planning, and performance reporting."
            />

            <InfoCard
              icon={<Users />}
              title="Capacity Development"
              text="Training programs for planners, engineers, community coordinators,
                and municipal staff to strengthen data analysis and planning methodology."
            />

            <InfoCard
              icon={<Building2 />}
              title="Infrastructure Prioritization"
              text="Identification and ranking of public works needs—including roads,
                sanitation networks, schools, and health facilities—to guide
                government investment planning."
            />
          </div>
        </section>

        {/* MISSION & STATS */}
        <section className="mb-12 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <SectionTitle title="Departmental Mission" />
            <p className="text-gray-200 mb-6 leading-relaxed">
              To guide inclusive urban development through data-driven strategy,
              collaborative partnerships, responsible land-use planning, climate
              resilience frameworks, and sustainable infrastructure design across
              the Banadir Region.
            </p>
          </div>

          <div className="bg-white/5 border border-white/15 backdrop-blur-xl p-10 rounded-3xl">
            <div className="grid grid-cols-2 gap-8 text-center">
              <Stat icon={<Map />} value="18+" label="Master Plans Completed" />
              <Stat icon={<ClipboardList />} value="95+" label="Projects Supervised" />
              <Stat icon={<Users />} value="60+" label="Technical Staff" />
              <Stat icon={<Landmark />} value="17" label="Districts Supported" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

/* ----------------------------------
   REUSABLE COMPONENTS
---------------------------------- */

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-bold mb-10 text-blue-300">
      {title}
    </h2>
  );
}

function CircleIcon({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-14 h-14 mx-auto mb-5 rounded-full flex items-center justify-center"
      style={{ background: BRA_BLUE }}
    >
      <span className="text-white">{children}</span>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div whileHover={{ scale: 1.04 }}>
      <div className="bg-white/5 backdrop-blur-md border border-white/15 rounded-3xl p-8 shadow-lg">
        <CircleIcon>{icon}</CircleIcon>
        <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed text-center">
          {text}
        </p>
      </div>
    </motion.div>
  );
}

function OutlineCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div whileHover={{ scale: 1.04 }}>
      <div className="p-8 rounded-3xl border border-white/20 bg-transparent hover:bg-white/5 transition">
        <CircleIcon>{icon}</CircleIcon>
        <h3 className="text-lg font-semibold mb-3 text-center">{title}</h3>
        <p className="text-sm text-gray-300 text-center leading-relaxed">
          {text}
        </p>
      </div>
    </motion.div>
  );
}

function ComplianceItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-6">
      <CircleIcon>{icon}</CircleIcon>
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div>
      <CircleIcon>{icon}</CircleIcon>
      <h3 className="font-semibold text-xl">{value}</h3>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
}
