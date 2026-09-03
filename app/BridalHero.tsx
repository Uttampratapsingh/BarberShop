"use client"
import React, { useEffect, useState } from "react";

const BridalHero = () => {
    const images = [
        "/bridal-1.png",
        "/bridal-2.png",
        "/bridal-3.png",
        "/bridal-4.png",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-black">

            {/* Background Images */}
            {images.map((image, index) => (
                <div
                    key={image}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[1800ms] ease-in-out"
                    style={{
                        backgroundImage: `url("${image}")`,
                        opacity: index === currentImage ? 1 : 0,
                    }}
                />
            ))}

            {/* Dark overlay */}
            {/* <div className="absolute inset-0 bg-black/65" /> */}

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
                            text-[#F5C518]
                        "
                    >
                        Classic Bridal Studio
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
                            text-white
                        "
                    >
                        Master the art of bridal beauty with professional training in
                        <br className="hidden sm:block" />
                        makeup, skincare, and hair designing
                    </p>

                    {/* Button */}
                    <button
                        className="
                            mt-12
                            rounded-lg
                            bg-gradient-to-r
                            from-[#D4AF37]
                            to-[#FFD700]
                            px-12
                            py-5
                            text-lg
                            font-bold
                            text-black
                            shadow-[0_8px_30px_rgba(212,175,55,0.25)]
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:shadow-[0_8px_40px_rgba(212,175,55,0.45)]
                        "
                    >
                        View Our Work
                    </button>

                </div>
            </div>

            {/* Subtle gold particles */}
            <div className="pointer-events-none absolute inset-0 z-[5] opacity-30">
                <div className="absolute left-[12%] top-[20%] h-1 w-1 rounded-full bg-[#D4AF37]" />
                <div className="absolute left-[27%] top-[70%] h-1 w-1 rounded-full bg-[#D4AF37]" />
                <div className="absolute left-[52%] top-[18%] h-1 w-1 rounded-full bg-[#D4AF37]" />
                <div className="absolute left-[73%] top-[62%] h-1 w-1 rounded-full bg-[#D4AF37]" />
                <div className="absolute left-[88%] top-[30%] h-1 w-1 rounded-full bg-[#D4AF37]" />
                <div className="absolute left-[45%] top-[82%] h-1 w-1 rounded-full bg-[#D4AF37]" />
            </div>

        </section>
    );
};

export default BridalHero;