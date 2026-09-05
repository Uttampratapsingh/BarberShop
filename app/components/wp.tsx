const WhatsAppButton = () => {
    return (
        <>
            <style>
                {`
                    @keyframes whatsapp-ring {
                        0% {
                            transform: scale(0.96);
                            opacity: 0.55;
                        }

                        100% {
                            transform: scale(1.16);
                            opacity: 0;
                        }
                    }

                    .whatsapp-float {
                        box-shadow: 0 10px 24px rgba(24, 92, 61, 0.28), 0 2px 8px rgba(36, 52, 58, 0.16);
                        transition: transform 220ms ease, box-shadow 220ms ease, background-color 220ms ease;
                    }

                    .whatsapp-float:hover {
                        transform: translateY(-3px);
                        background-color: #239b5d;
                        box-shadow: 0 14px 30px rgba(24, 92, 61, 0.36), 0 4px 10px rgba(36, 52, 58, 0.16);
                    }

                    .whatsapp-float:focus-visible {
                        outline: 3px solid rgba(201, 130, 120, 0.6);
                        outline-offset: 4px;
                    }

                    .whatsapp-ring {
                        animation: whatsapp-ring 2.8s ease-out infinite;
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .whatsapp-ring {
                            animation: none;
                        }
                    }
                `}
            </style>

            <a
                href="https://wa.me/919781265400"
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
                    gap-2.5
                    px-3.5
                    py-2.5
                    md:px-4
                    md:py-2.5
                    bg-[#1FAF68]
                    rounded-full
                    text-white
                    whatsapp-float
                "
                aria-label="Chat with us on WhatsApp"
            >
                <span
                    className="
                        absolute
                        inset-0
                        rounded-full
                        border
                        border-[#1FAF68]
                        pointer-events-none
                        whatsapp-ring
                    "
                />

                <svg
                    viewBox="0 0 32 32"
                    className="relative z-10 h-7 w-7 fill-none stroke-white md:h-8 md:w-8"
                    strokeWidth="2.25"
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

                <span className="relative z-10 whitespace-nowrap text-base font-semibold tracking-tight md:text-lg">
                    Chat with us
                </span>
            </a>
        </>
    );
};

export default WhatsAppButton;