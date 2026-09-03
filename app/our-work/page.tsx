import BridalPortfolio from "./BridalPortfolio";
import GoldenEraCTA from "./GoldenEraCTA";
import GoldenMasterpieces from "./GoldenMasterpieces";
import GoldenReviews from "./GoldenReviews";
import PartyPortfolio from "./PartyPortfolio";

export default function OurWorkPage(){
  return (
    <main className="our-work-page min-h-screen bg-black text-white items-start">
        <GoldenMasterpieces/>
        <BridalPortfolio/>
        <PartyPortfolio/>
        <GoldenReviews/>
        <GoldenEraCTA/>
    </main>
  )
}
