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
    <img
      src="/r11.jpeg"
      alt="Classic Bridal Studio"
      className="h-[76px] w-[140px] shrink-0 object-contain md:h-[70px] md:w-[170px] ml-[-20px] md:ml-[-50px]"
    />
  );
}

export default function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  // close mobile nav when route changes
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBD4]">
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
                  isActive ? "text-[#C05800]" : "text-[#38240D] hover:text-[#C05800]"
                }`}
              >
                {label}
                <span
                  className={`nav-underline absolute inset-x-0 -bottom-1 mx-auto h-[2px] rounded-full bg-[#C05800] ${
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
            className="md:hidden z-20 inline-flex items-center justify-center rounded-md p-2 text-[#38240D]/90 hover:text-[#38240D] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C05800]"
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6l12 12" stroke="#C05800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="#C05800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>

          <a
            className="call-button hidden md:inline-flex z-10 inline-flex shrink-0 items-center gap-3 rounded-full bg-[#C05800] px-5 py-3 text-[16px] font-semibold text-[#FDFBD4] shadow-call transition duration-200 hover:-translate-y-0.5 hover:bg-[#713600] active:translate-y-px active:scale-95"
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
          className="absolute inset-0 bg-[#713600]/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        <div className="relative z-50 flex h-full">
          {/* Left column with logo and subtle divider */}
          <div className="w-2/5 min-w-[160px] max-w-[320px] bg-[#713600] flex items-start justify-center border-r border-[#C05800]">
            <div className="p-6">
              <div className="bg-[rgba(253,251,212,0.02)] p-4 rounded transform scale-110">
                <LogoMark />
              </div>
            </div>
          </div>

          {/* Right panel with nav items */}
          <div className="flex-1 bg-[#713600] p-6 sm:p-10 text-[#FDFBD4] relative overflow-auto">
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute right-6 top-6 inline-flex items-center justify-center rounded-full p-2 text-[#C05800] hover:text-[#FDFBD4]"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6l12 12" stroke="#C05800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                      isActive ? "bg-[rgba(192,88,0,0.08)] text-[#C05800]" : "text-[#E8D98A] hover:text-[#C05800]"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-8 border-t border-[#FDFBD4]/[6] pt-6">
              <a
                href="tel:+919781265400"
                className="call-button inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#C05800] px-6 py-4 text-[18px] font-semibold text-[#FDFBD4]"
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
          background: #F3E9B0;
          box-shadow: 0 0 8px rgba(243, 233, 176, 0.9);
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
