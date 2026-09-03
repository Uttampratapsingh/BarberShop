import BridalJourneyCTA from "./BridalJourneyCTA";
import OurServices from "./OurServices";
import WhyChooseUs from "./WhyChooseUs";

export default function ServicesPage(){
  return (
    <main className="min-h-screen bg-black text-white flex items-start mt-10">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-12">
        <OurServices/>
        <WhyChooseUs/>
        <BridalJourneyCTA/>
      </div>
    </main>
  )
}
