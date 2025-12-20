"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Users,
  GraduationCap,
  ClipboardList,
  Shield,
  Briefcase,
  HeartHandshake,
  Target,
  ArrowRight,
} from "lucide-react";

export default function HRMPage() {
  const services = [
    {
      title: "Recruitment & Staffing",
      description:
        "HRM manages transparent and merit-based recruitment across all BRA departments including announcements, interviews, examinations, background verification, and onboarding.",
      icon: Users,
    },
    {
      title: "Training & Capacity Building",
      description:
        "Professional development through leadership training, administrative workshops, and technical skills programs to strengthen service delivery capacity.",
      icon: GraduationCap,
    },
    {
      title: "Employee Records Management",
      description:
        "Centralized personnel record keeping covering employment history, contracts, promotions, leave balances, and performance evaluations.",
      icon: ClipboardList,
    },
    {
      title: "Payroll, Benefits & Welfare",
      description:
        "Administration of salaries, allowances, pensions, health benefits, and employee welfare support programs.",
      icon: Briefcase,
    },
    {
      title: "Performance & Compliance",
      description:
        "Monitoring staff output, ethics enforcement, disciplinary frameworks, and civil service compliance policies.",
      icon: Shield,
    },
    {
      title: "Employee Relations & Support",
      description:
        "Promoting workplace well-being through conflict mediation, grievance handling, mental health support, and equality protection.",
      icon: HeartHandshake,
    },
  ];

  const initiatives = [
    "Annual civil service certification for leadership staff.",
    "Graduate internship placements and youth employment programs.",
    "Women empowerment and professional training initiatives.",
    "Occupational wellness campaigns across all district offices.",
    "HR digital modernization and payroll automation rollout.",
  ];

  const values = [
    "Integrity and fairness in recruitment processes.",
    "Merit-based employment policies.",
    "Ongoing professional development.",
    "Employee welfare and workplace safety.",
    "Public accountability and professionalism.",
  ];

  return (
    <section className="bg-white overflow-hidden">
      {/* ================= HERO ================= */}
      <div className="bg-gradient-to-br from-[#080C2C] via-[#0a1150] to-[#080C2C] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="uppercase tracking-widest text-xs text-red-400 mb-3">
            HRM DEPARTMENT.
          </p>

          <h1 className="text-4xl md:text-3xl font-bold mb-8">
            Human Resource Management
          </h1>

          <p className="max-w-3xl text-gray-300 leading-relaxed text-lg">
            The Human Resource Management (HRM) Department of the Banadir Regional
            Administration strengthens public service delivery by managing
            recruitment, professional development, welfare, and workforce governance
            throughout Mogadishu.
          </p>
        </div>
      </div>

      {/* ================= DIRECTOR ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0a1150] to-[#080C2C] p-10 md:p-14 shadow-2xl border border-[#1e3555]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {/* PROFILE IMAGE */}
            <div className="flex justify-center">
              <div className="relative w-52 h-64">
                <div className="absolute inset-0 rounded-[40px] bg-red-900 opacity-30 blur-lg"></div>

                <div className="relative z-10 w-full h-full rounded-[40px] border-4 border-red-900 overflow-hidden profile-clip">
                  <Image
                    src="/images/PNG/dalha.jpg"
                    alt="HRM Director"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* MESSAGE */}
            <div className="md:col-span-2">
              <h2 className="text-3xl text-white font-bold mb-3">
                Message from the Director
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Our people remain the foundation of public governance. HRM works to
                establish professionalism, ethical practice, and merit-based growth
                throughout the BRA workforce. We ensure fair recruitment, capacity
                building, and welfare support across all sectors.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Through continuous training and digital modernization, we strengthen
                workforce efficiency to better serve the people of Mogadishu.
              </p>

              <div className="mt-6">
                <p className="text-white font-semibold">
                  Dr. Abdirahman Hassan
                </p>
                <p className="text-red-400">
                  Director of Human Resource Management
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SERVICES ================= */}
      <div className="bg-[#f8fafc] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">
            HRM Core Responsibilities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((s, i) => {
              const Icon = s.icon;

              return (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-xl transition-all"
                >
                  <Icon className="w-10 h-10 text-red-900 mb-4" />

                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {s.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= INITIATIVES ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">
          Strategic HR Initiatives
        </h2>

        <div className="space-y-6">
          {initiatives.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm"
            >
              <Target className="text-red-900 w-6 h-6 shrink-0 mt-1" />
              <p className="text-gray-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= VALUES ================= */}
      <div className="bg-[#080C2C] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            HRM Guiding Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-[#0b1035] border border-[#1e3555] rounded-xl p-6 shadow"
              >
                <Target className="w-6 h-6 text-red-500 mb-3" />
                <p className="text-sm text-gray-300 leading-relaxed">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Careers at Banadir Regional Administration
          </h2>

          <p className="text-gray-600 mb-10 leading-relaxed">
            Join a growing workforce contributing to governance excellence and
            quality service delivery throughout Mogadishu.
          </p>

          <Link
            href="/careers"
            className="inline-flex items-center gap-3 px-8 py-4 bg-red-900 text-white font-semibold rounded-lg shadow-lg hover:bg-red-800 transition"
          >
            View Current Vacancies
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* ================= SHAPE STYLE ================= */}
      <style jsx>{`
        .profile-clip {
          clip-path: polygon(
            8% 0%,
            92% 0%,
            100% 12%,
            100% 88%,
            92% 100%,
            8% 100%,
            0% 88%,
            0% 12%
          );
        }
      `}</style>
    </section>
  );
}
