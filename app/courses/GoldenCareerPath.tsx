"use client";

import { useEffect, useState } from "react";

export default function GoldenCareerPath() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[640px] overflow-hidden bg-[#080808] px-5 sm:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#090909_0%,#080808_100%)]" />

      {/* Very subtle golden glow */}
      <div
        className={`pointer-events-none absolute left-1/2 top-[42%] h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px] transition-all duration-1000 ${
          hovered ? "bg-[#dcae18]/[0.05]" : "bg-[#dcae18]/[0.018]"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[640px] max-w-[1500px] flex-col items-center justify-center text-center">
        {/* Heading */}
        <h1
          className={`text-[44px] font-extrabold leading-[1.05] tracking-[-0.05em] text-[#d9aa20] transition-all duration-1000 ease-out sm:text-[54px] md:text-[64px] lg:text-[68px] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Forge Your Golden Career Path
        </h1>

        {/* Description */}
        <p
          className={`mt-[42px] max-w-[930px] text-[18px] font-normal leading-[1.65] tracking-[-0.015em] text-[#c49c1a] transition-all duration-1000 delay-150 ease-out sm:text-[20px] md:text-[22px] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Begin your transformation with our gilded education programs and
          unlock premium
          <br className="hidden sm:block" />
          career opportunities.
        </p>

        {/* Button */}
        <button
          type="button"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`group mt-[67px] flex h-[80px] w-[250px] items-center justify-center rounded-full bg-[#d9b238] text-[20px] font-bold tracking-[-0.02em] text-black shadow-[0_10px_35px_rgba(217,178,56,0.08)] transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:bg-[#e4bc45] hover:shadow-[0_18px_45px_rgba(217,178,56,0.2)] active:scale-[0.98] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="transition-transform duration-300 group-hover:scale-[1.03]">
            Enroll Now
          </span>
        </button>
      </div>

      {/* Button shimmer */}
      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[80px] w-[250px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full ${
          hovered ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      >
        <div
          className={`absolute inset-y-0 left-[-60%] w-[30%] skew-x-[-20deg] bg-white/20 transition-transform duration-[900ms] ${
            hovered ? "translate-x-[430%]" : "translate-x-0"
          }`}
        />
      </div>

      {/* Bottom border */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-[#4f3c0b]/30" />
    </section>
  );
}