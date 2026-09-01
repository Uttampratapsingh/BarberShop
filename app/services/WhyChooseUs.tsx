"use client";

import { useEffect, useState } from "react";

type Reason = {
  id: number;
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    id: 1,
    title: "Comprehensive Bridal Packages",
    description:
      "Customizable bridal preparations with complete beauty solutions",
  },
  {
    id: 2,
    title: "Premium Product Selection",
    description:
      "Using professional-grade cosmetics and care products",
  },
  {
    id: 3,
    title: "Expert Beauty Artists",
    description:
      "Skilled professionals with decade-long industry experience",
  },
  {
    id: 4,
    title: "End-to-End Beauty Services",
    description:
      "From skincare to final look completion in one place",
  },
];

export default function WhyChooseUs() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#080808] px-5 py-[72px] sm:px-8 md:px-12 lg:px-[10.1%]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#080808_0%,#050505_100%)]" />

        <div className="absolute left-1/2 top-[-300px] h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-[#dca000]/[0.018] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1630px]">
        {/* Heading */}
        <div
          className={`text-center transition-all duration-1000 ease-out ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-[42px] font-extrabold leading-none tracking-[-0.045em] text-[#ffd21a] sm:text-[48px] md:text-[54px] lg:text-[58px]">
            Why Choose Us
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-[82px] grid grid-cols-1 gap-[39px] lg:grid-cols-2 lg:gap-x-[40px]">
          {reasons.map((reason, index) => (
            <article
              key={reason.id}
              className={`group relative min-h-[170px] overflow-hidden rounded-[15px] border border-[#4a3108]/70 bg-black px-[40px] py-[42px] transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[#80600d] hover:bg-[#020202] hover:shadow-[0_20px_55px_rgba(0,0,0,0.5)] ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: `${150 + index * 120}ms`,
              }}
            >
              {/* Soft hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-[#ffd21a]/[0.035] blur-[80px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Top animated accent */}
              <div className="absolute left-0 top-0 h-px w-0 bg-[#ffd21a]/70 transition-all duration-700 group-hover:w-full" />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-[24px] font-bold leading-[1.2] tracking-[-0.03em] text-[#ddb41d] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#ffd21a] sm:text-[25px]">
                  {reason.title}
                </h3>

                <p className="mt-[25px] text-[18px] font-normal leading-[1.4] tracking-[-0.015em] text-[#bd9415] transition-colors duration-300 group-hover:text-[#d5aa19] sm:text-[19px]">
                  {reason.description}
                </p>
              </div>

              {/* Bottom hover accent */}
              <div className="pointer-events-none absolute bottom-0 right-0 h-px w-0 bg-[#ffd21a]/60 transition-all duration-700 group-hover:w-[28%]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}