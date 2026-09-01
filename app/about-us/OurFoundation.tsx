"use client";

import React from "react";

const OurFoundation = () => {
    return (
        <section className="relative w-full overflow-hidden bg-black px-5 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            {/* Background */}
            <div
                className="pointer-events-none absolute inset-0 opacity-20"
                
            />

            {/* Ambient gold glow */}
            <div className="pointer-events-none absolute left-[35%] top-1/2 h-[450px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-[140px]" />

            <div className="relative z-10 mx-auto max-w-[1450px]">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-16">

                    {/* LEFT IMAGE */}
                    <div className="foundation-image group relative overflow-hidden rounded-2xl border border-[#D4AF37]/45 bg-black shadow-[0_0_30px_rgba(0,0,0,0.45)]">
                        <div className="relative h-[430px] sm:h-[500px] lg:h-[490px]">
                            <img
                                src="/bridal-2.png"
                                alt="Classic Bridal Studio"
                                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                            />

                            {/* Dark gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-black/5" />

                            {/* Hover gold tint */}
                            <div className="absolute inset-0 bg-[#D4AF37]/0 transition-all duration-700 group-hover:bg-[#D4AF37]/5" />

                            {/* Light sweep */}
                            <div className="foundation-shine pointer-events-none absolute inset-y-0 -left-[120%] w-[35%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                            {/* Bottom text */}
                            <div className="absolute bottom-7 left-7 z-10 sm:bottom-8 sm:left-8">
                                <h3 className="text-3xl font-bold text-[#FFD21F] transition-all duration-300 group-hover:text-[#FFE45C] sm:text-4xl">
                                    Since 2016
                                </h3>

                                <p className="mt-1 text-lg font-medium text-[#E4C51F] sm:text-xl">
                                    Pioneers in bridal transformation
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="foundation-content">

                        {/* Badge */}
                        <div className="mb-7">
                            <svg
                                viewBox="0 0 48 48"
                                className="h-12 w-12 text-[#D4AF37]"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.6"
                            >
                                <circle
                                    cx="24"
                                    cy="17"
                                    r="10"
                                />

                                <path
                                    d="M17 25L17.5 38L24 34L30.5 38L31 25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />

                                <path
                                    d="M24 2V6M9 7L12 10M39 7L36 10M4 17H8M40 17H44"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl font-bold leading-tight text-[#DDBA18] sm:text-5xl md:text-6xl">
                            Our Foundation
                        </h2>

                        {/* Description */}
                        <p className="mt-7 max-w-[760px] text-lg leading-relaxed text-gray-300 sm:text-xl">
                            Established in 2016 under the guidance of Mr. Pal Pabla
                            ( Owner of Oraane International Nawanshahr and Nangal ).
                            Mr. Tarandeep Singh, and Mrs. Amanpreet Kaur, Classic
                            Bridal Studio embarked on its journey. Mr. Tarandeep
                            Singh's entrepreneurial spirit and dedication have been
                            instrumental in evolving our studio into a leading brand
                            within the beauty and salon sector.
                        </p>

                        {/* Stats */}
                        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">

                            {/* Stat 1 */}
                            <div className="foundation-stat group rounded-xl border border-[#D4AF37]/25 bg-[#080808] px-5 py-6 text-center transition-all duration-400 hover:-translate-y-2 hover:border-[#D4AF37]/70 hover:bg-[#0D0D0D] hover:shadow-[0_15px_35px_rgba(212,175,55,0.10)]">
                                <div className="text-3xl font-bold text-[#FFD21F] transition-transform duration-300 group-hover:scale-105">
                                    Over 100
                                </div>

                                <div className="mt-1 text-base text-[#D4AF37] sm:text-lg">
                                    Brides
                                </div>
                            </div>

                            {/* Stat 2 */}
                            <div className="foundation-stat group rounded-xl border border-[#D4AF37]/25 bg-[#080808] px-5 py-6 text-center transition-all duration-400 hover:-translate-y-2 hover:border-[#D4AF37]/70 hover:bg-[#0D0D0D] hover:shadow-[0_15px_35px_rgba(212,175,55,0.10)]">
                                <div className="text-3xl font-bold text-[#FFD21F] transition-transform duration-300 group-hover:scale-105">
                                    Multiple
                                </div>

                                <div className="mt-1 text-base text-[#D4AF37] sm:text-lg">
                                    Awards
                                </div>
                            </div>

                            {/* Stat 3 */}
                            <div className="foundation-stat group rounded-xl border border-[#D4AF37]/25 bg-[#080808] px-5 py-6 text-center transition-all duration-400 hover:-translate-y-2 hover:border-[#D4AF37]/70 hover:bg-[#0D0D0D] hover:shadow-[0_15px_35px_rgba(212,175,55,0.10)]">
                                <div className="text-3xl font-bold text-[#FFD21F] transition-transform duration-300 group-hover:scale-105">
                                    Highly
                                </div>

                                <div className="mt-1 text-base text-[#D4AF37] sm:text-lg">
                                    Rated
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes foundationImageEnter {
                    from {
                        opacity: 0;
                        transform: translateX(-45px);
                    }

                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes foundationContentEnter {
                    from {
                        opacity: 0;
                        transform: translateX(45px);
                    }

                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .foundation-image {
                    opacity: 0;
                    animation: foundationImageEnter 0.9s ease-out forwards;
                }

                .foundation-content {
                    opacity: 0;
                    animation: foundationContentEnter 0.9s ease-out 0.15s forwards;
                }

                @keyframes foundationShine {
                    0% {
                        left: -120%;
                    }

                    100% {
                        left: 120%;
                    }
                }

                .foundation-image:hover .foundation-shine {
                    animation: foundationShine 1.2s ease;
                }
            `}</style>
        </section>
    );
};

export default OurFoundation;