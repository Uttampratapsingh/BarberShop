"use client";
import React, { useEffect, useRef } from "react";

export default function TransformationCTA() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll(".cta-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cta-visible");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* =========================================
           INITIAL ANIMATION
        ========================================= */

        .cta-animate {
          opacity: 0;
          transform: translateY(45px);
          transition:
            opacity 0.9s ease,
            transform 0.9s cubic-bezier(.22, 1, .36, 1);
        }

        .cta-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .cta-card {
          transition:
            transform 0.6s cubic-bezier(.22, 1, .36, 1),
            border-color 0.4s ease,
            box-shadow 0.6s ease,
            background-color 0.4s ease;
        }

        .cta-card:hover {
          transform: translateY(-7px);
          border-color: rgba(255, 210, 0, 0.7);
          box-shadow:
            0 25px 70px rgba(0, 0, 0, 0.75),
            0 0 35px rgba(255, 210, 0, 0.08);
          background-color: rgba(0, 0, 0, 0.82);
        }

        /* =========================================
           BACKGROUND IMAGE
        ========================================= */

        .cta-background {
          transform: scale(1.02);
          transition:
            transform 2s cubic-bezier(.22, 1, .36, 1),
            filter 1.2s ease;
        }

        .cta-section:hover .cta-background {
          transform: scale(1.055);
          filter: brightness(1.08);
        }

        /* =========================================
           GOLD TITLE
        ========================================= */

        .cta-title {
          transition:
            transform 0.45s ease,
            text-shadow 0.45s ease;
        }

        .cta-card:hover .cta-title {
          transform: translateY(-3px);
          text-shadow:
            0 0 12px rgba(255, 210, 0, 0.22),
            0 0 30px rgba(255, 210, 0, 0.08);
        }

        /* =========================================
           DESCRIPTION
        ========================================= */

        .cta-description {
          transition:
            color 0.4s ease,
            transform 0.4s ease;
        }

        .cta-card:hover .cta-description {
          color: #eeeeee;
          transform: translateY(-2px);
        }

        /* =========================================
           BUTTON BASE
        ========================================= */

        .cta-button {
          position: relative;
          overflow: hidden;
          transition:
            transform 0.35s cubic-bezier(.22, 1, .36, 1),
            box-shadow 0.35s ease,
            background-color 0.35s ease,
            color 0.35s ease,
            border-color 0.35s ease;
        }

        .cta-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 70%;
          height: 100%;
          transform: skewX(-20deg);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.28),
            transparent
          );
          transition: left 0.7s ease;
        }

        .cta-button:hover::before {
          left: 150%;
        }

        .cta-button:hover {
          transform: translateY(-4px);
        }

        /* =========================================
           CALL BUTTON
        ========================================= */

        .call-button:hover {
          background: #f5d34c;
          box-shadow:
            0 10px 30px rgba(255, 210, 0, 0.2);
        }

        /* =========================================
           EMAIL BUTTON
        ========================================= */

        .email-button:hover {
          background: #ffd200;
          color: #050505;
          border-color: #ffd200;
          box-shadow:
            0 10px 30px rgba(255, 210, 0, 0.2);
        }

        /* =========================================
           ICON ANIMATION
        ========================================= */

        .cta-icon {
          transition:
            transform 0.4s cubic-bezier(.22, 1, .36, 1);
        }

        .cta-button:hover .cta-icon {
          transform: scale(1.18) rotate(-7deg);
        }

        /* =========================================
           RESPONSIVE
        ========================================= */

        @media (max-width: 900px) {
          .cta-card {
            width: min(90%, 760px);
          }

          .cta-title {
            font-size: 52px !important;
          }
        }

        @media (max-width: 640px) {
          .cta-section {
            min-height: 700px !important;
            padding: 40px 20px !important;
          }

          .cta-card {
            width: 100%;
            padding: 45px 24px !important;
          }

          .cta-title {
            font-size: 40px !important;
            line-height: 1.05 !important;
          }

          .cta-description {
            font-size: 18px !important;
            line-height: 1.5 !important;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .cta-button {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cta-animate,
          .cta-card,
          .cta-background,
          .cta-title,
          .cta-description,
          .cta-button,
          .cta-icon {
            transition: none !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="
          cta-section
          relative
          flex
          min-h-[764px]
          w-full
          items-center
          justify-center
          overflow-hidden
          bg-black
          px-6
          py-20
        "
      >
        {/* =========================================
            BACKGROUND IMAGE
        ========================================= */}

        <img
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=2200&q=90"
          alt=""
          className="
            cta-background
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* Dark overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/70
          "
        />

        {/* Extra cinematic gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/85
            via-black/55
            to-black/80
          "
        />

        {/* =========================================
            CENTER CARD
        ========================================= */}

        <div
          className="
            cta-animate
            cta-card
            relative
            z-10
            w-[770px]
            max-w-full
            rounded-[20px]
            border
            border-[#4f4200]
            bg-black/75
            px-[58px]
            py-[60px]
            text-center
            backdrop-blur-[3px]
          "
        >
          {/* subtle inner glow */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[20px]
              bg-gradient-to-b
              from-yellow-400/[0.025]
              via-transparent
              to-transparent
            "
          />

          <div className="relative z-10">

            {/* =====================================
                TITLE
            ===================================== */}

            <h2
              className="
                cta-title
                mx-auto
                max-w-[600px]
                text-[58px]
                font-bold
                leading-[1]
                tracking-[-2px]
                text-[#f4c400]
              "
            >
              Begin Your
              <br />
              Transformation
            </h2>

            {/* =====================================
                DESCRIPTION
            ===================================== */}

            <p
              className="
                cta-description
                mx-auto
                mt-[34px]
                max-w-[650px]
                text-[22px]
                font-medium
                leading-[1.55]
                text-[#d7d7d7]
              "
            >
              Experience the Classic Bridal difference with our personalized
              consultation
            </p>

            {/* =====================================
                BUTTONS
            ===================================== */}

            <div
              className="
                cta-buttons
                mt-[42px]
                flex
                items-center
                justify-center
                gap-[19px]
              "
            >
              {/* CALL NOW */}
              <a
                href="tel:+919781265400"
                className="
                  cta-button
                  call-button
                  flex
                  h-[70px]
                  w-[315px]
                  items-center
                  justify-center
                  gap-3
                  rounded-[10px]
                  bg-[#e2bd35]
                  px-6
                  text-[20px]
                  font-bold
                  text-black
                "
              >
                <svg
                  className="cta-icon h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
                </svg>

                <span>Call Now</span>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:rajjpal33@gmail.com"
                className="
                  cta-button
                  email-button
                  flex
                  h-[70px]
                  w-[315px]
                  items-center
                  justify-center
                  gap-3
                  rounded-[10px]
                  border-2
                  border-[#dcb900]
                  bg-transparent
                  px-6
                  text-[20px]
                  font-bold
                  text-[#ffd200]
                "
              >
                <svg
                  className="cta-icon h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 3 1.9 5.8H20l-4.9 3.6 1.9 5.8-5-3.5-5 3.5 1.9-5.8L4 8.8h6.1L12 3Z" />
                </svg>

                <span>Email Inquiry</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom subtle vignette */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-40
            bg-gradient-to-t
            from-black
            to-transparent
          "
        />
      </section>
    </>
  );
}