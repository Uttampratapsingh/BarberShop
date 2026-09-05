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
    <section className="our-services relative min-h-screen overflow-hidden bg-[#FDFBD4] px-5 py-[52px] sm:px-8 md:px-12 lg:px-[9.5%]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="our-services-background absolute inset-0 bg-[#FDFBD4]" />

        <div className="absolute left-1/2 top-[-300px] h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[#C05800]/[0.025] blur-[150px]" />
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
          <h1 className="text-[48px] font-extrabold leading-[1] tracking-[-0.045em] text-[#38240D] sm:text-[58px] md:text-[64px] lg:text-[68px]">
            Our Services
          </h1>

          <p className="mt-[28px] text-[19px] font-normal tracking-[-0.015em] text-[#713600] sm:text-[21px] md:text-[22px]">
            Explore our range of golden-standard services.
          </p>

          {/* Divider */}
          <div className="our-services-divider mx-auto mt-[38px] h-px w-[43%] max-w-[650px] bg-[#C05800]" />
        </div>

        {/* Services */}
        <div className="mt-[162px] grid grid-cols-1 gap-[36px] md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`group relative min-h-[188px] overflow-hidden rounded-[15px] border border-[#713600]/70 bg-[#713600] px-[37px] py-[39px] transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[#A85A1A] hover:bg-[#713600] hover:shadow-[0_20px_55px_rgba(56, 36, 13, 0.45)] ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: `${150 + index * 100}ms`,
              }}
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#C05800]/[0.04] blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Animated top line */}
              <div className="absolute left-0 top-0 h-px w-0 bg-[#C05800]/70 transition-all duration-700 group-hover:w-full" />

              <div className="relative z-10">
                <h2 className="text-[25px] font-bold leading-[1.15] tracking-[-0.03em] text-[#C05800] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#C05800] sm:text-[27px]">
                  {service.title}
                </h2>

                <p className="mt-[23px] max-w-[420px] text-[17px] font-normal leading-[1.55] tracking-[-0.01em] text-[#C05800] transition-colors duration-300 group-hover:text-[#C05800] sm:text-[18px]">
                  {service.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="pointer-events-none absolute bottom-0 right-0 h-[1px] w-0 bg-[#C05800]/50 transition-all duration-700 group-hover:w-[35%]" />
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .our-services,
        .our-services .our-services-background {
          background: #FDFBD4 !important;
          background-image: none !important;
        }

        .our-services h1 {
          color: #38240D !important;
        }

        .our-services > div > div:first-child p {
          color: #713600 !important;
        }

        .our-services article h2,
        .our-services article p {
          color: #713600 !important;
        }

        .our-services-divider {
          background-color: #C05800 !important;
          background-image: none !important;
        }
      `}</style>
    </section>
  );
}