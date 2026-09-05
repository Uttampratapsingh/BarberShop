import BridalJourneyCTA from "./BridalJourneyCTA";
import OurServices from "./OurServices";
import WhyChooseUs from "./WhyChooseUs";

export default function ServicesPage(){
  return (
    <main className="min-h-screen bg-[#713600] text-[#FDFBD4] flex items-start mt-10">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-12">
        <OurServices/>
        <div className="h-px w-full bg-[#C05800]" aria-hidden="true" />
        <WhyChooseUs/>
        <div className="h-px w-full bg-[#C05800]" aria-hidden="true" />
        <BridalJourneyCTA/>
      </div>
    </main>
  )
}
