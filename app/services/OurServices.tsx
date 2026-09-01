"use client";

import { useEffect, useState } from "react";

type Service = {
  id: number;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    id: 1,
    title: "Facials & Cleanups",
    description:
      "Rejuvenating treatments including Dr. Rashel, Vedic Line, and Hydra Facial therapies",
  },
  {
    id: 2,
    title: "Waxing Services",
    description:
      "Complete hair removal solutions for body and special occasions",
  },
  {
    id: 3,
    title: "Nail Services",
    description:
      "Premium nail art, extensions, and creative designs with gel options",
  },
  {
    id: 4,
    title: "Bridal Makeup",
    description:
      "Complete bridal transformation with HD, Airbrush, and professional styling",
  },
  {
    id: 5,
    title: "Hair Services",
    description:
      "Coloring, spa treatments, and professional styling for all hair types",
  },
  {
    id: 6,
    title: "Body Treatments",
    description:
      "Full body care including polishing, massage, and skin enhancement therapies",
  },
];

export default function OurServices() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080808] px-5 py-[52px] sm:px-8 md:px-12 lg:px-[9.5%]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#090909_0%,#080808_100%)]" />

        <div className="absolute left-1/2 top-[-300px] h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[#d8a300]/[0.025] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1460px]">
        {/* Heading */}
        <div
          className={`text-center transition-all duration-1000 ease-out ${
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <h1 className="text-[48px] font-extrabold leading-[1] tracking-[-0.045em] text-[#ffd21a] sm:text-[58px] md:text-[64px] lg:text-[68px]">
            Our Services
          </h1>

          <p className="mt-[28px] text-[19px] font-normal tracking-[-0.015em] text-[#dcae17] sm:text-[21px] md:text-[22px]">
            Explore our range of golden-standard services.
          </p>

          {/* Divider */}
          <div className="mx-auto mt-[38px] h-px w-[40%] max-w-[650px] bg-[#6b490d]/40" />
        </div>

        {/* Services */}
        <div className="mt-[162px] grid grid-cols-1 gap-[36px] md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`group relative min-h-[188px] overflow-hidden rounded-[15px] border border-[#4f3508]/70 bg-black px-[37px] py-[39px] transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[#9a6b0f] hover:bg-[#050505] hover:shadow-[0_20px_55px_rgba(0,0,0,0.45)] ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: `${150 + index * 100}ms`,
              }}
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#ffd21a]/[0.04] blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Animated top line */}
              <div className="absolute left-0 top-0 h-px w-0 bg-[#ffd21a]/70 transition-all duration-700 group-hover:w-full" />

              <div className="relative z-10">
                <h2 className="text-[25px] font-bold leading-[1.15] tracking-[-0.03em] text-[#ddb21c] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#ffd21a] sm:text-[27px]">
                  {service.title}
                </h2>

                <p className="mt-[23px] max-w-[420px] text-[17px] font-normal leading-[1.55] tracking-[-0.01em] text-[#cba31b] transition-colors duration-300 group-hover:text-[#e2b82c] sm:text-[18px]">
                  {service.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="pointer-events-none absolute bottom-0 right-0 h-[1px] w-0 bg-[#ffd21a]/50 transition-all duration-700 group-hover:w-[35%]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}