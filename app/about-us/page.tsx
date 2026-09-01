import AboutLegacy from "./AboutLegacy";
import BeautyFeatures from "./BeautyFeatures";
import CommitmentSection from "./CommitmentSection";
import OurFoundation from "./OurFoundation";
import TransformationCTA from "./TransformationCTA";

export default function AboutUsPage(){
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-start">
      {/* Full-bleed about hero */}
      <AboutLegacy />

      {/* Page content container */}
      <div className="mx-auto w-full max-w-[1200px] px-6 py-12">
        <OurFoundation />
        <BeautyFeatures/>
        <CommitmentSection/>
        <TransformationCTA/>
      </div>
    </main>
  )
}
