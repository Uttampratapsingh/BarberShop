"use client";

import React from "react";

const AboutLegacy = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#713600]">
            {/* Background video */}
            <video
                className="absolute inset-0 h-full w-full object-contain brightness-[0.42] md:object-cover"
                src="/r3.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden="true"
            />

            <div
                className="pointer-events-none absolute inset-0 z-[1]"
                style={{ backgroundColor: "rgba(56, 36, 13, 0.28)" }}
            />

            {/* Dark cinematic overlay */}
            {/* <div className="absolute inset-0 bg-[#713600]/70" /> */}

            {/* Additional gradient */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/90" /> */}

            {/* Subtle gold ambient glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C05800]/5 blur-[130px]" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center px-6 text-center pt-[72px] sm:pt-[88px] md:pt-[120px]">
                <div className="about-legacy-content">

                    {/* Heading */}
                    <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-[#FDFBD4] sm:text-6xl md:text-7xl lg:text-[76px]">
                        About Our Legacy
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-5 text-2xl font-medium text-[#FDFBD4] opacity-70 sm:text-3xl md:text-4xl">
                        Redefining bridal excellence since 2016
                    </p>

                    {/* Button */}
                    <a href="tel:+919781265400" aria-label="Call to book a free consultation" className="legacy-button group mt-12 inline-flex items-center gap-3 rounded-lg border border-[#C05800] bg-[#C05800] px-8 py-4 text-lg font-bold text-[#FDFBD4] shadow-[0_8px_30px_rgba(192, 88, 0, 0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#713600] hover:shadow-[0_0_35px_rgba(192, 88, 0, 0.5)]">
                        
                        {/* Chat icon */}
                        <svg
                            viewBox="0 0 24 24"
                            className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5 8.5 8.5 0 0 1 8.7 3.9 8.38 8.38 0 0 1 12.5 3h.5a8.5 8.5 0 0 1 8 8v.5Z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <span>Book Free Consultation</span>
                    </a>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />

            <style>{`
                @keyframes legacyFadeUp {
                    0% {
                        opacity: 0;
                        transform: translateY(40px);
                    }

                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .about-legacy-content {
                    opacity: 0;
                    animation: legacyFadeUp 1s ease-out 0.15s forwards;
                }

                .about-legacy-content h1,
                .about-legacy-content p {
                    color: #FDFBD4 !important;
                }

                .about-legacy-content p {
                    opacity: 0.7;
                }
            `}</style>
        </section>
    );
};

export default AboutLegacy;