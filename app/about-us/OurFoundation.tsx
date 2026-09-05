"use client";

import React from "react";

const OurFoundation = () => {
    return (
        <section className="our-foundation relative w-full overflow-hidden bg-[#713600] px-5 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            {/* Background */}
            <div
                className="pointer-events-none absolute inset-0 opacity-20"
                
            />

            {/* Ambient gold glow */}
            <div className="pointer-events-none absolute left-[35%] top-1/2 h-[450px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C05800]/5 blur-[140px]" />

            <div className="relative z-10 mx-auto max-w-[1450px]">
                <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-20">

                    {/* LEFT COLUMN: IMAGE AND STATS */}
                    <div className="flex h-full flex-col gap-6">
                        <div className="foundation-image group relative overflow-hidden rounded-2xl border border-[#C05800]/45 bg-[#713600] shadow-[0_0_30px_rgba(56, 36, 13, 0.45)]">
                            <div className="relative aspect-[4/5] min-h-[420px] sm:min-h-[500px] lg:aspect-auto lg:h-[560px]">
                                <img
                                    src="/r4.jpeg"
                                    alt="Classic Bridal Studio"
                                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-black/5" />
                                <div className="absolute inset-0 bg-[#C05800]/0 transition-all duration-700 group-hover:bg-[#C05800]/5" />
                                <div className="foundation-shine pointer-events-none absolute inset-y-0 -left-[120%] w-[35%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                <div className="absolute bottom-7 left-7 z-10 sm:bottom-8 sm:left-8">
                                    <h3 className="text-3xl font-bold text-[#FDFBD4] transition-all duration-300 group-hover:text-[#FDFBD4] sm:text-4xl">
                                        Since 2016
                                    </h3>
                                    <p className="mt-1 text-lg font-medium text-[#FDFBD4] sm:text-xl">
                                        Pioneers in bridal transformation
                                    </p>
                                </div>
                            </div>
                        </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex-1 lg:auto-rows-fr">
                        <div className="foundation-stat group rounded-xl border border-[#C05800]/25 bg-[#713600] px-4 py-5 text-center transition-all duration-400 hover:-translate-y-2 hover:border-[#C05800]/70 hover:bg-[#8A4300] hover:shadow-[0_15px_35px_rgba(192, 88, 0, 0.10)]">
                            <div className="text-2xl font-bold text-[#38240D] transition-transform duration-300 group-hover:scale-105 sm:text-3xl">
                                Over 100
                            </div>
                            <div className="mt-1 text-base text-[#38240D] sm:text-lg">Brides</div>
                        </div>

                        <div className="foundation-stat group rounded-xl border border-[#C05800]/25 bg-[#713600] px-4 py-5 text-center transition-all duration-400 hover:-translate-y-2 hover:border-[#C05800]/70 hover:bg-[#8A4300] hover:shadow-[0_15px_35px_rgba(192, 88, 0, 0.10)]">
                            <div className="text-2xl font-bold text-[#38240D] transition-transform duration-300 group-hover:scale-105 sm:text-3xl">
                                Multiple
                            </div>
                            <div className="mt-1 text-base text-[#38240D] sm:text-lg">Awards</div>
                        </div>

                        <div className="foundation-stat group rounded-xl border border-[#C05800]/25 bg-[#713600] px-4 py-5 text-center transition-all duration-400 hover:-translate-y-2 hover:border-[#C05800]/70 hover:bg-[#8A4300] hover:shadow-[0_15px_35px_rgba(192, 88, 0, 0.10)]">
                            <div className="text-2xl font-bold text-[#38240D] transition-transform duration-300 group-hover:scale-105 sm:text-3xl">
                                Highly
                            </div>
                            <div className="mt-1 text-base text-[#38240D] sm:text-lg">Rated</div>
                        </div>

                        <div className="foundation-stat group rounded-xl border border-[#C05800]/25 bg-[#713600] px-4 py-5 text-center transition-all duration-400 hover:-translate-y-2 hover:border-[#C05800]/70 hover:bg-[#8A4300] hover:shadow-[0_15px_35px_rgba(192, 88, 0, 0.10)]">
                            <div className="text-2xl font-bold text-[#38240D] transition-transform duration-300 group-hover:scale-105 sm:text-3xl">
                                Since 2016
                            </div>
                            <div className="mt-1 text-base text-[#38240D] sm:text-lg">In Beauty</div>
                        </div>
                    </div>
                    </div>

                    {/* RIGHT COLUMN: BADGE AND TEXT */}
                    <div className="foundation-content flex h-full flex-col">

                        {/* Badge */}
                        <div className="mb-5">
                            <svg
                                viewBox="0 0 48 48"
                                className="h-10 w-10 text-[#C05800] sm:h-12 sm:w-12"
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
                        <h2 className="text-4xl font-bold leading-tight text-[#38240D] sm:text-5xl md:text-6xl">
                            GSO Bridal Studio
                        </h2>

                        {/* Description */}
                        <div className="mt-6 max-w-[760px] space-y-5 text-base leading-relaxed text-[#6B4A2A] sm:text-lg">
                            <p>
                                At GSO Bridal Studio, we believe that every bride deserves to feel confident, beautiful, and truly herself on her special day.
                            </p>
                            <p>
                                Our journey is built on a passion for bridal beauty, makeup, styling, and personalized experiences. We focus on understanding every bride&apos;s individual personality, preferences, and vision to create a look that feels elegant, timeless, and uniquely hers.
                            </p>
                            <p>
                                From the first consultation to the final bridal look, our aim is to make every experience comfortable, memorable, and special. We pay attention to the little details because we believe that true beauty lies in the perfect balance of elegance, confidence, and individuality.
                            </p>
                            <div className="border-l-2 border-[#C05800]/60 pl-4 sm:pl-5">
                                <h3 className="text-2xl font-bold text-[#38240D] sm:text-3xl">Our Foundation</h3>
                                <p className="mt-2">Our foundation is based on three simple values:</p>
                                <p className="mt-2 font-semibold text-[#38240D]">Quality &bull; Personalization &bull; Trust</p>
                            </div>
                            <p>
                                We believe that bridal makeup is not just about creating a beautiful look; it is about creating a feeling that a bride will remember for years to come.
                            </p>
                            <p>
                                At GSO Bridal Studio, we continuously strive to bring together professional expertise, creativity, premium beauty practices, and a personal touch so that every bride can walk into her special moment with confidence and a smile. Your special day deserves a look as special as you are.
                            </p>
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

                .our-foundation .foundation-image h3,
                .our-foundation .foundation-image p {
                    color: #FDFBD4 !important;
                }
            `}</style>
        </section>
    );
};

export default OurFoundation;