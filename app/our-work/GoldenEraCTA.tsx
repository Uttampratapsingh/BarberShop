"use client";

import { useState } from "react";

export default function GoldenEraCTA() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative min-h-[630px] w-full overflow-hidden bg-[#100703]">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#281304_0%,#140903_42%,#070301_100%)]" />

      {/* Soft golden glow */}
      <div
        className={`pointer-events-none absolute left-[-180px] top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full blur-[140px] transition-all duration-1000 ${
          hovered ? "bg-[#c78700]/20" : "bg-[#b36d00]/10"
        }`}
      />

      {/* Center content */}
      <div className="relative z-10 flex min-h-[630px] items-center justify-center px-5">
        <div className="flex w-full max-w-[900px] flex-col items-center text-center">
          <h2
            className="
              text-[48px]
              font-extrabold
              leading-[1.05]
              tracking-[-0.05em]
              text-[#ffd21a]
              transition-all
              duration-700
              sm:text-[60px]
              md:text-[68px]
              lg:text-[76px]
            "
          >
            Begin Your Golden Era
          </h2>

          <p
            className="
              mt-[42px]
              max-w-[720px]
              text-[18px]
              font-medium
              leading-[1.55]
              tracking-[-0.02em]
              text-[#fff1ad]
              sm:text-[21px]
              md:text-[23px]
            "
          >
            Let's gild your vision with expertise that only decades of luxury
            <br className="hidden sm:block" />
            craftsmanship can provide
          </p>

          {/* CTA */}
          <a
            href="tel:+919999999999"
            type="button"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="
              group
              mt-[62px]
              flex
              h-[78px]
              w-[385px]
              max-w-full
              items-center
              justify-center
              gap-4
              rounded-full
              bg-[#d99600]
              px-8
              text-[21px]
              font-bold
              text-black
              shadow-[0_12px_40px_rgba(191,126,0,0.15)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:scale-[1.02]
              hover:bg-[#e4a200]
              hover:shadow-[0_18px_50px_rgba(217,150,0,0.3)]
              active:translate-y-0
              active:scale-[0.98]
              sm:text-[22px]
            "
          >
            <span>Start Golden Journey</span>

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="
                h-6
                w-6
                transition-transform
                duration-300
                group-hover:translate-x-2
              "
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom subtle glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[1px] w-[65%] -translate-x-1/2 bg-[#ffd21a]/10" />

      {/* Decorative hover shimmer */}
      <div
        className={`pointer-events-none absolute inset-y-0 left-[-25%] w-[25%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-[#ffd21a]/[0.04] to-transparent transition-all duration-[1200ms] ${
          hovered ? "translate-x-[550%]" : "translate-x-0"
        }`}
      />
    </section>
  );
}