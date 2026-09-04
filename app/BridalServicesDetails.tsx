"use client";

import React from "react";

const BridalServicesDetails = () => {
    const services = [
        {
            title: "Pre-Bridal Packages",
            items: [
                "Customized Skin Preparation",
                "Professional Body Treatments",
                "Personalized Beauty Regimens",
            ],
        },
        {
            title: "Wedding Day Services",
            items: [
                "Professional Bridal Makeup",
                "Hair Design & Accessories",
                "Complete Look Coordination",
            ],
        },
    ];

    return (
        <section className="details-section relative w-full overflow-hidden px-5 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            
            {/* Background texture */}
            {/* <div
                className="absolute inset-0 pointer-events-none opacity-25"
                style={{
                    backgroundImage: "url('/noise-texture.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            /> */}

            {/* Background glow */}
            {/* <div className="absolute left-1/2 top-0 h-[350px] w-[800px] -translate-x-1/2 rounded-full bg-[#FFE45C]/30 blur-[130px] pointer-events-none" /> */}

            <div className="absolute bottom-0 left-0 h-[220px] w-[400px] rounded-full bg-[#C9A800]/20 blur-[100px] pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-[1450px]">

                {/* Heading */}
                <div className="mb-14 text-center md:mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[58px]">
                        Premium Bridal Services Details
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">

                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className={`
                                group
                                relative
                                min-h-[390px]
                                overflow-hidden
                                rounded-2xl
                                border-2
                                border-black
                                details-card
                                p-8
                                md:p-10
                                lg:min-h-[395px]
                                transition-all
                                duration-500
                                ease-out
                                hover:-translate-y-2
                                hover:shadow-[0_20px_45px_rgba(0,0,0,0.3),0_0_30px_rgba(255,215,0,0.15)]
                                ${index === 0 ? "animate-fade-up" : "animate-fade-up-delay"}
                            `}
                        >
                            
                            {/* Hover light sweep */}
                            <div className="pointer-events-none absolute inset-y-0 -left-[120%] w-[35%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 ease-out group-hover:left-[120%]" />

                            {/* Card glow */}
                            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#FFD700]/10 blur-3xl" />

                            <div className="relative z-10 flex h-full flex-col">

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-[#FFD21F] sm:text-3xl">
                                    {service.title}
                                </h3>

                                {/* Items */}
                                <div className="mt-9 space-y-6">
                                    {service.items.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-3 text-base text-gray-200 transition-all duration-300 hover:translate-x-2 hover:text-white sm:text-lg md:text-xl"
                                        >
                                            <span className="flex-shrink-0 text-xl text-white sm:text-2xl">
                                                ✦
                                            </span>

                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Button */}
                                <div className="mt-auto pt-8">
                                    <a href="tel:+919999999999" className="inline-block rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#FFD700] px-10 py-4 text-lg font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_10px_25px_rgba(255,215,0,0.3)]">
                                        Inquire Now
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* Animation */}
            <style>{`
                .details-section {
                    background: #24343a !important;
                }

                .details-card {
                    background: rgb(255 255 255 / 0.08) !important;
                    border-color: rgb(255 255 255 / 0.18) !important;
                }

                @keyframes fadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(45px);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-up {
                    animation: fadeUp 0.8s ease-out forwards;
                }

                .animate-fade-up-delay {
                    opacity: 0;
                    animation: fadeUp 0.8s ease-out 0.18s forwards;
                }
            `}</style>

        </section>
    );
};

export default BridalServicesDetails;