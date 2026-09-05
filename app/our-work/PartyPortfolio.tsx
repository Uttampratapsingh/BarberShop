"use client";

import { useState } from "react";

type PortfolioCard = {
  id: number;
  title: string;
  image: string;
};

const portfolioCards: PortfolioCard[] = [
  {
    id: 1,
    title: "Luxe Party Collection",
    image:
      "/r8.jpeg",
  },
  {
    id: 2,
    title: "Luxe Party Collection",
    image:
      "/r9.jpeg",
  },
  {
    id: 3,
    title: "Luxe Party Collection",
    image:
      "/r10.jpeg",
  },
];

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-[42px] w-[42px] sm:h-[46px] sm:w-[46px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
    >
      <path
        d="M7 32C14 20 23 13 32 13s18 7 25 19c-7 12-16 19-25 19S14 44 7 32Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="32" r="8" />
    </svg>
  );
}

function HeartIcon({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-[28px] w-[28px] drop-shadow-[0_1px_2px_rgba(56, 36, 13, 0.7)] transition-all duration-300 ${
        active ? "scale-110 fill-current" : "fill-transparent"
      }`}
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PartyPortfolio() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#713600] px-5 py-12 sm:px-8 md:px-12 lg:px-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#713600_0%,#713600_72%,#38240D_100%)]" />

        <div className="absolute left-1/2 top-[-250px] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#C05800]/[0.025] blur-[150px]" />
      </div>

      <div className="our-work-rail relative z-10 mx-auto max-w-[1460px]">
        {/* Header */}
        <div className="mb-[72px] flex flex-col items-center">
          <div className="mb-6 animate-[float_3s_ease-in-out_infinite] text-[#38240D]">
            <EyeIcon />
          </div>

          <h2 className="text-center text-[42px] font-extrabold leading-none tracking-[-0.045em] text-[#38240D] sm:text-[50px] md:text-[56px] lg:text-[58px]">
            Party Portfolio
          </h2>
        </div>

        {/* Portfolio */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3 xl:gap-9">
          {portfolioCards.map((card) => {
            const isFavorite = favorites.includes(card.id);

            return (
              <article
                key={card.id}
                className="portfolio-card group relative h-[440px] overflow-hidden rounded-[18px] border border-[#FDFBD4]/[0.06] bg-[#8A4300] shadow-[0_20px_55px_rgba(56, 36, 13, 0.35)] transition-all duration-500 ease-out hover:-translate-y-[8px] hover:border-[#C05800]/25 hover:shadow-[0_30px_70px_rgba(56, 36, 13, 0.5)] sm:h-[465px] lg:h-[440px]"
              >
                {/* Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="portfolio-card-image absolute inset-0 z-0 h-full w-full object-cover object-center brightness-[0.82] saturate-[0.9] transition-all duration-1000 ease-out group-hover:scale-[1.08] group-hover:brightness-100 group-hover:saturate-100"
                />

                {/* Dark overlay */}
                <div className="portfolio-card-overlay absolute inset-0 z-[1] transition-opacity duration-700" />

                {/* Bottom fade */}
                <div className="portfolio-card-gradient absolute inset-x-0 bottom-0 z-[2] h-[48%]" />

                {/* Heart */}
                <button
                  type="button"
                  onClick={() => toggleFavorite(card.id)}
                  aria-label={
                    isFavorite ? "Remove from favorites" : "Add to favorites"
                  }
                  className="absolute right-[19px] top-[19px] z-20 flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#FDFBD4]/80 bg-[#FDFBD4]/90 text-[#C05800] shadow-[0_4px_16px_rgba(56, 36, 13, 0.6),0_0_14px_rgba(192,88,0,0.2)] backdrop-blur-[4px] transition-all duration-300 hover:scale-110 hover:bg-[#A85A1A] hover:shadow-[0_5px_20px_rgba(56, 36, 13, 0.7),0_0_18px_rgba(192,88,0,0.35)] active:scale-95"
                >
                  <HeartIcon active={isFavorite} />
                </button>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-[27px]">
                  <h3 className="text-[23px] font-bold leading-[1.1] tracking-[-0.035em] text-[#F3E9B0] transition-transform duration-500 group-hover:-translate-y-1 sm:text-[25px]">
                    {card.title}
                  </h3>
                </div>

                {/* Gold hover border */}
                <div className="pointer-events-none absolute inset-0 rounded-[18px] border border-transparent transition-all duration-500 group-hover:border-[#C05800]/30" />

                {/* Shine */}
                <div className="pointer-events-none absolute inset-y-0 -left-[120%] w-[55%] rotate-[12deg] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-all duration-[1200ms] ease-out group-hover:left-[140%]" />
              </article>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .portfolio-card-overlay {
          background: rgba(56, 36, 13, 0.1);
        }

        .portfolio-card:hover .portfolio-card-overlay {
          background: transparent;
        }

        .portfolio-card-gradient {
          background: linear-gradient(
            to top,
            rgba(56, 36, 13, 0.9),
            rgba(56, 36, 13, 0.75),
            transparent
          );
        }

        @keyframes partyFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </section>
  );
}