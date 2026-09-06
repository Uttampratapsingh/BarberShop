"use client";

import { FormEvent, useEffect, useState } from "react";

const programs = [
  "Skin Care Expertise",
  "Bridal Makeup Mastery",
  "Nail Artistry",
  "Hair Designing",
];

export default function GoldenCareerPath() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => window.clearTimeout(timer);
  }, []);

  function closeModal() {
    if (!isSubmitting) {
      setIsModalOpen(false);
      setIsSubmitted(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  // console.log("=================================");
  // console.log("🚀 FORM SUBMISSION STARTED");
  // console.log("=================================");

  setIsSubmitting(true);

  const form = event.currentTarget;

  // console.log("📋 Form element:", form);

  const formData = new FormData(form);

  // console.log("📦 Raw FormData:");

  // for (const [key, value] of formData.entries()) {
  //   // console.log(`   ${key}:`, value);
  // }

  const data = {
    formType: "career",
    fullName: formData.get("fullName"),
    contactNumber: formData.get("contactNumber"),
    program: formData.get("program"),
  };

  // console.log("📤 Data being sent:");
  // console.log(data);

  const url =
    "https://script.google.com/macros/s/AKfycbwcRoh_sjn5QCWqNndV9VUMDLtrYflIF__MPdzH3iWPqPbzppv6rkda1VeRLsExV1D9HA/exec";

  // console.log("🌐 Google Apps Script URL:");
  // console.log(url);

  const requestBody = JSON.stringify(data);

  // console.log("📝 JSON body:");
  // console.log(requestBody);
  // console.log("📝 JSON body:");
  // console.log(requestBody);

  try {
    // console.log("⏳ Sending request...");

    const response = await fetch(url, {
      method: "POST",
      mode: "no-cors",
      body: requestBody,
    });

    // console.log("✅ Fetch completed");
    // console.log("📡 Response object:", response);
    // console.log("📊 Response type:", response.type);
    // console.log("📊 Response status:", response.status);
    // console.log("📊 Response OK:", response.ok);

    try {
      const responseText = await response.text();
      // console.log("📄 Response body:", responseText);
    } catch (responseError) {
      // console.log("⚠️ Could not read response body:", responseError);
    }

    // console.log("✅ Assuming request was sent");
    // console.log("=================================");

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      // console.log("🔄 Resetting form");

      setIsModalOpen(false);
      setIsSubmitted(false);
      form.reset();
    }, 1800);

  } catch (error) {
    // console.error("❌ FETCH ERROR");
    // console.error(error);

    setIsSubmitting(false);

    alert(
      "Submission failed. Check the browser console for details."
    );
  }
}

  return (
    <section className="golden-career-path relative min-h-[640px] overflow-hidden bg-[#713600] px-5 sm:px-8">
      {/* Background */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(180deg,#713600_0%,#713600_100%)]" /> */}

      {/* Very subtle golden glow */}
      <div
        className={`pointer-events-none absolute left-1/2 top-[42%] h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px] transition-all duration-1000 ${
          hovered ? "bg-[#C05800]/[0.05]" : "bg-[#C05800]/[0.018]"
        }`}
      />

      {/* Content */}
      <div className=" border-t-1 border-[#C05800] relative z-10 mx-auto flex min-h-[640px] max-w-[1500px] flex-col items-center justify-center text-center">
        {/* Heading */}
        <h1
          className={`text-[44px] font-extrabold leading-[1.05] tracking-[-0.05em] text-[#38240D] transition-all duration-1000 ease-out sm:text-[54px] md:text-[64px] lg:text-[68px] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Forge Your Golden Career Path
        </h1>

        {/* Description */}
        <p
          className={`mt-[42px] max-w-[930px] text-[18px] font-normal leading-[1.65] tracking-[-0.015em] text-[#713600]/80 transition-all duration-1000 delay-150 ease-out sm:text-[20px] md:text-[22px] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Begin your transformation with our gilded education programs and
          unlock premium
          <br className="hidden sm:block" />
          career opportunities.
        </p>

        {/* Button */}
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          // onMouseEnter={() => setHovered(true)}
          // onMouseLeave={() => setHovered(false)}
          className={`group mt-[67px] flex h-[80px] border border-[#C05800] w-[250px] items-center justify-center rounded-full bg-[#713600]  text-[20px] font-bold tracking-[-0.02em] text-[#FDFBD4] shadow-[0_10px_35px_rgba(192,88,0,0.08)] transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:bg-[#38240D] hover:shadow-[0_18px_45px_rgba(192,88,0,0.2)] active:scale-[0.98] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="transition-transform duration-300 text-bold text-xl group-hover:scale-[1.03]">
            Enroll Now
          </span>
        </button>
      </div>

      {/* Button shimmer */}
      {/* <div
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[80px] w-[250px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full ${
          hovered ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      >
        <div
          className={`absolute inset-y-0 left-[-60%] w-[30%] skew-x-[-20deg] bg-[#FDFBD4]/[20] transition-transform duration-[900ms] ${
            hovered ? "translate-x-[430%]" : "translate-x-0"
          }`}
        />
      </div> */}

      {/* Bottom border */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-[#713600]/30" />

      <style>{`
        .golden-career-path > .relative > button {
          background-color: #713600 !important;
          border-color: #C05800 !important;
          color: #FDFBD4 !important;
        }

        .golden-career-path > .relative > button:hover {
          background-color: #38240D !important;
        }

        .golden-career-path .program-submit-button {
          background-color: #713600 !important;
          border: 1px solid #C05800 !important;
          color: #FDFBD4 !important;
        }

        .golden-career-path .program-submit-button:hover {
          background-color: #38240D !important;
        }
      `}</style>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#713600]/80 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="admissions-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <div className="relative w-full max-w-[540px] rounded-[22px] border border-[#C05800]/45 bg-[#713600] p-6 text-left shadow-[0_24px_90px_rgba(56, 36, 13, 0.55)] sm:p-9">
            <button
              type="button"
              onClick={closeModal}
              disabled={isSubmitting}
              aria-label="Close admissions form"
              className="absolute right-5 top-4 flex h-9 w-9 items-center justify-center rounded-full text-2xl leading-none text-[#FDFBD4]/70 transition-colors hover:bg-[#C05800]/15 hover:text-[#FDFBD4] disabled:cursor-not-allowed disabled:opacity-40"
            >
              &times;
            </button>

            {isSubmitted ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#C05800] text-4xl text-[#C05800] animate-[pop-in_500ms_ease-out]">
                  &#10003;
                </div>
                <h2 id="admissions-title" className="text-3xl font-bold text-[#FDFBD4]">
                  Application Submitted
                </h2>
                <p className="mt-3 text-base text-[#FDFBD4]/75">
                  Your journey to excellence has begun.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-7 pr-8">
                  <h2 id="admissions-title" className="text-3xl font-bold text-[#38240D] sm:text-4xl">
                    Elite Admissions Portal
                  </h2>
                  <p className="mt-2 text-base text-[#713600]/60">
                    Begin your journey to excellence
                  </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-[#FDFBD4]">Full Name</span>
                    <input
                      required
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      className="h-14 w-full rounded-xl border border-[#C05800]/45 bg-[#FDFBD4] px-4 text-base text-[#713600] outline-none transition-colors placeholder:text-[#713600] focus:border-[#C05800] focus:ring-2 focus:ring-[#C05800]/20"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-[#FDFBD4]">Contact Number</span>
                    <input
                      required
                      name="contactNumber"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 12345-67890"
                      className="h-14 w-full rounded-xl border border-[#C05800]/45 bg-[#FDFBD4] px-4 text-base text-[#713600] outline-none transition-colors placeholder:text-[#713600] focus:border-[#C05800] focus:ring-2 focus:ring-[#C05800]/20"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-[#FDFBD4]">Program Selection</span>
                    <select
                      required
                      name="program"
                      defaultValue=""
                      className="h-14 w-full rounded-xl border border-[#C05800]/45 bg-[#FDFBD4] px-4 text-base text-[#713600] outline-none transition-colors focus:border-[#713600] focus:ring-2 focus:ring-[#C05800]/20"
                    >
                      <option value="" disabled>
                        Select your program
                      </option>
                      {programs.map((program) => (
                        <option key={program} value={program}>
                          {program}
                        </option>
                      ))}
                    </select>
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="program-submit-button flex h-14 w-full items-center justify-center rounded-xl bg-[#713600] text-base font-bold text-[#FDFBD4] transition-all hover:bg-[#38240D] hover:shadow-[0_10px_28px_rgba(192,88,0,0.22)] disabled:cursor-wait disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-3">
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#C05800]/60 border-t-[#C05800] text-[#713600]" />
                        Submitting Application...
                      </span>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}