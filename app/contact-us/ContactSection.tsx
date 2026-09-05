"use client";

import { FormEvent, useEffect, useState } from "react";

export default function ContactSection() {
  const [visible, setVisible] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => window.clearTimeout(timer);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setSent(true);

    window.setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  return (
    <section className="contact-section relative min-h-screen overflow-hidden bg-[#FDFBD4] px-4 py-10 sm:px-6 lg:px-[8.3%]">
      {/* Background */}
      <div className="contact-section-background pointer-events-none absolute inset-0 bg-[#FDFBD4]" />

      <div className="pointer-events-none absolute left-1/3 top-[-180px] h-[500px] w-[700px] rounded-full bg-[#C05800]/[0.025] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1565px]">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,2.08fr)_minmax(400px,1fr)] lg:gap-4">
          {/* LEFT */}
          <div
            className={`relative overflow-hidden rounded-[15px] border border-[#713600] bg-[#713600] transition-all duration-1000 ease-out ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {/* Visit Studio */}
            <div className="flex min-h-[355px] flex-col items-center justify-center px-6 text-center sm:px-10">
              <h2 className="text-[29px] font-extrabold leading-none tracking-[-0.04em] text-[#C05800] sm:text-[32px]">
                Visit Our Studio
              </h2>

              <p className="mt-[31px] max-w-[760px] text-[16px] leading-[1.45] text-[#C05800] sm:text-[17px]">
                Come visit us at our studio in Garhshankar. Click below to open
                the location in Google Maps.
              </p>

              <a
                href="https://maps.app.goo.gl/36g3yJB8tT1NUc8v9?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action group mt-[27px] inline-flex h-[53px] items-center justify-center gap-3 rounded-full border border-[#C05800] bg-[#713600] px-[28px] text-[16px] font-bold text-[#FDFBD4] shadow-[0_8px_25px_rgba(56, 36, 13, 0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C05800] hover:bg-[#38240D] hover:text-[#FDFBD4] hover:shadow-[0_12px_35px_rgba(56, 36, 13, 0.3)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[20px] w-[20px] transition-transform duration-300 group-hover:-translate-y-1"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                </svg>

                <span>Open in Google Maps</span>

                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M7 4l5 6-5 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#713600]" />

            {/* Contact details */}
            <div className="grid grid-cols-1 gap-10 px-[25px] py-[28px] sm:grid-cols-2 sm:px-[26px]">
              <div>
                <h3 className="text-[14px] font-bold uppercase tracking-[0.09em] text-[#C05800]">
                  Address
                </h3>

                <p className="mt-[12px] max-w-[390px] text-[15px] leading-[1.55] text-[#C05800] sm:text-[16px]">
                  Bulewal Morh, Near Kulwinder DJ,
                  <br />
                  Balachur-Bhaddi Road, Balachur,
                  <br />
                  Punjab 144521
                </p>
              </div>

              <div className="space-y-[25px]">
                <div>
                  <h3 className="text-[14px] font-bold uppercase tracking-[0.09em] text-[#C05800]">
                    Email
                  </h3>

                  <a
                    href="mailto:tarandeep.singh01@gmail.com"
                    className="mt-[12px] inline-block text-[15px] text-[#C05800] transition-colors duration-300 hover:text-[#C05800] sm:text-[16px]"
                  >
                    rajjpal33@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-[14px] font-bold uppercase tracking-[0.09em] text-[#C05800]">
                    Phone
                  </h3>

                  <a
                    href="tel:+919781265400"
                    className="mt-[12px] inline-block text-[15px] text-[#C05800] transition-colors duration-300 hover:text-[#C05800] sm:text-[16px]"
                  >
                    +91 97812 65400
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className={`relative overflow-hidden rounded-[15px] border border-[#713600] bg-[#713600] px-[29px] py-[29px] transition-all duration-1000 ease-out delay-150 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-[190px] w-[190px] rounded-full bg-[#C05800]/[0.03] blur-[75px]" />

            <div className="relative z-10">
              <h2 className="text-[24px] font-extrabold tracking-[-0.03em] text-[#C05800]">
                Message Us
              </h2>

              <p className="mt-[17px] text-[15px] text-[#C05800] sm:text-[16px]">
                Let's craft something beautiful together
              </p>

              <form onSubmit={handleSubmit} className="mt-[25px]">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-[14px] font-semibold text-[#C05800]"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="mt-[9px] h-[54px] w-full rounded-[9px] border border-[#713600] bg-transparent px-[17px] text-[15px] text-[#C05800] outline-none placeholder:text-[#8A5A2B] transition-all duration-300 focus:border-[#C05800] focus:shadow-[0_0_0_2px_rgba(192,88,0,0.06)]"
                  />
                </div>

                {/* Email */}
                <div className="mt-[25px]">
                  <label
                    htmlFor="email"
                    className="text-[14px] font-semibold text-[#C05800]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="mt-[9px] h-[54px] w-full rounded-[9px] border border-[#713600] bg-transparent px-[17px] text-[15px] text-[#C05800] outline-none placeholder:text-[#8A5A2B] transition-all duration-300 focus:border-[#C05800] focus:shadow-[0_0_0_2px_rgba(192,88,0,0.06)]"
                  />
                </div>

                {/* Message */}
                <div className="mt-[25px]">
                  <label
                    htmlFor="message"
                    className="text-[14px] font-semibold text-[#C05800]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Share your vision with us..."
                    className="mt-[9px] min-h-[129px] w-full resize-none rounded-[9px] border border-[#713600] bg-transparent px-[17px] py-[14px] text-[15px] leading-[1.45] text-[#C05800] outline-none placeholder:text-[#8A5A2B] transition-all duration-300 focus:border-[#C05800] focus:shadow-[0_0_0_2px_rgba(192,88,0,0.06)]"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="contact-action group mt-[29px] flex h-[48px] w-full items-center justify-center rounded-[8px] !bg-[#713600] text-[16px] font-bold !text-[#FDFBD4] transition-all duration-300 hover:-translate-y-1 hover:!bg-[#38240D] hover:shadow-[0_12px_30px_rgba(192,88,0,0.28)] active:translate-y-0"
                >
                  {sent ? (
                    <span className="flex items-center gap-2 animate-pulse">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#713600] text-xs">
                        ✓
                      </span>
                      Message Sent
                    </span>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>

                <p className="mt-[18px] text-center text-[13px] text-[#A85A1A]">
                  We typically respond within 24 golden hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-[#713600]/30" />
      <style>{`
        .contact-section,
        .contact-section .contact-section-background {
          background: #FDFBD4 !important;
          background-image: none !important;
        }

        .contact-section h2,
        .contact-section h3 {
          color: #38240D !important;
        }

        .contact-section p,
        .contact-section label,
        .contact-section input,
        .contact-section textarea,
        .contact-section select,
        .contact-section a:not(.contact-action) {
          color: #713600 !important;
        }

        .contact-section .contact-action,
        .contact-section .contact-action:hover {
          color: #FDFBD4 !important;
        }

        .contact-section .contact-action {
          background-color: #713600 !important;
        }

        .contact-section .contact-action:hover {
          background-color: #38240D !important;
        }
      `}</style>
    </section>
  );
}