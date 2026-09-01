"use client";

import React from "react";

const SiteFooter = () => {
    return (
        <footer className="relative w-full overflow-hidden bg-black text-white">

            {/* Top gold line */}
            <div className="mx-auto h-px w-[93%] bg-[#5A4910]" />

            <div className="mx-auto max-w-[1900px] px-8 py-12 sm:px-10 md:px-12 lg:px-16 xl:px-20">

                {/* Main footer */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">

                    {/* Brand */}
                    <div className="footer-item footer-item-1">

                        <div className="group inline-block">
                            <img
                                src="/logo.png"
                                alt="Classic Bridal Studio"
                                className="h-auto w-[190px] object-contain transition-all duration-500 group-hover:scale-105 group-hover:brightness-125"
                            />
                        </div>

                        <p className="mt-12 max-w-[390px] text-lg leading-relaxed text-gray-300">
                            Transforming beauty experiences with
                            <br className="hidden sm:block" />
                            expert care and premium services.
                        </p>

                        {/* Social icons */}
                        <div className="mt-10 flex items-center gap-7">

                            {/* Facebook */}
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="group flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:bg-[#FFD21F]/10"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-8 w-8 fill-[#FFD21F] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,210,31,0.7)]"
                                >
                                    <path d="M14 8h3V4h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V8c0-.6.4-1 1-1Z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="group flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 hover:scale-110 hover:bg-[#FFD21F]/10"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-8 w-8 fill-none stroke-[#FFD21F] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,210,31,0.7)]"
                                    strokeWidth="1.8"
                                >
                                    <rect
                                        x="3"
                                        y="3"
                                        width="18"
                                        height="18"
                                        rx="5"
                                    />

                                    <circle cx="12" cy="12" r="4" />

                                    <circle
                                        cx="17.5"
                                        cy="6.5"
                                        r="1"
                                        fill="#FFD21F"
                                        stroke="none"
                                    />
                                </svg>
                            </a>

                        </div>
                    </div>

                    {/* Contact */}
                    <div className="footer-item footer-item-2">

                        <h3 className="inline-block text-2xl font-bold text-[#FFD21F]">
                            Contact Us
                        </h3>

                        <div className="mt-4 h-px w-[120px] bg-[#4F410F]" />

                        <div className="mt-9 space-y-6 text-lg text-gray-300">

                            <a
                                href="tel:+919914118262"
                                className="block transition-all duration-300 hover:translate-x-1 hover:text-[#FFD21F]"
                            >
                                +91 99141-18262
                            </a>

                            <a
                                href="mailto:tarandeep singh01@gmail.com"
                                className="block break-words transition-all duration-300 hover:translate-x-1 hover:text-[#FFD21F]"
                            >
                                tarandeep singh01@gmail.com
                            </a>

                        </div>
                    </div>

                    {/* Services */}
                    <div className="footer-item footer-item-3">

                        <h3 className="inline-block text-2xl font-bold text-[#FFD21F]">
                            Our Services
                        </h3>

                        <div className="mt-4 h-px w-[120px] bg-[#4F410F]" />

                        <div className="mt-9 space-y-6 text-lg text-gray-300">

                            <a
                                href="/services"
                                className="block transition-all duration-300 hover:translate-x-1 hover:text-[#FFD21F]"
                            >
                                Salon Services
                            </a>

                            <a
                                href="/courses"
                                className="block transition-all duration-300 hover:translate-x-1 hover:text-[#FFD21F]"
                            >
                                Academy Courses
                            </a>

                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-item footer-item-4">

                        <h3 className="inline-block text-2xl font-bold text-[#FFD21F]">
                            Quick Links
                        </h3>

                        <div className="mt-4 h-px w-[120px] bg-[#4F410F]" />

                        <div className="mt-9 space-y-6 text-lg text-gray-300">

                            <a
                                href="/about-us"
                                className="block transition-all duration-300 hover:translate-x-1 hover:text-[#FFD21F]"
                            >
                                About Us
                            </a>

                            <a
                                href="/contact-us"
                                className="block transition-all duration-300 hover:translate-x-1 hover:text-[#FFD21F]"
                            >
                                Contact Us
                            </a>

                            <a
                                href="/our-work"
                                className="block transition-all duration-300 hover:translate-x-1 hover:text-[#FFD21F]"
                            >
                                Our Work
                            </a>

                            <a
                                href="/verify-student"
                                className="block transition-all duration-300 hover:translate-x-1 hover:text-[#FFD21F]"
                            >
                                Verify Student
                            </a>

                        </div>
                    </div>

                </div>

                {/* Bottom divider */}
                <div className="mt-16 h-px w-full bg-[#3E330D]" />

                {/* Copyright */}
                <div className="py-8">

                    <p className="text-base leading-relaxed text-gray-400 sm:text-lg">
                        © 2025 Classic Bridal Studio. All rights reserved.
                        <span className="ml-1">
                            Powered by{" "}
                            <a
                                href="#"
                                className="font-semibold text-[#FFD21F] underline decoration-[#FFD21F]/50 underline-offset-2 transition-all duration-300 hover:text-[#FFE45C]"
                            >
                                KN Tech Works
                            </a>
                        </span>
                    </p>

                </div>

            </div>

            <style>{`
                @keyframes footerFadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .footer-item-1 {
                    animation: footerFadeUp 0.7s ease-out 0s forwards;
                }

                .footer-item-2 {
                    opacity: 0;
                    animation: footerFadeUp 0.7s ease-out 0.12s forwards;
                }

                .footer-item-3 {
                    opacity: 0;
                    animation: footerFadeUp 0.7s ease-out 0.24s forwards;
                }

                .footer-item-4 {
                    opacity: 0;
                    animation: footerFadeUp 0.7s ease-out 0.36s forwards;
                }
            `}</style>
        </footer>
    );
};

export default SiteFooter;
