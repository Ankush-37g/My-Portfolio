import React from 'react';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: "Tata Consultancy Services - Research",
    role: "R&D Intern",
    period: "May 2026 – July 2026",
    location: "Hyderabad, India",
    type: "Internship",
    accent: "#f2991a",
    bullets: [
      "Engineered onboarding and dashboard modules within a layered, multi-service payment system architecture (CBDC/UPI-style), using Python, SQLite, and Streamlit, with each service layer enforcing least-privilege access to its own owned tables.",
      "Developed a 4-step user registration workflow (Personal Info, Demographics, CKYC/Documents, Security), coordinating data flow and validation across SIE, ROUTER, PIMS, CKYC and PSO service layers with strict table ownership boundaries.",
      "Built the dashboard module enabling users to link/unlink VPAs, create and delete wallets, check balances, and deregister from SIE or CBDC.",
    ],
    tags: ["Python", "SQLite", "Streamlit", "CBDC", "UPI", "REST APIs"],
  },
];

const ExperienceCard = ({ experience, darkMode, isLast }) => {
  const { company, role, period, location, type, accent, bullets, tags } = experience;

  return (
    <div className="relative flex gap-6 sm:gap-8">
      {/* Timeline line */}
      {!isLast && (
        <div
          className="absolute left-5 sm:left-6 top-14 bottom-0 w-px"
          style={{ background: `linear-gradient(to bottom, ${accent}88, transparent)` }}
        />
      )}

      {/* Timeline dot */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <div
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg border-2 mt-1"
          style={{ borderColor: accent, background: `${accent}22` }}
        >
          <Briefcase size={18} style={{ color: accent }} />
        </div>
      </div>

      {/* Card */}
      <div
        className={`flex-1 mb-12 rounded-2xl border p-6 sm:p-8 transition-all duration-300 hover:shadow-xl group
          ${darkMode
            ? 'bg-[#0f172a]/60 border-slate-800 hover:border-orange-500/40 shadow-xl'
            : 'bg-white border-slate-200 hover:border-orange-400/60 shadow-md'
          }`}
      >
        {/* Top row */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider"
                style={{ color: accent, background: `${accent}20` }}
              >
                {type}
              </span>
            </div>
            <h3 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {company}
            </h3>
            <p className="text-orange-500 font-semibold mt-0.5 text-lg">{role}</p>
          </div>

          <div className={`flex flex-col items-end gap-1.5 text-sm ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} />
              {location}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-5 rounded-full"
          style={{ background: `linear-gradient(to right, ${accent}66, transparent)` }}
        />

        {/* Bullets */}
        <ul className="space-y-3 mb-6">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3">
              <ChevronRight
                size={16}
                className="flex-shrink-0 mt-0.5"
                style={{ color: accent }}
              />
              <span className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                {bullet}
              </span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className={`px-3 py-1 text-xs font-medium rounded-full
                ${darkMode ? 'bg-slate-800 text-slate-300' : 'bg-gray-100 text-gray-600'}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = ({ darkMode }) => {
  return (
    <section id="experience" className="py-8 sm:py-14 relative overflow-hidden">
      <div className="container mx-auto px-5 sm:py-10">

        {/* Header */}
        <div className="mb-16 text-center" data-aos="fade-up" data-aos-delay="200">
          <h1 className={`text-4xl sm:text-3xl md:text-6xl font-semibold title-font mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My <span className="text-orange-500">Experience</span>
          </h1>
          <p className={`text-md mx-auto max-w-2xl leading-relaxed ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>
            A timeline of my professional journey and internships.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="400">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              experience={exp}
              darkMode={darkMode}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
