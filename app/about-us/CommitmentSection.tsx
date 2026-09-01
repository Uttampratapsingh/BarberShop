"use client";
import React, { useEffect, useRef } from "react";

export default function CommitmentSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll(".commitment-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("commitment-visible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .commitment-animate {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 0.8s ease,
            transform 0.8s cubic-bezier(.22, 1, .36, 1);
        }

        .commitment-title {
          transition-delay: 0.05s;
        }

        .commitment-item-1 {
          transition-delay: 0.2s;
        }

        .commitment-item-2 {
          transition-delay: 0.35s;
        }

        .commitment-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .commitment-item {
          position: relative;
          transition:
            transform 0.45s cubic-bezier(.22, 1, .36, 1);
        }

        .commitment-item::before {
          content: "";
          position: absolute;
          left: 0;
          top: -14px;
          width: 0;
          height: 2px;
          background: #ffd000;
          transition: width 0.5s ease;
        }

        .commitment-item:hover {
          transform: translateY(-5px);
        }

        .commitment-item:hover::before {
          width: 55px;
        }

        .commitment-heading {
          transition:
            color 0.35s ease,
            transform 0.35s ease,
            text-shadow 0.35s ease;
        }

        .commitment-item:hover .commitment-heading {
          transform: translateX(4px);
          color: #ffe000;
          text-shadow: 0 0 15px rgba(255, 208, 0, 0.2);
        }

        .commitment-description {
          transition:
            color 0.35s ease,
            transform 0.35s ease;
        }

        .commitment-item:hover .commitment-description {
          color: #e2e2e2;
          transform: translateX(2px);
        }

        @media (max-width: 900px) {
          .commitment-grid {
            grid-template-columns: 1fr;
            gap: 55px;
          }
        }

        @media (max-width: 640px) {
          .commitment-section {
            padding-left: 24px;
            padding-right: 24px;
          }

          .commitment-title {
            font-size: 38px !important;
          }

          .commitment-heading {
            font-size: 27px !important;
          }

          .commitment-description {
            font-size: 18px !important;
            line-height: 1.55 !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .commitment-animate,
          .commitment-item,
          .commitment-heading,
          .commitment-description {
            transition: none !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="
          commitment-section
          w-full
          overflow-hidden
          bg-[#090909]
          px-8
          py-[115px]
          text-white
        "
      >
        <div className="mx-auto max-w-[1440px]">

          {/* Main Heading */}
          <h2
            className="
              commitment-animate
              commitment-title
              mb-[42px]
              text-center
              text-[46px]
              font-bold
              leading-none
              tracking-[-1.5px]
              text-[#f4c900]
            "
          >
            Our Commitment
          </h2>

          {/* Content */}
          <div
            className="
              commitment-grid
              mx-auto
              grid
              max-w-[1440px]
              grid-cols-2
              gap-[105px]
            "
          >
            {/* Left */}
            <div
              className="
                commitment-animate
                commitment-item-1
                commitment-item
              "
            >
              <h3
                className="
                  commitment-heading
                  mb-[25px]
                  text-[30px]
                  font-medium
                  leading-none
                  tracking-[-0.7px]
                  text-[#ffd000]
                "
              >
                Uncompromising Excellence
              </h3>

              <p
                className="
                  commitment-description
                  max-w-[670px]
                  text-[20px]
                  font-medium
                  leading-[1.55]
                  tracking-[-0.15px]
                  text-[#cfcfcf]
                "
              >
                Classic Bridal Studio combines state-of-the-art facilities
                with meticulous attention to detail. Our opulent interiors
                and premium beauty products create an atmosphere of pure
                indulgence, while our highly skilled professionals ensure
                every service exceeds expectations.
              </p>
            </div>

            {/* Right */}
            <div
              className="
                commitment-animate
                commitment-item-2
                commitment-item
              "
            >
              <h3
                className="
                  commitment-heading
                  mb-[25px]
                  text-[30px]
                  font-medium
                  leading-none
                  tracking-[-0.7px]
                  text-[#ffd000]
                "
              >
                Complete Bridal Solutions
              </h3>

              <p
                className="
                  commitment-description
                  max-w-[690px]
                  text-[20px]
                  font-medium
                  leading-[1.55]
                  tracking-[-0.15px]
                  text-[#cfcfcf]
                "
              >
                Offering a comprehensive range of services from traditional
                to contemporary styles, we focus on creating looks that
                empower. Our client-centric approach ensures each bride
                receives undivided attention and personalized care throughout
                her journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}