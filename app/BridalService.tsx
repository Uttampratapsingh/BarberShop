"use client";

import React from "react";

const BridalServices = () => {
    const services = [
        {
            title: "Pre-Bridal Packages",
            image: "/r1.jpeg",
        },
        {
            title: "Wedding Day Services",
            image: "/r2.jpeg",
        },
    ];

    return (
        <section className="bridal-services relative w-full overflow-hidden bg-[#713600] py-16 md:py-20 lg:py-24">

            <style>
                {`
                    @keyframes serviceCardEnter {
                        from {
                            opacity: 0;
                            transform: translateY(40px);
                        }

                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes goldGlow {
                        0%, 100% {
                            box-shadow:
                                0 0 0 rgba(192, 88, 0, 0),
                                inset 0 0 0 rgba(192, 88, 0, 0);
                        }

                        50% {
                            box-shadow:
                                0 0 28px rgba(192, 88, 0, 0.12),
                                inset 0 0 18px rgba(192, 88, 0, 0.04);
                        }
                    }

                    @keyframes goldShimmer {
                        0% {
                            transform: translateX(-120%);
                        }

                        100% {
                            transform: translateX(120%);
                        }
                    }

                    .service-card-enter {
                        animation:
                            serviceCardEnter 0.9s ease-out forwards,
                            goldGlow 4s ease-in-out infinite;
                    }

                    .service-card-delay {
                        animation-delay: 0.15s, 0s;
                    }

                    .service-card-image {
                        transition:
                            transform 900ms cubic-bezier(0.22, 1, 0.36, 1),
                            filter 900ms ease;
                    }

                    .service-card-tint {
                        background: rgba(56, 36, 13, 0.05);
                    }

                    .service-card:hover .service-card-image {
                        transform: scale(1.08);
                        filter: brightness(1.08);
                    }

                    .service-card-button {
                        transition:
                            transform 300ms ease,
                            box-shadow 300ms ease;
                    }

                    .service-card:hover .service-card-button {
                        transform: translateY(-3px);

                        box-shadow:
                            0 10px 30px rgba(192, 88, 0, 0.28),
                            0 0 20px rgba(192, 88, 0, 0.12);
                    }

                    .bridal-services .service-card-button {
                        background-color: rgba(192, 88, 0, 0.5) !important;
                        background-image: none !important;
                        color: #FDFBD4 !important;
                    }

                    .bridal-services .service-card-button:hover {
                        background-color: #C05800 !important;
                        color: #FDFBD4 !important;
                    }

                    .service-card::after {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 35%;
                        height: 100%;
                        pointer-events: none;
                        opacity: 0;
                        background: linear-gradient(
                            90deg,
                            transparent,
                            rgba(253,251,212,0.08),
                            transparent
                        );
                        transform: translateX(-120%);
                        z-index: 30;
                    }

                    .service-card:hover::after {
                        opacity: 1;
                        animation: goldShimmer 1.2s ease;
                    }
                `}
            </style>


            {/* =====================================================
                SECTION BACKGROUND
            ===================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[#713600]
                "
            />


            {/* =====================================================
                BACKGROUND TEXTURE
            ===================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-[1]
                    opacity-10
                "
                style={{
                    backgroundImage: "url('/noise-texture.webp')",
                    backgroundSize: "cover",
                }}
            />


            {/* =====================================================
                BACKGROUND GOLD GLOW
            ===================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-20
                    z-[2]
                    h-[350px]
                    w-[700px]
                    -translate-x-1/2
                    rounded-full
                    bg-[#C05800]/5
                    blur-[120px]
                "
            />


            {/* =====================================================
                MAIN CONTENT
            ===================================================== */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    max-w-[1500px]
                    px-5
                    md:px-8
                    lg:px-12
                "
            >

                {/* =================================================
                    HEADING
                ================================================= */}

                <div className="mb-12 text-center md:mb-16">

                    <h2
                        className="
                            text-4xl
                            font-bold
                            leading-tight
                            text-[#38240D]
                            sm:text-5xl
                            md:text-6xl
                            lg:text-[60px]

                            [text-shadow:0_0_15px_rgba(192,88,0,0.18)]
                        "
                    >
                        Premium Bridal Services
                    </h2>

                </div>


                {/* =================================================
                    CARDS
                ================================================= */}

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-8
                        lg:grid-cols-2
                        lg:gap-10
                        lg:mx-auto
                        lg:max-w-[70%]
                    "
                >

                    {services.map((service, index) => (

                        <div
                            key={service.title}
                            className={`
                                service-card
                                service-card-enter
                                group

                                relative
                                isolate

                                aspect-[1179/1380]
                                overflow-hidden
                                rounded-2xl

                                border
                                border-[#C05800]/80

                                bg-[#713600]

                                opacity-0

                                ${index === 1 ? "service-card-delay" : ""}
                            `}
                        >

                            {/* =================================================
                                IMAGE

                                IMPORTANT:
                                z-0 = image
                            ================================================= */}

                            <div
                                className="
                                    absolute
                                    inset-0
                                    z-0
                                    overflow-hidden
                                    bg-transparent
                                "
                            >

                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="
                                        service-card-image

                                        block
                                        h-full
                                        w-full

                                        object-cover
                                        object-center

                                        opacity-100
                                        visible
                                    "
                                />

                            </div>


                            {/* =================================================
                                LIGHT CINEMATIC OVERLAY

                                IMPORTANT:
                                This is deliberately VERY LIGHT.
                            ================================================= */}

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    inset-0
                                    z-10

                                    bg-gradient-to-t
                                    from-black/55
                                    via-black/20
                                    to-transparent
                                    opacity-100
                                "
                            />


                            {/* =================================================
                                VERY SUBTLE DARK TINT
                            ================================================= */}

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    inset-0
                                    z-10

                                    service-card-tint

                                    transition-opacity
                                    duration-500
                                    opacity-100
                                "
                            />


                            {/* =================================================
                                CONTENT
                            ================================================= */}

                            <div
                                className="
                                    absolute
                                    inset-x-0
                                    bottom-0
                                    z-20
                                    p-7
                                    md:p-8
                                "
                            >

                                <h3
                                    className="
                                        mb-6

                                        text-2xl
                                        font-bold

                                        text-[#FDFBD4]

                                        md:text-3xl

                                        [text-shadow:0_2px_10px_rgba(56, 36, 13, 0.95)]
                                    "
                                >
                                    {service.title}
                                </h3>


                                <a
                                    href="tel:+919781265400"
                                    className="
                                        service-card-button

                                        inline-block

                                        rounded-lg

                                        bg-gradient-to-r
                                        from-[#C05800]
                                        to-[#C05800]

                                        px-10
                                        py-4

                                        text-base
                                        font-bold
                                        text-[#FDFBD4]

                                        shadow-[0_8px_25px_rgba(192, 88, 0, 0.3)]

                                        md:text-lg
                                    "
                                >
                                    Inquire Now
                                </a>

                            </div>


                            {/* =================================================
                                GOLD CORNER GLOW
                            ================================================= */}

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    -left-16
                                    -top-16
                                    z-30

                                    h-32
                                    w-32

                                    rounded-full
                                    bg-[#C05800]/10
                                    blur-3xl
                                "
                            />

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    -bottom-16
                                    -right-16
                                    z-30

                                    h-32
                                    w-32

                                    rounded-full
                                    bg-[#C05800]/10
                                    blur-3xl
                                "
                            />

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default BridalServices;