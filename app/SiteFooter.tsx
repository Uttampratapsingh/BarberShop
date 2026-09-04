"use client";

import React from "react";

const SiteFooter = () => {
    return (
        <footer className="relative w-full overflow-hidden bg-black text-white">

            {/* Top gold line */}
            <div className="mx-auto h-px w-[93%] bg-[#5A4910]" />

            <div className="mx-auto max-w-[1900px] px-8 py-12 sm:px-10 md:px-12 lg:px-16 xl:px-20">

                {/* Main footer */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.7fr_1fr_1.25fr] lg:gap-14">

                    {/* Brand */}
                    <div className="footer-item footer-item-1">
                        <div className="group inline-block">
                            <img
                                src="/logo.png"
                                alt="GSO Bridal Studio"
                                className="h-auto w-[190px] object-contain transition-all duration-500 group-hover:scale-105 group-hover:brightness-125"
                            />
                        </div>

                        <p className="mt-10 max-w-[520px] text-lg leading-relaxed text-gray-300">
                            Premium bridal beauty studio specializing in creating elegant,
                            personalized bridal looks. We combine professional makeup,
                            hairstyling and beauty expertise to transform every bride into
                            her most beautiful self.
                        </p>

                        <div className="mt-10 flex items-center gap-5">
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                                className="group flex h-16 w-16 items-center justify-center border border-white/10 transition-all duration-300 hover:border-[#FFD21F]/50 hover:bg-[#FFD21F]/10"
                            >
                                <svg viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-[#FFD21F] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,210,31,0.7)]" strokeWidth="1.8">
                                    <rect x="3" y="3" width="18" height="18" rx="5" />
                                    <circle cx="12" cy="12" r="4" />
                                    <circle cx="17.5" cy="6.5" r="1" fill="#FFD21F" stroke="none" />
                                </svg>
                            </a>
                            <a
                                href="https://wa.me/919781265400"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="WhatsApp"
                                className="group flex h-16 w-16 items-center justify-center border border-white/10 transition-all duration-300 hover:border-[#FFD21F]/50 hover:bg-[#FFD21F]/10"
                            >
                                <svg viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-[#FFD21F] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,210,31,0.7)]" strokeWidth="1.8">
                                    <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
                                    <path d="M9 8.5c.3 1.7 1.5 3.2 3 4.2.7.4 1.5.7 2.3.8l1-1" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Explore */}
                    <div className="footer-item footer-item-2">
                        <h3 className="text-xl font-semibold tracking-[0.25em] text-emerald-500">Explore</h3>
                        <div className="mt-9 space-y-5 text-lg text-gray-300">
                            {[
                                ["Home", "/"],
                                ["About", "/about-us"],
                                ["Services", "/services"],
                                ["Packages", "/services"],
                                ["Our Work", "/our-work"],
                                ["Book Appointment", "/contact-us"],
                                ["Contact", "/contact-us"],
                            ].map(([label, href]) => (
                                <a key={label} href={href} className="flex items-center gap-3 transition-all duration-300 hover:translate-x-1 hover:text-[#FFD21F]">
                                    <span className="text-emerald-500">—</span>{label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Signature Services */}
                    <div className="footer-item footer-item-3">
                        <h3 className="text-xl font-semibold tracking-[0.25em] text-emerald-500">Signature Services</h3>
                        <div className="mt-9 space-y-5 text-lg text-gray-300">
                            {["Bridal Makeup", "Bridal Hairstyling", "Pre-Bridal Beauty", "Engagement Makeup", "Reception & Party Makeup", "Custom Bridal Packages"].map((service) => (
                                <a key={service} href="/services" className="flex items-center gap-3 transition-all duration-300 hover:translate-x-1 hover:text-[#FFD21F]">
                                    <span className="text-emerald-500">—</span>{service}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Visit Us */}
                    <div className="footer-item footer-item-4">
                        <h3 className="text-xl font-semibold tracking-[0.25em] text-[#D4AF37]">Visit Us</h3>
                        <div className="mt-9 space-y-7 text-lg text-gray-300">
                            <a href="tel:+919781265400" className="block transition-all duration-300 hover:translate-x-1 hover:text-[#FFD21F]">
                                <span className="mb-1 block text-sm uppercase tracking-[0.2em] text-gray-500">Phone</span>
                                +91 97812 65400
                            </a>
                            <a href="mailto:rajjpal33@gmail.com" className="block transition-all duration-300 hover:translate-x-1 hover:text-[#FFD21F]">
                                <span className="mb-1 block text-sm uppercase tracking-[0.2em] text-gray-500">Email</span>
                                rajjpal33@gmail.com
                            </a>
                            <a href="https://maps.google.com/?q=Bulewal+Morh+Balachur+Punjab+144521" target="_blank" rel="noreferrer" className="block transition-all duration-300 hover:translate-x-1 hover:text-[#FFD21F]">
                                <span className="mb-1 block text-sm uppercase tracking-[0.2em] text-gray-500">Studio</span>
                                Bulewal Morh, Near Kulwinder DJ, Balachur-Bhaddi Road, Balachur, Punjab 144521
                            </a>
                            <div>
                                <span className="mb-1 block text-sm uppercase tracking-[0.2em] text-gray-500">Hours</span>
                                Sat – Sun · 9:00 AM – 8:00 PM
                            </div>
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
