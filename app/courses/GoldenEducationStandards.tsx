"use client";

import { useEffect, useState } from "react";

type Standard = {
  id: number;
  title: string;
  description: string;
};

const standards: Standard[] = [
  {
    id: 1,
    title: "Expert Instructors",
    description:
      "Learn from industry masters with decade-long expertise",
  },
  {
    id: 2,
    title: "Hands-On Training",
    description:
      "Practical training in state-of-the-art facilities",
  },
  {
    id: 3,
    title: "Industry-Recognized Certifications",
    description:
      "Globally recognized certifications with gold-standard accreditation",
  },
  {
    id: 4,
    title: "Flexible Learning Options",
    description:
      "Personalized learning paths with flexible scheduling",
  },
];

export default function GoldenEducationStandards() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#713600] px-5 py-[28px] sm:px-8 md:px-12 lg:px-[6.1%] mt-32">
      {/* Background */}
      {/* <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#713600_0%,#713600_100%)]" /> */}

      <div className="pointer-events-none absolute left-1/2 top-[-260px] h-[550px] w-[1000px] -translate-x-1/2 rounded-full bg-[#C05800]/[0.018] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1700px] md:border-t-1 md:border-[#C05800]">
        {/* Heading */}
        <div
          className={`text-center transition-all duration-1000 ease-out ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <h1 className="md:mt-20 text-[42px] font-extrabold leading-none tracking-[-0.045em] text-[#38240D] sm:text-[50px] md:text-[56px] lg:text-[58px]">
            Golden Education Standards
          </h1>
        </div>

        {/* Cards */}
        <div className="mt-[92px] grid grid-cols-1 gap-[44px] lg:grid-cols-2 lg:gap-x-[45px] lg:gap-y-[45px]">
          {standards.map((standard, index) => (
            <article
              key={standard.id}
              className={`group relative min-h-[188px] overflow-hidden rounded-[17px] border border-[#C05800] bg-[#713600] px-[45px] py-[48px] transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[#A85A1A] hover:bg-[#38240D] hover:shadow-[0_24px_65px_rgba(56, 36, 13, 0.45)] ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: `${150 + index * 130}ms`,
              }}
            >
              {/* Top animated line */}
              <div className="absolute left-0 top-0 h-px w-0 bg-[#C05800]/80 transition-all duration-700 group-hover:w-full" />

              {/* Soft glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-[200px] w-[200px] rounded-full bg-[#C05800]/[0.035] blur-[75px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-[25px] font-bold leading-[1.15] tracking-[-0.035em] text-[#38240D]/80 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#38240D] sm:text-[27px]">
                  {standard.title}
                </h2>

                <p className="mt-[28px] text-[17px] font-normal leading-[1.45] tracking-[-0.012em] text-[#713600]/70 transition-colors duration-300 group-hover:text-[#713600] sm:text-[18px]">
                  {standard.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 right-0 h-px w-0 bg-[#C05800]/60 transition-all duration-700 group-hover:w-[30%]" />

              {/* Shine */}
              <div className="pointer-events-none absolute inset-y-0 -left-[35%] w-[12%] skew-x-[-20deg] bg-[#FDFBD4]/[0.025] transition-transform duration-[1100ms] group-hover:translate-x-[950%]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}