"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Work", href: "/our-work" },
  { label: "Services", href: "/services" },
  { label: "Courses", href: "/courses" },
  { label: "Contact Us", href: "/contact-us" },
  // { label: "Verify Student", href: "/verify-student" }
];

function LogoMark() {
  return (
    <svg
      aria-label="Classic Bridal Studio"
      className="h-[76px] w-[140px] shrink-0 md:h-[92px] md:w-[170px]"
      viewBox="0 0 520 320"
      role="img"
    >
      <defs>
        <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff1a8" />
          <stop offset="45%" stopColor="#f6c90e" />
          <stop offset="100%" stopColor="#b88a05" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#logoGold)" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M132 118c18-28 45-46 88-52 34-5 76-2 107 9 29 10 58 29 79 54"
          strokeWidth="8"
        />
        <path d="M146 116c-32 1-54 15-72 39 28 5 56 10 84 16" strokeWidth="7" />
        <path d="M382 116c32 1 54 15 72 39-28 5-56 10-84 16" strokeWidth="7" />
        <path d="M126 171c-20 18-30 37-33 60" strokeWidth="6" />
        <path d="M394 171c20 18 30 37 33 60" strokeWidth="6" />
        <path d="M91 226h338" strokeWidth="6" />
      </g>

      <g>
        <circle cx="259" cy="126" r="55" fill="none" stroke="url(#logoGold)" strokeWidth="9" />
        <circle cx="259" cy="126" r="41" fill="#080808" stroke="url(#logoGold)" strokeWidth="5" />
        <text
          x="259"
          y="136"
          fill="#f6c90e"
          fontFamily="Georgia, serif"
          fontSize="34"
          fontWeight="700"
          textAnchor="middle"
        >
          CBS
        </text>
        <path
          d="M259 53l7 19 20 1-16 11 6 19-17-11-17 11 6-19-16-11 20-1z"
          fill="url(#logoGold)"
        />
      </g>

      <text
        x="259"
        y="228"
        fill="#ffffff"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="24"
        fontWeight="800"
        letterSpacing="1.4"
        textAnchor="middle"
      >
        CLASSIC BRIDAL STUDIO
      </text>
      <text
        x="259"
        y="252"
        fill="#f6c90e"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="13"
        fontWeight="700"
        letterSpacing="3.2"
        textAnchor="middle"
      >
        SALON & ACADEMY
      </text>
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  // close mobile nav when route changes
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="relative mx-auto flex h-[60px] sm:h-[70px] md:h-[80px] w-full max-w-[1920px] items-center gap-6 px-4 sm:px-10 lg:px-16 xl:px-20">
        <Link
          href="/"
          aria-label="Classic Bridal Studio home"
          className="z-10 shrink-0 transition duration-200 hover:opacity-90 active:scale-95"
        >
          <LogoMark />
        </Link>

        <nav className="hidden md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:flex w-full max-w-[980px] justify-center gap-6 overflow-x-auto hide-scrollbar px-2 sm:gap-6 md:gap-8 lg:gap-10">
          {navItems.map(({ label, href }) => {
            const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                className={`group nav-link relative whitespace-nowrap px-2 py-2 text-[12px] font-semibold tracking-wide ease-out active:translate-y-px sm:text-[14px] lg:text-[15px] ${
                  isActive ? "text-[#f7cc18]" : "text-[#d2d6dd] hover:text-[#f7cc18]"
                }`}
              >
                {label}
                <span
                  className={`nav-underline absolute inset-x-0 -bottom-1 mx-auto h-[2px] rounded-full bg-[#f7cc18] ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="md:hidden z-20 inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#f7cc18]"
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6l12 12" stroke="#F7CC18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="#F7CC18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>

          <a
            className="call-button hidden md:inline-flex z-10 inline-flex shrink-0 items-center gap-3 rounded-full bg-[#f4be14] px-5 py-3 text-[16px] font-semibold text-black shadow-call transition duration-200 hover:-translate-y-0.5 hover:bg-[#f7c71a] active:translate-y-px active:scale-95"
            href="tel:+919781265400"
          >
            <span aria-hidden="true" className="text-[19px] leading-none">
              ☎
            </span>
            Call Us
            <span aria-hidden="true" className="call-bubble bubble-one" />
            <span aria-hidden="true" className="call-bubble bubble-two" />
            <span aria-hidden="true" className="call-bubble bubble-three" />
            <span aria-hidden="true" className="call-bubble bubble-four" />
          </a>
        </div>
      </div>

      {/* Mobile drawer: full-screen split layout */}
      <div className={`md:hidden ${open ? "fixed" : "hidden"} inset-0 z-40`}> 
        {/* dim backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        <div className="relative z-50 flex h-full">
          {/* Left column with logo and subtle divider */}
          <div className="w-2/5 min-w-[160px] max-w-[320px] bg-black flex items-start justify-center border-r border-[#3b2b06]">
            <div className="p-6">
              <div className="bg-[rgba(255,255,255,0.02)] p-4 rounded transform scale-110">
                <LogoMark />
              </div>
            </div>
          </div>

          {/* Right panel with nav items */}
          <div className="flex-1 bg-black p-6 sm:p-10 text-white relative overflow-auto">
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute right-6 top-6 inline-flex items-center justify-center rounded-full p-2 text-[#f7cc18] hover:text-white"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6l12 12" stroke="#F7CC18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <nav className="mt-12 flex flex-col gap-6 pr-4">
              {navItems.map(({ label, href }) => {
                const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-6 py-5 text-[22px] font-semibold ${
                      isActive ? "bg-[rgba(247,204,24,0.08)] text-[#f7cc18]" : "text-[#d2d6dd] hover:text-[#f7cc18]"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-8 border-t border-white/6 pt-6">
              <a
                href="tel:+919781265400"
                className="call-button inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#f4be14] px-6 py-4 text-[18px] font-semibold text-black"
              >
                <span aria-hidden>☎</span>
                Call Us
                <span aria-hidden="true" className="call-bubble bubble-one" />
                <span aria-hidden="true" className="call-bubble bubble-two" />
                <span aria-hidden="true" className="call-bubble bubble-three" />
                <span aria-hidden="true" className="call-bubble bubble-four" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .call-button {
          position: relative;
          overflow: visible;
        }

        .call-bubble {
          position: absolute;
          bottom: calc(100% - 3px);
          left: 50%;
          z-index: 2;
          width: 4px;
          height: 4px;
          border-radius: 999px;
          background: #fff4a8;
          box-shadow: 0 0 8px rgba(255, 244, 168, 0.9);
          pointer-events: none;
          opacity: 0;
          animation: callBubbleRise 2.8s ease-out infinite;
        }

        .bubble-one {
          margin-left: -30px;
          animation-delay: 0s;
        }

        .bubble-two {
          width: 3px;
          height: 3px;
          margin-left: -8px;
          animation-delay: 0.7s;
        }

        .bubble-three {
          width: 5px;
          height: 5px;
          margin-left: 14px;
          animation-delay: 1.35s;
        }

        .bubble-four {
          width: 3px;
          height: 3px;
          margin-left: 32px;
          animation-delay: 2s;
        }

        @keyframes callBubbleRise {
          0% {
            opacity: 0;
            transform: translate3d(0, 8px, 0) scale(0.45);
          }
          15% {
            opacity: 0.95;
          }
          100% {
            opacity: 0;
            transform: translate3d(var(--bubble-drift, 0px), -48px, 0) scale(1.15);
          }
        }

        .bubble-one {
          --bubble-drift: -10px;
        }

        .bubble-two {
          --bubble-drift: -4px;
        }

        .bubble-three {
          --bubble-drift: 6px;
        }

        .bubble-four {
          --bubble-drift: 12px;
        }

        @media (prefers-reduced-motion: reduce) {
          .call-bubble {
            animation: none;
          }
        }
      `}</style>
    </header>
  );
}
