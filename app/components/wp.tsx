const WhatsAppButton = () => {
    return (
        <>
            <style>
                {`
                    @keyframes whatsapp-wave {
                        0% {
                            transform: scale(1);
                            opacity: 0.7;
                        }

                        70% {
                            transform: scale(1.8);
                            opacity: 0.15;
                        }

                        100% {
                            transform: scale(2.2);
                            opacity: 0;
                        }
                    }

                    .whatsapp-wave {
                        animation: whatsapp-wave 1.8s ease-out infinite;
                    }

                    .whatsapp-wave-delay {
                        animation-delay: 0.9s;
                    }
                `}
            </style>

            <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    fixed
                    right-5
                    bottom-5
                    md:right-8
                    md:bottom-8
                    z-[9999]
                    flex
                    items-center
                    gap-5
                    px-3
                    py-2
                    md:px-4
                    md:py-3
                    bg-[#25D366]
                    rounded-full
                    text-white
                    shadow-[0_0_25px_rgba(37,211,102,0.65)]
                "
            >
                {/* First wave */}
                <span
                    className="
                        absolute
                        inset-0
                        rounded-full
                        border-2
                        border-[#25D366]
                        pointer-events-none
                        whatsapp-wave
                    "
                />

                {/* Second wave */}
                <span
                    className="
                        absolute
                        inset-0
                        rounded-full
                        border-2
                        border-[#25D366]
                        pointer-events-none
                        whatsapp-wave
                        whatsapp-wave-delay
                    "
                />

                {/* WhatsApp Icon */}
                <svg
                    viewBox="0 0 32 32"
                    className="relative z-10 w-8 h-8 md:w-10 md:h-10 fill-none stroke-white"
                    strokeWidth="2.5"
                >
                    <path
                        d="M16 3.5a12.5 12.5 0 0 0-10.8 19L3.5 28.5l6.2-1.6A12.5 12.5 0 1 0 16 3.5Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    <path
                        d="M11.5 10.5c.5-.6 1.1-.6 1.5-.1l1.2 1.8c.3.4.3.9 0 1.3l-.7.9c-.2.3-.2.6 0 .9 1 1.7 2.4 3.1 4.1 4.1.3.2.7.2.9 0l.9-.7c.4-.3.9-.3 1.3 0l1.8 1.2c.5.3.5 1 .1 1.5l-.7.9c-.6.8-1.5 1.1-2.5.9-5.5-1.2-9.8-5.5-11-11-.2-1 .1-1.9.9-2.5l.9-.7Z"
                        fill="white"
                        stroke="none"
                    />
                </svg>

                <span className="relative z-10 text-xl md:text-2xl font-semibold whitespace-nowrap">
                    Chat with us
                </span>
            </a>
        </>
    );
};

export default WhatsAppButton;