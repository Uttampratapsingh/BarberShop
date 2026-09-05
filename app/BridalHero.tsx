"use client"
import Link from "next/link";
import React from "react";

const BridalHero = () => {
    return (
        <section className="bridal-hero relative min-h-screen w-full overflow-hidden bg-[#713600]">

            {/* Background Video */}
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

            {/* Dark overlay */}
            {/* <div className="absolute inset-0 bg-[#713600]/65" /> */}

            {/* Extra gradient for cinematic look */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/65" /> */}

            {/* Hero Content */}
            <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center pt-[72px] sm:pt-[88px] md:pt-[120px]">

                <div className="max-w-5xl">

                    {/* Heading */}
                    <h1
                        className="
                            text-4xl
                            sm:text-5xl
                            md:text-6xl
                            lg:text-7xl
                            font-bold
                            leading-[1.05]
                            text-[#FDFBD4]
                            brightness-100
                            opacity-100
                        "
                    >
                        GSO Bridal Studio
                        <br />
                        Salon & Academy
                    </h1>

                    {/* Description */}
                    <p
                        className="
                            mx-auto
                            mt-8
                            max-w-3xl
                            text-lg
                            sm:text-xl
                            md:text-2xl
                            leading-relaxed
                            font-medium
                            text-[#FDFBD4]
                            opacity-60
                        "
                    >
                        Redefining Bridal Beauty, One Bride at a Time
                        <br className="hidden sm:block" />
                        Elegant makeup, skincare & hair styling for your special day.
                    </p>

                    {/* Button */}
                    <Link
                        href="/our-work"
                        className="
                            mt-10
                            inline-block
                            sm:mt-12
                            rounded-lg
                            bg-gradient-to-r
                            from-[#C05800]
                            to-[#C05800]
                            px-12
                            py-5
                            text-lg
                            font-bold
                            text-[#38240D]
                            shadow-[0_8px_30px_rgba(192, 88, 0, 0.25)]
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:shadow-[0_8px_40px_rgba(192, 88, 0, 0.45)]
                            opacity-70
                        "
                    >
                        View Our Work
                    </Link>

                </div>
            </div>

            {/* Subtle gold particles */}
            <div className="pointer-events-none absolute inset-0 z-[5] opacity-30">
                <div className="absolute left-[12%] top-[20%] h-1 w-1 rounded-full bg-[#C05800]" />
                <div className="absolute left-[27%] top-[70%] h-1 w-1 rounded-full bg-[#C05800]" />
                <div className="absolute left-[52%] top-[18%] h-1 w-1 rounded-full bg-[#C05800]" />
                <div className="absolute left-[73%] top-[62%] h-1 w-1 rounded-full bg-[#C05800]" />
                <div className="absolute left-[88%] top-[30%] h-1 w-1 rounded-full bg-[#C05800]" />
                <div className="absolute left-[45%] top-[82%] h-1 w-1 rounded-full bg-[#C05800]" />
            </div>

        </section>
    );
};

export default BridalHero;