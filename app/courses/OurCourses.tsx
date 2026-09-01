"use client";

import { useEffect, useState } from "react";

export default function OurCourses() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[410px] overflow-hidden bg-[#080808] px-5 sm:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#090909_0%,#080808_100%)]" />

      {/* Subtle golden glow */}
      <div
        className={`pointer-events-none absolute left-1/2 top-[30%] h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] transition-all duration-1000 ${
          hovered ? "bg-[#e0ad12]/[0.05]" : "bg-[#e0ad12]/[0.018]"
        }`}
      />

      <div className="relative z-10 mx-auto flex min-h-[410px] max-w-[1500px] flex-col items-center text-center">
        {/* Heading */}
        <div
          className={`pt-[105px] transition-all duration-1000 ease-out ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <h1
            className="
              text-[50px]
              font-extrabold
              leading-none
              tracking-[-0.05em]
              text-[#ffd21a]
              sm:text-[58px]
              md:text-[66px]
              lg:text-[72px]
            "
          >
            Our Courses
          </h1>

          {/* Subtitle */}
          <p
            className="
              mt-[37px]
              text-[18px]
              font-normal
              leading-none
              tracking-[-0.02em]
              text-[#c99f18]
              transition-all
              duration-500
              sm:text-[20px]
              md:text-[22px]
            "
          >
            Explore our range of golden-standard beauty education
          </p>
        </div>

        {/* Divider */}
        <div
          className={`mt-[47px] h-px w-[45%] max-w-[700px] bg-[#57420d]/60 transition-all duration-[1200ms] ease-out ${
            visible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
          }`}
        />

        {/* Invisible interaction area */}
        <div
          className="absolute inset-0 cursor-default"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
      </div>

      {/* Bottom edge */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-[#3a2b08]/30" />
    </section>
  );
}