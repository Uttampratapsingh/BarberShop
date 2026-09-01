export default function GoldenMasterpieces() {
  return (
    <section className="relative w-full overflow-hidden rounded-[6px] border border-white/10 bg-black">
      <div
        className="
          relative flex min-h-[520px] w-full items-center justify-center
          bg-[linear-gradient(to_bottom,#342000_0%,#1b1100_32%,#080600_68%,#000000_100%)]
          px-6
        "
      >
        {/* Subtle top glow */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-[radial-gradient(ellipse_at_center_top,rgba(255,194,0,0.10)_0%,transparent_55%)]
          "
        />

        {/* Content */}
        <div className="relative z-10 -mt-2 text-center">
          <h1
            className="
              font-sans font-extrabold tracking-[-0.045em]
              text-[52px] leading-[1.05]
              text-[#ffd21a]
              drop-shadow-[0_0_18px_rgba(255,191,0,0.08)]
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
              text-[#fff4b8]
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