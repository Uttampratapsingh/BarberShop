"use client";

import React from "react";

const CertificationProgramsDetails = () => {
    const programs = [
        {
            title: "Skin Care Course",
            items: [
                "Facial Techniques",
                "Advanced Skin Analysis",
                "Professional Cleansing",
                "Hydra Facial Training",
            ],
        },
        {
            title: "Advance Makeup Course",
            items: [
                "Traditional & Contemporary",
                "Airbrush Techniques",
                "Bridal Makeup Design",
                "Special Occasion Makeup",
            ],
        },
        {
            title: "Nail Artistry Course",
            items: [
                "Gel & Acrylic Extensions",
                "3D Nail Art",
                "Nail Health & Safety",
                "Advanced Design Techniques",
            ],
        },
        {
            title: "Hair Designing Course",
            items: [
                "Bridal Hair Design",
                "Advanced Coloring",
                "Hair Treatments",
                "Thermal Styling",
            ],
        },
    ];

    return (
        <section className="certification-programs-details relative w-full overflow-hidden px-5 py-16 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            
            {/* Background texture */}
            {/* <div
                className="pointer-events-none absolute inset-0 opacity-25"
                style={{
                    backgroundImage: "url('/noise-texture.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            /> */}

            {/* Gold ambient glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[1000px] -translate-x-1/2 rounded-full blur-[140px]" />

            <div className="pointer-events-none absolute bottom-0 left-1/4 h-[300px] w-[500px] rounded-full blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-[1850px]">

                {/* Heading */}
                <div className="mb-14 text-center md:mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-[#38240D] sm:text-5xl md:text-6xl lg:text-[56px]">
                        Professional Certification Programs Details
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4">

                    {programs.map((program, index) => (
                        <div
                            key={program.title}
                            className={`program-details-card details-card group relative min-h-[430px] overflow-hidden rounded-2xl p-6 opacity-0 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(56, 36, 13, 0.32),0_0_35px_rgba(192, 88, 0, 0.18)] md:p-7 ${
                                index === 0
                                    ? "program-card-1"
                                    : index === 1
                                    ? "program-card-2"
                                    : index === 2
                                    ? "program-card-3"
                                    : "program-card-4"
                            }`}
                        >

                            {/* Hover shine */}
                            <div className="program-shine pointer-events-none absolute inset-y-0 -left-[120%] w-[35%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                            {/* Top glow */}
                            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#C05800]/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                            <div className="relative z-10 flex h-full flex-col">

                                {/* Icon */}
                                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-r from-[#C05800] to-[#C05800] shadow-[0_5px_20px_rgba(192, 88, 0, 0.12)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-[0_8px_25px_rgba(192, 88, 0, 0.3)]">
                                     <div className="h-4 w-4 rounded-sm bg-[#F3E9B0]" />
                                </div>

                                {/* Title */}
                                <h3 className="certification-course-title text-2xl font-bold leading-tight transition-colors duration-300 group-hover:text-[#FDFBD4]">
                                    {program.title}
                                </h3>

                                {/* List */}
                                <div className="mt-7 space-y-4">
                                    {program.items.map((item) => (
                                        <div
                                            key={item}
                                            className="certification-course-item flex items-start gap-2 text-[17px] leading-snug transition-all duration-300 hover:translate-x-2 hover:text-[#FDFBD4]"
                                        >
                                                <span className="certification-course-star mt-[1px] flex-shrink-0 text-lg">
                                                ✦
                                            </span>

                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Button */}
                                <div className="mt-auto pt-8">
                                    <a href="tel:+919781265400" className="program-button block w-full rounded-lg bg-gradient-to-r from-[#C05800] to-[#C05800] px-6 py-4 text-center text-lg font-bold text-[#38240D] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(192, 88, 0, 0.35)]">
                                        Inquire Now
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <style>{`
                .certification-programs-details {
                    background: #FDFBD4 !important;
                }

                .details-card {
                    background: rgba(253,251,212,0.08) !important;
                    border: 1px solid rgba(253,251,212,0.18);
                }

                .details-card:hover {
                    background: rgba(253,251,212,0.13) !important;
                }

                .certification-programs-details .certification-course-title {
                    color: #38240D !important;
                }

                .certification-programs-details .certification-course-item {
                    color: #713600 !important;
                }

                .certification-programs-details .certification-course-star {
                    color: #713600 !important;
                }

                @keyframes programFadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(45px);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .program-card-1 {
                    animation: programFadeUp 0.8s ease-out 0s forwards;
                }

                .program-card-2 {
                    animation: programFadeUp 0.8s ease-out 0.12s forwards;
                }

                .program-card-3 {
                    animation: programFadeUp 0.8s ease-out 0.24s forwards;
                }

                .program-card-4 {
                    animation: programFadeUp 0.8s ease-out 0.36s forwards;
                }

                @keyframes programShine {
                    0% {
                        left: -120%;
                    }

                    100% {
                        left: 120%;
                    }
                }

                .program-details-card:hover .program-shine {
                    animation: programShine 1.1s ease;
                }
            `}</style>
        </section>
    );
};

export default CertificationProgramsDetails;