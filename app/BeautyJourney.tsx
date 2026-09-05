"use client";

import React from "react";

const BeautyJourney = () => {
    return (
        <section className="relative w-full overflow-hidden bg-black px-5 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-20">

            {/* Main background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/bridal-background.webp')",
                }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/75" />

            {/* Gold tint */}
            {/* <div className="absolute inset-0 bg-[#6F5A16]/10" /> */}

            {/* Background texture */}
            <div
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                    backgroundImage: "url('/noise-texture.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {/* Ambient gold glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[900px] -translate-x-1/2 rounded-full bg-[#D4AF37]/5 blur-[130px]" />

            <div className="relative z-10 mx-auto max-w-[1310px]">

                {/* Feature columns */}
                <div className="grid grid-cols-1 gap-12 pb-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">

                    <div className="beauty-feature beauty-feature-1 group">
                        <div className="mb-10 h-[5px] w-[72px] rounded-full bg-[#FFD21F] transition-all duration-500 group-hover:w-[110px] group-hover:shadow-[0_0_15px_rgba(255,210,31,0.5)]" />

                        <h3 className="text-2xl font-bold text-[#FFD21F] transition-all duration-300 group-hover:text-[#FFE45C] sm:text-3xl">
                            Advanced Techniques
                        </h3>

                        <p className="mt-8 max-w-[430px] text-lg leading-relaxed text-gray-200 transition-all duration-300 group-hover:text-white">
                            Master cutting-edge methods including airbrush makeup, 3D nail art, and thermal hair designing
                        </p>
                    </div>

                    <div className="beauty-feature beauty-feature-2 group">
                        <div className="mb-10 h-[5px] w-[72px] rounded-full bg-[#FFD21F] transition-all duration-500 group-hover:w-[110px] group-hover:shadow-[0_0_15px_rgba(255,210,31,0.5)]" />

                        <h3 className="text-2xl font-bold text-[#FFD21F] transition-all duration-300 group-hover:text-[#FFE45C] sm:text-3xl">
                            Industry-Standard Tools
                        </h3>

                        <p className="mt-8 max-w-[430px] text-lg leading-relaxed text-gray-200 transition-all duration-300 group-hover:text-white">
                            Training with professional-grade products from leading brands
                        </p>
                    </div>

                    <div className="beauty-feature beauty-feature-3 group sm:col-span-2 lg:col-span-1">
                        <div className="mb-10 h-[5px] w-[72px] rounded-full bg-[#FFD21F] transition-all duration-500 group-hover:w-[110px] group-hover:shadow-[0_0_15px_rgba(255,210,31,0.5)]" />

                        <h3 className="text-2xl font-bold text-[#FFD21F] transition-all duration-300 group-hover:text-[#FFE45C] sm:text-3xl">
                            Portfolio Development
                        </h3>

                        <p className="mt-8 max-w-[430px] text-lg leading-relaxed text-gray-200 transition-all duration-300 group-hover:text-white">
                            Build professional portfolio with real bridal projects
                        </p>
                    </div>
                </div>

                {/* CTA Panel */}
                <div className="beauty-cta relative overflow-hidden rounded-2xl border border-[#D4AF37]/50 bg-black/60 p-5 shadow-[0_0_40px_rgba(0,0,0,0.45)] md:p-10 lg:p-12">

                    {/* Inner background image */}
                    <div
                        className="absolute inset-5 bg-cover bg-center bg-no-repeat md:inset-8"
                        style={{
                            backgroundImage: "url('/bridal-1.webp')",
                        }}
                    />

                    {/* Inner dark/gold overlay */}
                    <div className="absolute inset-5 bg-[#6A5618]/45 md:inset-8" />
                    <div className="absolute inset-5 bg-black/45 md:inset-8" />

                    {/* Animated glow */}
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD21F]/10 blur-[100px]" />

                    {/* CTA Content */}
                    <div className="relative z-10 flex min-h-[500px] flex-col items-center justify-center px-4 text-center md:min-h-[560px]">

                        <h2 className="text-4xl font-bold leading-tight text-[#FFD21F] transition-all duration-500 hover:text-[#FFE45C] sm:text-5xl md:text-6xl lg:text-[68px]">
                            Begin Your Beauty Journey
                        </h2>

                        <p className="mt-8 max-w-[850px] text-lg leading-relaxed text-gray-200 sm:text-xl md:text-2xl">
                            Join our professional programs and transform your passion into a successful
                            <br className="hidden md:block" />
                            career
                        </p>

                        <a href="tel:+919781265400" className="beauty-button mt-12 inline-block rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#FFD700] px-12 py-5 text-lg font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_15px_40px_rgba(255,215,0,0.35)]">
                            Inquire Now
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes beautyFeatureEnter {
                    from {
                        opacity: 0;
                        transform: translateY(45px);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes beautyCtaEnter {
                    from {
                        opacity: 0;
                        transform: translateY(55px) scale(0.98);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                @keyframes beautyGlow {
                    0%,
                    100% {
                        box-shadow:
                            0 0 0 rgba(212, 175, 55, 0),
                            0 0 0 rgba(212, 175, 55, 0);
                    }

                    50% {
                        box-shadow:
                            0 0 25px rgba(212, 175, 55, 0.10),
                            0 0 55px rgba(212, 175, 55, 0.05);
                    }
                }

                .beauty-feature-1 {
                    animation: beautyFeatureEnter 0.8s ease-out forwards;
                }

                .beauty-feature-2 {
                    opacity: 0;
                    animation: beautyFeatureEnter 0.8s ease-out 0.15s forwards;
                }

                .beauty-feature-3 {
                    opacity: 0;
                    animation: beautyFeatureEnter 0.8s ease-out 0.30s forwards;
                }

                .beauty-cta {
                    opacity: 0;
                    animation:
                        beautyCtaEnter 0.9s ease-out 0.45s forwards,
                        beautyGlow 4s ease-in-out 1.5s infinite;
                }
            `}</style>
        </section>
    );
};

export default BeautyJourney;