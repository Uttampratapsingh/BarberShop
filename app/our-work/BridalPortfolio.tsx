"use client";

import { useState } from "react";

type BridalCard = {
  id: number;
  title: string;
  image: string;
};

const bridalCards: BridalCard[] = [
  {
    id: 1,
    title: "Luxe Bridal Collection",
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    title: "Luxe Bridal Collection",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    title: "Luxe Bridal Collection",
    image:
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&w=1200&q=85",
  },
];

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-11 w-11 sm:h-12 sm:w-12"
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

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-6 w-6 transition-all duration-300 ${
        filled ? "scale-110" : "scale-100"
      }`}
      fill={filled ? "currentColor" : "none"}
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

export default function BridalPortfolio() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080400] px-5 py-14 sm:px-8 md:px-12 lg:px-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050505_0%,#080400_60%,#130900_100%)]" />

        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#d49b00]/[0.025] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1515px]">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center">
          <div className="mb-6 animate-[float_3s_ease-in-out_infinite] text-[#ffd21a]">
            <EyeIcon />
          </div>

          <h2 className="text-center text-[44px] font-extrabold leading-none tracking-[-0.045em] text-[#ffd21a] sm:text-[52px] md:text-[58px] lg:text-[62px]">
            Bridal Portfolio
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3 xl:gap-9">
          {bridalCards.map((card) => {
            const isFavorite = favorites.includes(card.id);

            return (
              <article
                key={card.id}
                className="group relative h-[460px] overflow-hidden rounded-[18px] border border-white/[0.06] bg-[#16100a] shadow-[0_25px_70px_rgba(0,0,0,0.35)] transition-all duration-500 ease-out hover:-translate-y-3 hover:border-[#ffd21a]/20 hover:shadow-[0_35px_90px_rgba(0,0,0,0.55)] sm:h-[500px]"
              >
                {/* Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.08]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-black/10 transition-all duration-500 group-hover:bg-black/0" />

                {/* Bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-black via-black/80 to-transparent" />

                {/* Heart */}
                <button
                  type="button"
                  aria-label={
                    isFavorite ? "Remove from favorites" : "Add to favorites"
                  }
                  onClick={() => toggleFavorite(card.id)}
                  className="absolute right-5 top-5 z-20 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#685c45]/70 text-[#ffd21a] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#806d47]/80 active:scale-95"
                >
                  <HeartIcon filled={isFavorite} />
                </button>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-7">
                  <h3 className="text-[24px] font-bold leading-tight tracking-[-0.03em] text-[#fff4b8] transition-transform duration-500 group-hover:-translate-y-1 sm:text-[27px]">
                    {card.title}
                  </h3>
                </div>

                {/* Hover border */}
                <div className="pointer-events-none absolute inset-0 rounded-[18px] border border-[#ffd21a]/0 transition-all duration-500 group-hover:border-[#ffd21a]/30" />
              </article>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
}