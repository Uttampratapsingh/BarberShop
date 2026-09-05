"use client";

import { useState } from "react";

export default function BridalJourneyCTA() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="bridal-journey-cta relative min-h-[595px] overflow-hidden bg-[#FDFBD4] px-5 sm:px-8">
      {/* Background */}
      <div className="bridal-journey-cta-background absolute inset-0 bg-[#FDFBD4]" />

      {/* Very subtle golden glow */}
      <div
        className={`pointer-events-none absolute left-1/2 top-[35%] h-[430px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] transition-all duration-1000 ${
          hovered
            ? "bg-[#C05800]/[0.06]"
            : "bg-[#C05800]/[0.025]"
        }`}
      />

      <div className="relative z-10 mx-auto flex min-h-[595px] max-w-[1500px] flex-col items-center justify-center text-center">
        {/* Heading */}
        <h1
          className="
            text-[44px]
            font-extrabold
            leading-[1.05]
            tracking-[-0.045em]
            text-[#38240D]
            transition-all
            duration-700
            sm:text-[54px]
            md:text-[62px]
            lg:text-[66px]
          "
        >
          Begin Your Bridal Journey
        </h1>

        {/* Description */}
        <p
          className="
            mt-[43px]
            text-[17px]
            font-normal
            leading-[1.5]
            tracking-[-0.015em]
            text-[#713600]
            sm:text-[19px]
            md:text-[21px]
          "
        >
          Discover personalized beauty solutions for your special day with our
          expert team.
        </p>

        {/* CTA */}
        <a
          href="tel:+919781265400"
          type="button"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="
            group
            mt-[65px]
            flex
            h-[73px]
            w-[347px]
            max-w-full
            items-center
            justify-center
            rounded-full
            bg-[#713600]
            px-8
            text-[19px]
            font-bold
            tracking-[-0.02em]
            text-[#FDFBD4]
            shadow-[0_10px_35px_rgba(192,88,0,0.08)]
            transition-all
            duration-500
            hover:-translate-y-2
            hover:scale-[1.02]
            hover:bg-[#38240D]
            hover:shadow-[0_18px_45px_rgba(192,88,0,0.2)]
            active:translate-y-0
            active:scale-[0.98]
            sm:text-[20px]
          "
        >
          <span>Schedule Consultation</span>

          <span
            className="
              ml-2
              inline-block
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </a>

        {/* Information */}
        <div
          className="
            mt-[43px]
            space-y-[5px]
            text-center
            text-[16px]
            font-normal
            leading-[1.4]
            text-[#713600]
            transition-all
            duration-500
            sm:text-[17px]
          "
        >
          <p className="transition-transform duration-300 hover:translate-x-1">
            <span className="mr-1">✉️</span>
            Inquire about our pre-bridal programs and professional courses
          </p>

          <p className="transition-transform duration-300 hover:translate-x-1">
            <span className="mr-1">🚗</span>
            Available for destination wedding services
          </p>
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-[#713600]/30" />

      {/* Hover shimmer */}
      <div
        className={`pointer-events-none absolute inset-y-0 left-[-25%] w-[18%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.035] to-transparent transition-transform duration-[1200ms] ${
          hovered ? "translate-x-[720%]" : "translate-x-0"
        }`}
      />

      <style>{`
        .bridal-journey-cta,
        .bridal-journey-cta .bridal-journey-cta-background {
          background: #FDFBD4 !important;
          background-image: none !important;
        }

        .bridal-journey-cta h1 {
          color: #38240D !important;
        }

        .bridal-journey-cta p,
        .bridal-journey-cta > div > div:last-child {
          color: #713600 !important;
        }

        .bridal-journey-cta a {
          background-color: #713600 !important;
          color: #FDFBD4 !important;
        }

        .bridal-journey-cta a:hover {
          background-color: #38240D !important;
        }
      `}</style>
    </section>
  );
}