"use client";
import React, { useEffect, useRef } from "react";

const cards = [
  {
    title: "Transformative Beauty",
    description:
      "Specializing in complete bridal transformations since 2016",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=90",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-11 w-11"
      >
        <path d="m12 2 2.9 6.1L21.5 9l-4.7 4.6 1.1 6.5L12 17l-5.9 3.1 1.1-6.5L2.5 9l6.6-.9L12 2Z" />
      </svg>
    ),
  },
  {
    title: "Luxury Experience",
    description:
      "State-of-the-art facilities with premium beauty products",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=90",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-11 w-11"
      >
        <path d="M12 3 19 6v5c0 4.8-3 8.2-7 10-4-1.8-7-5.2-7-10V6l7-3Z" />
      </svg>
    ),
  },
  {
    title: "Personalized Care",
    description:
      "Tailored services matching individual style preferences",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=90",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-11 w-11"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <path d="M8.5 9.5h.01M15.5 9.5h.01" />
      </svg>
    ),
  },
];

export default function BeautyFeatures() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const cards = section.querySelectorAll(".beauty-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .beauty-card {
          opacity: 0;
          transform: translateY(55px);
          transition:
            opacity 0.8s ease,
            transform 0.8s cubic-bezier(.22,1,.36,1);
        }

        .beauty-card:nth-child(1) {
          transition-delay: 0.05s;
        }

        .beauty-card:nth-child(2) {
          transition-delay: 0.18s;
        }

        .beauty-card:nth-child(3) {
          transition-delay: 0.31s;
        }

        .beauty-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .beauty-card-inner {
          transition:
            transform 0.55s cubic-bezier(.22,1,.36,1),
            border-color 0.4s ease,
            box-shadow 0.5s ease;
        }

        .beauty-card:hover .beauty-card-inner {
          transform: translateY(-8px);
          border-color: rgba(255, 214, 0, 0.85);
          box-shadow:
            0 20px 50px rgba(0, 0, 0, 0.7),
            0 0 25px rgba(255, 210, 0, 0.12);
        }

        .beauty-card-image {
          transition:
            transform 0.9s cubic-bezier(.22,1,.36,1),
            filter 0.6s ease;
        }

        .beauty-card:hover .beauty-card-image {
          transform: scale(1.08);
          filter: brightness(1.08);
        }

        .beauty-card-overlay {
          transition: opacity 0.5s ease;
        }

        .beauty-card:hover .beauty-card-overlay {
          opacity: 0.82;
        }

        .beauty-icon {
          transition:
            transform 0.5s cubic-bezier(.22,1,.36,1),
            filter 0.4s ease;
        }

        .beauty-card:hover .beauty-icon {
          transform: translateY(-5px) rotate(-6deg) scale(1.08);
          filter: drop-shadow(0 0 8px rgba(255, 214, 0, 0.45));
        }

        .beauty-title {
          transition:
            transform 0.4s ease,
            text-shadow 0.4s ease;
        }

        .beauty-card:hover .beauty-title {
          transform: translateX(3px);
          text-shadow: 0 0 15px rgba(255, 214, 0, 0.3);
        }

        .beauty-description {
          transition: color 0.4s ease;
        }

        .beauty-card:hover .beauty-description {
          color: rgba(255, 235, 80, 0.95);
        }

        @media (max-width: 1024px) {
          .beauty-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .beauty-grid {
            grid-template-columns: 1fr;
          }

          .beauty-card-inner {
            min-height: 430px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .beauty-card,
          .beauty-card-inner,
          .beauty-card-image,
          .beauty-icon,
          .beauty-title {
            transition: none !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="w-full overflow-hidden bg-black px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-[1170px]">
          <div className="beauty-grid grid grid-cols-3 gap-10">
            {cards.map((card, index) => (
              <article key={index} className="beauty-card">
                <div
                  className="
                    beauty-card-inner
                    group
                    relative
                    min-h-[490px]
                    overflow-hidden
                    rounded-[14px]
                    border
                    border-[#4a3d00]
                    bg-black
                  "
                >
                  {/* Background Image */}
                  <img
                    src={card.image}
                    alt=""
                    className="
                      beauty-card-image
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                    "
                  />

                  {/* Dark overlay */}
                  <div
                    className="
                      beauty-card-overlay
                      absolute
                      inset-0
                      bg-black/45
                    "
                  />

                  {/* Bottom gradient */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black
                      via-black/55
                      to-black/10
                    "
                  />

                  {/* Content */}
                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      z-10
                      px-8
                      pb-8
                    "
                  >
                    <div
                      className="
                        beauty-icon
                        mb-5
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        text-[#ffd600]
                      "
                    >
                      {card.icon}
                    </div>

                    <h3
                      className="
                        beauty-title
                        mb-3
                        text-[30px]
                        font-bold
                        leading-[1.05]
                        tracking-[-0.8px]
                        text-[#ffd600]
                      "
                    >
                      {card.title}
                    </h3>

                    <p
                      className="
                        beauty-description
                        max-w-[390px]
                        text-[20px]
                        font-medium
                        leading-[1.4]
                        text-[#ffd600]
                      "
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* Subtle hover shine */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-20
                      -translate-x-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/[0.06]
                      to-transparent
                      transition-transform
                      duration-1000
                      group-hover:translate-x-full
                    "
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}