"use client";

import React from "react";

const CertificationPrograms = () => {
    const programs = [
        {
            title: "Skin Care Course",
            image: "/bridal-1.png",
        },
        {
            title: "Advance Makeup Course",
            image: "/bridal-2.png",
        },
        {
            title: "Nail Artistry Course",
            image: "/bridal-3.png",
        },
        {
            title: "Hair Designing Course",
            image: "/bridal-4.png",
        },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-black px-5 py-16 sm:px-8 md:px-10 lg:px-12 xl:px-16">

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
            <div className="pointer-events-none absolute left-1/2 top-20 h-[350px] w-[900px] -translate-x-1/2 rounded-full bg-[#D4AF37]/5 blur-[130px]" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-[1850px]">

                {/* Heading */}
                <div className="mb-14 text-center md:mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-[#F5C518] sm:text-5xl md:text-6xl lg:text-[58px]">
                        Professional Certification Programs
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-9">

                    {programs.map((program, index) => (
                        <div
                            key={program.title}
                            className={`cert-card group relative overflow-hidden rounded-2xl border border-[#D4AF37]/60 bg-black opacity-0 shadow-[0_0_0_rgba(212,175,55,0)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#FFD700] hover:shadow-[0_20px_40px_rgba(0,0,0,0.45),0_0_30px_rgba(212,175,55,0.18)] ${
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
                                <div className="pointer-events-none absolute inset-0 bg-[#D4AF37]/0 transition-all duration-500 group-hover:bg-[#D4AF37]/5" />

                                {/* Shine sweep */}
                                <div className="cert-shine pointer-events-none absolute inset-y-0 -left-[120%] w-[35%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                {/* Content */}
                                <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-7">

                                    <h3 className="max-w-[95%] text-2xl font-bold leading-tight text-[#FFD21F] transition-all duration-300 group-hover:text-[#FFE45C] md:text-[27px]">
                                        {program.title}
                                    </h3>

                                    <button className="cert-button mt-5 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#FFD700] px-8 py-3.5 text-base font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_10px_25px_rgba(255,215,0,0.35)] md:text-lg">
                                        Inquire Now
                                    </button>
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