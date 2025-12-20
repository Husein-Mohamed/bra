"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Wallet,
  FileText,
  Users,
  ClipboardList,
  BadgeCheck,
  TrendingUp,
  Shield,
  PieChart,
  BookOpen,
  Landmark,
  Briefcase,
} from "lucide-react";

const BRA_BLUE = "#080C2C";

export default function AdminFinancePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0A1A3f] to-[#dA0B0B] text-white py-24">
      {/* preserve dark overlay for premium contrast (keeps original BG visible) */}
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
            Administration & Finance Department
          </h1>

          <p className="max-w-4xl mx-auto text-lg text-gray-200 leading-relaxed">
            The Administration & Finance Department of the Banadir Regional Administration (BRA)
            serves as the backbone of institutional governance. It is responsible for strengthening
            administrative systems, safeguarding public finances, regulating procurement processes,
            and ensuring complete transparency across all operational activities of the regional
            government.
          </p>

          <p className="mt-4 max-w-4xl mx-auto text-gray-300">
            Through policy enforcement, detailed financial reporting, workforce management, and
            accountability mechanisms, the department works to ensure that public resources are
            effectively utilized to support sustainable development and quality public services
            for all residents of Mogadishu.
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
              src="/images/PNG/mayor2.png"
              alt="Director"
              className="w-44 h-44 object-cover rounded-3xl border-4 mx-auto"
              style={{ borderColor: BRA_BLUE }}
            />

            <div className="md:col-span-2">
              <p className="leading-relaxed mb-6 text-gray-200">
                “Our mandate is to maintain financial responsibility and ensure that every public
                fund entrusted to the Banadir Regional Administration is managed in a transparent,
                ethical, and accountable manner. By strengthening administrative frameworks and
                promoting compliance, we contribute to building public trust and institutional
                integrity.”
              </p>

              <p className="text-blue-200 font-semibold">Farah Abdi Farh</p>
              <p className="text-gray-400 italic text-sm">Director of Administration & Finance – BRA</p>
            </div>
          </div>
        </motion.section>

        {/* CORE FUNCTIONS */}
        <section className="mb-28">
          <SectionTitle title="Core Functions" />

          <div className="grid md:grid-cols-3 gap-8">
            <InfoCard
              icon={<Building2 />}
              title="Administrative Coordination"
              text="Oversees internal management systems, human resource coordination, official correspondence, and institutional records. Ensures smooth inter-departmental collaboration and standardized administrative protocols across all BRA agencies."
            />

            <InfoCard
              icon={<Wallet />}
              title="Financial Management"
              text="Responsible for regional budgeting, revenue allocation, financial auditing, and expenditure oversight. Maintains compliance with statutory financial frameworks to ensure responsible and lawful use of public resources."
            />

            <InfoCard
              icon={<FileText />}
              title="Procurement & Documentation"
              text="Manages tender documentation, contractual agreements, logistics approvals, and asset inventory records, ensuring that procurement procedures remain competitive, transparent, and legally sound."
            />
          </div>
        </section>

        {/* KEY ACTIVITIES */}
        <section className="mb-28">
          <SectionTitle title="Key Operational Activities" />

          <div className="grid md:grid-cols-3 gap-8">
            <OutlineCard
              icon={<TrendingUp />}
              title="Annual Budget Planning"
              text="Develops comprehensive annual budgets aligned with BRA development priorities, coordinating departmental funding requests and conducting financial forecasts to sustain long-term public investment."
            />

            <OutlineCard
              icon={<ClipboardList />}
              title="Procurement Review"
              text="Evaluates contract bids, verifies supplier compliance, conducts value-for-money analysis, and oversees tender compliance monitoring to reduce financial risk."
            />

            <OutlineCard
              icon={<BadgeCheck />}
              title="Compliance Audits"
              text="Conducts internal audits and regulatory reviews across departments to ensure legal conformity, procedural accuracy, and mitigation of financial mismanagement."
            />
          </div>
        </section>

        {/* COMPLIANCE & CONTROL */}
        <section className="mb-28 border-[3px] border-white/10 rounded-3xl p-12 bg-gradient-to-br from-white/10 to-transparent">
          <SectionTitle title="Financial Safeguards & Controls" />

          <div className="grid md:grid-cols-2 gap-10">
            <ComplianceItem
              icon={<Shield />}
              title="Financial Safeguards"
              text="Deploys strict internal control systems designed to detect, prevent, and address misuse of public funds. All financial transactions undergo verification and compliance validation prior to authorization."
            />

            <ComplianceItem
              icon={<PieChart />}
              title="Performance Tracking"
              text="Implements data-driven monitoring of government expenditure trends, project investment indicators, and program evaluations to improve financial forecasting accuracy and resource efficiency."
            />
          </div>
        </section>

        {/* POLICY, TRAINING & SUPPORT */}
        <section className="mb-28">
          <SectionTitle title="Policy, Training & Support" />

          <div className="grid md:grid-cols-3 gap-8">
            <InfoCard
              icon={<BookOpen />}
              title="Financial Policy Development"
              text="Drafts internal policy frameworks governing procurement, asset utilization, payroll operations, financial reporting standards, and risk-management control measures."
            />

            <InfoCard
              icon={<Users />}
              title="Workforce Capacity Building"
              text="Conducts professional development seminars and certification programs to ensure administrative staff meet modern competency standards and ethical governance guidelines."
            />

            <InfoCard
              icon={<Briefcase />}
              title="Departmental Advisory Services"
              text="Provides expert administrative and financial advisory services to all BRA directorates, strengthening decision-making quality and execution effectiveness."
            />
          </div>
        </section>

        {/* MISSION & STATS */}
        <section className="mb-12 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <SectionTitle title="Departmental Mission" />
            <p className="text-gray-200 mb-6 leading-relaxed">
              To institutionalize transparent financial practices, strengthen administrative
              governance systems, and support effective service delivery across the Banadir
              Region through accountability, efficiency, and ethical leadership.
            </p>
          </div>

          <div className="bg-white/5 border border-white/15 backdrop-blur-xl p-10 rounded-3xl">
            <div className="grid grid-cols-2 gap-8 text-center">
              <Stat icon={<Users />} value="400+" label="Government Employees Managed" />
              <Stat icon={<Wallet />} value="$12M+" label="Annual Regional Budget" />
              <Stat icon={<FileText />} value="3,200+" label="Procurement Files Processed" />
              <Stat icon={<Building2 />} value="48" label="Municipal Offices Supported" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

/* -------------------------
   SMALL COMPONENTS
-------------------------- */

function SectionTitle({ title }: { title: string }) {
  return <h2 className="text-3xl font-bold mb-10 text-blue-300">{title}</h2>;
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
        <p className="text-gray-300 text-sm leading-relaxed text-center">{text}</p>
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
        <p className="text-sm text-gray-300 text-center leading-relaxed">{text}</p>
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
