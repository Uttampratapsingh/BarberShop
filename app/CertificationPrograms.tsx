"use client";

import React from "react";

const CertificationPrograms = () => {
    const programs = [
        {
            title: "Skin Care Course",
            image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=90",
        },
        {
            title: "Advance Makeup Course",
            image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1400&q=90",
        },
        {
            title: "Nail Artistry Course",
            image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1400&q=90",
        },
        {
            title: "Hair Designing Course",
            image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=90",
        },
    ];

    return (
        <section className="certification-programs relative w-full overflow-hidden bg-[#713600] px-5 py-16 sm:px-8 md:px-10 lg:px-12 xl:px-16">

            {/* Background texture */}
            <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                    backgroundImage: "url('/noise-texture.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {/* Subtle gold ambient glow */}
            <div className="pointer-events-none absolute left-1/2 top-20 h-[350px] w-[900px] -translate-x-1/2 rounded-full bg-[#C05800]/5 blur-[130px]" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-[1850px]">

                {/* Heading */}
                <div className="mb-14 text-center md:mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-[#38240D] sm:text-5xl md:text-6xl lg:text-[58px]">
                        Professional Certification Programs
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-9">

                    {programs.map((program, index) => (
                        <div
                            key={program.title}
                            className={`cert-card group relative overflow-hidden rounded-2xl border border-[#C05800]/60 bg-[#713600] opacity-0 shadow-[0_0_0_rgba(192, 88, 0, 0)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#C05800] hover:shadow-[0_20px_40px_rgba(56, 36, 13, 0.45),0_0_30px_rgba(192, 88, 0, 0.18)] ${
                                index === 0
                                    ? "cert-card-1"
                                    : index === 1
                                    ? "cert-card-2"
                                    : index === 2
                                    ? "cert-card-3"
                                    : "cert-card-4"
                            }`}
                        >
                            {/* Image */}
                            <div className="relative h-[350px] overflow-hidden sm:h-[360px] lg:h-[350px]">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="cert-image h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                                />

                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/5" />

                                {/* Bottom cinematic shadow */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent" />

                                {/* Hover glow */}
                                <div className="pointer-events-none absolute inset-0 bg-[#C05800]/0 transition-all duration-500 group-hover:bg-[#C05800]/5" />

                                {/* Shine sweep */}
                                <div className="cert-shine pointer-events-none absolute inset-y-0 -left-[120%] w-[35%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                {/* Content */}
                                <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-7">

                                    <h3 className="max-w-[95%] text-2xl font-bold leading-tight text-[#FDFBD4] transition-all duration-300 group-hover:text-[#FDFBD4] md:text-[27px]">
                                        {program.title}
                                    </h3>

                                    <a href="tel:+919781265400" className="cert-button mt-5 inline-block rounded-lg bg-gradient-to-r from-[#C05800] to-[#C05800] px-8 py-3.5 text-base font-bold text-[#FDFBD4] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_10px_25px_rgba(192, 88, 0, 0.35)] md:text-lg">
                                        Inquire Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <style>{`
                @keyframes certFadeUp {
                    0% {
                        opacity: 0;
                        transform: translateY(50px);
                    }

                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .cert-card-1 {
                    animation: certFadeUp 0.8s ease-out 0s forwards;
                }

                .cert-card-2 {
                    animation: certFadeUp 0.8s ease-out 0.12s forwards;
                }

                .cert-card-3 {
                    animation: certFadeUp 0.8s ease-out 0.24s forwards;
                }

                .cert-card-4 {
                    animation: certFadeUp 0.8s ease-out 0.36s forwards;
                }

                .cert-card:hover .cert-shine {
                    animation: certShine 1.1s ease;
                }

                @keyframes certShine {
                    0% {
                        left: -120%;
                    }

                    100% {
                        left: 120%;
                    }
                }
            `}</style>
        </section>
    );
};

export default CertificationPrograms;