export default function GoldenMasterpieces() {
  return (
    <section className="relative w-full overflow-hidden rounded-[6px] mt-10">
      <div
        className="
          relative mx-auto flex min-h-[420px] w-full max-w-[1460px] items-center justify-center
          px-6
        "
      >
        {/* Subtle top glow */}
        {/* <div
          className="
            pointer-events-none absolute inset-0
            bg-[radial-gradient(ellipse_at_center_top,rgba(192,88,0,0.10)_0%,transparent_5%)]
          "
        /> */}

        {/* Content */}
        <div className="relative z-10 -mt-2 text-center">
          <h1
            className="
              font-sans font-extrabold tracking-[-0.045em]
              text-[52px] leading-[1.05]
              text-[#38240D]
              sm:text-[68px]
              md:text-[82px]
              lg:text-[92px]
              xl:text-[96px]
            "
          >
            Golden Masterpieces
          </h1>

          <p
            className="
              mt-7
              font-sans font-normal
              text-[18px] leading-none
              tracking-[-0.025em]
              text-[#713600]
              sm:text-[21px]
              md:text-[25px]
              lg:text-[27px]
            "
          >
            Crafting timeless beauty with gilded precision
          </p>
        </div>
      </div>
    </section>
  );
}