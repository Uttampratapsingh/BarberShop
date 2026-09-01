import BridalPortfolio from "./BridalPortfolio";
import GoldenEraCTA from "./GoldenEraCTA";
import GoldenMasterpieces from "./GoldenMasterpieces";
import GoldenReviews from "./GoldenReviews";
import PartyPortfolio from "./PartyPortfolio";

export default function OurWorkPage(){
  return (
    <main className="min-h-screen bg-black text-white flex items-start">
      <div className="mx-auto w-full px-6 py-12">
        <GoldenMasterpieces/>
        <BridalPortfolio/>
        <PartyPortfolio/>
        <GoldenReviews/>
        <GoldenEraCTA/>
      </div>
    </main>
  )
}
