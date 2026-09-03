const BridalServices = () => {
    const services = [
        {
            title: "Pre-Bridal Packages",
            image: "/bridal-1.png",
        },
        {
            title: "Wedding Day Services",
            image: "/bridal-1.png",
        },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-black py-16 md:py-20 lg:py-24">

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
                                0 0 0 rgba(212,175,55,0),
                                inset 0 0 0 rgba(212,175,55,0);
                        }

                        50% {
                            box-shadow:
                                0 0 28px rgba(212,175,55,0.12),
                                inset 0 0 18px rgba(212,175,55,0.04);
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
                        animation: serviceCardEnter 0.9s ease-out forwards,
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

                    .service-card:hover .service-card-image {
                        transform: scale(1.08);
                        filter: brightness(1.08);
                    }

                    .service-card-button {
                        transition:
                            transform 300ms ease,
                            box-shadow 300ms ease,
                            background 300ms ease;
                    }

                    .service-card:hover .service-card-button {
                        transform: translateY(-3px);
                        box-shadow:
                            0 10px 30px rgba(255, 210, 0, 0.28),
                            0 0 20px rgba(255, 210, 0, 0.12);
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
                            rgba(255,255,255,0.08),
                            transparent
                        );
                        transform: translateX(-120%);
                    }

                    .service-card:hover::after {
                        opacity: 1;
                        animation: goldShimmer 1.2s ease;
                    }
                `}
            </style>

            {/* Background texture */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: "url('/noise-texture.webp')",
                    backgroundSize: "cover",
                }}
            />

            {/* Background glow */}
            <div className="absolute left-1/2 top-20 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/5 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-[1500px] px-5 md:px-8 lg:px-12">

                {/* Heading */}
                <div className="mb-12 text-center md:mb-16">
                    <h2
                        className="
                            text-4xl
                            font-bold
                            leading-tight
                            text-[#F5C518]
                            sm:text-5xl
                            md:text-6xl
                            lg:text-[60px]
                        "
                    >
                        Premium Bridal Services
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">

                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className={`
                                service-card
                                service-card-enter
                                relative
                                h-[420px]
                                overflow-hidden
                                rounded-2xl
                                border
                                border-[#D4AF37]/50
                                bg-black
                                opacity-0
                                ${index === 1 ? "service-card-delay" : ""}
                            `}
                        >
                            {/* Image */}
                            <div className="absolute inset-0 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="
                                        service-card-image
                                        h-full
                                        w-full
                                        object-cover
                                    "
                                />
                            </div>

                            {/* Dark image overlay */}
                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-black
                                    via-black/55
                                    to-black/10
                                "
                            />

                            {/* Additional cinematic overlay */}
                            <div className="absolute inset-0 bg-black/10 transition-all duration-500 group-hover:bg-black/0" />

                            {/* Content */}
                            <div
                                className="
                                    absolute
                                    inset-x-0
                                    bottom-0
                                    z-10
                                    p-7
                                    md:p-8
                                "
                            >
                                <h3
                                    className="
                                        mb-6
                                        text-2xl
                                        font-bold
                                        text-[#FFD21F]
                                        md:text-3xl
                                    "
                                >
                                    {service.title}
                                </h3>

                                <a
                                    href="tel:+919999999999"
                                    className="
                                        service-card-button
                                        rounded-lg
                                        bg-gradient-to-r
                                        from-[#D4AF37]
                                        to-[#FFD700]
                                        px-10
                                        py-4
                                        text-base
                                        font-bold
                                        text-black
                                        md:text-lg
                                    "
                                >
                                    Inquire Now
                                </a>
                            </div>

                            {/* Gold corner glow */}
                            <div className="pointer-events-none absolute -left-16 -top-16 h-32 w-32 rounded-full bg-[#D4AF37]/10 blur-3xl" />
                            <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-[#D4AF37]/10 blur-3xl" />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default BridalServices;