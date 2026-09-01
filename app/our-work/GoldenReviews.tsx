"use client";

import { useEffect, useState } from "react";

type Review = {
  id: number;
  name: string;
  role: string;
  review: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Jasjit Kaur",
    role: "Our Client",
    review:
      "Best service ever I got!! They made my day so special, I am so thankful to Aman Di who went above and beyond 🙏 I highly recommend her for your wedding days and other services! I never leave any kind of Reviews but I am just so impressed!!",
  },
  {
    id: 2,
    name: "Jhanvi Sharma",
    role: "Our Client",
    review:
      "The ma'am that did the makeup is very professional and very friendly! She did an awesome job... Also, I loved her services!! Probably the best salon to visit in Garhshankar according to me 😍",
  },
];

function MessageIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className="h-[48px] w-[48px]"
      stroke="currentColor"
      strokeWidth="4"
    >
      <path
        d="M15 45L13 54L23 49C27 51 31 52 35 52C47 52 56 43 56 31C56 19 47 10 35 10C23 10 14 19 14 31C14 36 15 40 18 44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[23px] w-[23px]"
      fill="none"
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

export default function GoldenReviews() {
  const [visible, setVisible] = useState(false);
  const [liked, setLiked] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleLike = (id: number) => {
    setLiked((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#090502] px-5 py-[72px] sm:px-8 md:px-12 lg:px-[10.3%]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#080402_0%,#0a0502_100%)]" />

        <div className="absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#d69a00]/[0.025] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px]">
        {/* Header */}
        <div
          className={`mb-[78px] flex flex-col items-center transition-all duration-1000 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <div className="mb-[38px] animate-[messageFloat_3s_ease-in-out_infinite] text-[#ffd21a]">
            <MessageIcon />
          </div>

          <h2 className="text-center text-[42px] font-extrabold leading-none tracking-[-0.045em] text-[#ffd21a] sm:text-[48px] md:text-[54px] lg:text-[58px]">
            Golden Reviews
          </h2>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-10">
          {reviews.map((review, index) => {
            const isLiked = liked.includes(review.id);

            return (
              <article
                key={review.id}
                className={`group relative min-h-[305px] overflow-hidden rounded-[19px] border border-[#5f3808]/60 bg-[#211205] px-[39px] py-[39px] shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[#a9670c]/70 hover:bg-[#271506] hover:shadow-[0_28px_70px_rgba(0,0,0,0.35)] ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 180}ms`,
                }}
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-[19px] bg-[radial-gradient(circle_at_20%_20%,rgba(255,196,0,0.05),transparent_35%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Header row */}
                <div className="relative z-10 flex items-center gap-[21px]">
                  {/* Heart */}
                  <button
                    type="button"
                    onClick={() => toggleLike(review.id)}
                    aria-label={
                      isLiked
                        ? `Unlike ${review.name}`
                        : `Like ${review.name}`
                    }
                    className={`flex h-[61px] w-[61px] shrink-0 items-center justify-center rounded-full bg-[#48320a] text-[#ffd21a] transition-all duration-300 hover:scale-110 hover:bg-[#59400d] active:scale-95 ${
                      isLiked ? "bg-[#59400d]" : ""
                    }`}
                  >
                    <span
                      className={`transition-transform duration-300 ${
                        isLiked ? "scale-110" : "scale-100"
                      }`}
                    >
                      <HeartIcon />
                    </span>
                  </button>

                  {/* User */}
                  <div>
                    <h3 className="text-[23px] font-bold leading-[1.1] tracking-[-0.025em] text-[#fff8dc]">
                      {review.name}
                    </h3>

                    <p className="mt-[7px] text-[18px] font-medium leading-none text-[#ffd21a]">
                      {review.role}
                    </p>
                  </div>
                </div>

                {/* Review text */}
                <p className="relative z-10 mt-[39px] max-w-[800px] text-[18px] font-medium leading-[1.72] tracking-[-0.01em] text-[#ffed9a] sm:text-[19px]">
                  {review.review}
                </p>

                {/* Bottom golden glow */}
                <div className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-0 bg-[#ffd21a]/60 transition-all duration-700 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes messageFloat {
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