import BridalPortfolio from "./BridalPortfolio";
import GoldenEraCTA from "./GoldenEraCTA";
import GoldenMasterpieces from "./GoldenMasterpieces";
import GoldenReviews from "./GoldenReviews";
import PartyPortfolio from "./PartyPortfolio";

export default function OurWorkPage(){
  return (
    <main className="our-work-page min-h-screen bg-black text-white items-start">
        <GoldenMasterpieces/>
        <div className="our-work-divider" aria-hidden="true"><span /></div>
        <BridalPortfolio/>
        <div className="our-work-divider" aria-hidden="true"><span /></div>
        <PartyPortfolio/>
        <div className="our-work-divider" aria-hidden="true"><span /></div>
        <GoldenReviews/>
        <div className="our-work-divider" aria-hidden="true"><span /></div>
        <GoldenEraCTA/>
        <div className="our-work-divider" aria-hidden="true"><span /></div>

        <style>{`
          .our-work-page > section {
            width: 100%;
            max-width: none;
            margin-left: 0;
            margin-right: 0;
            box-sizing: border-box;
          }

          .our-work-page > section:first-child {
            margin-top: 0;
          }

          .our-work-divider {
            position: relative;
            width: calc(100% - 2.5rem);
            max-width: 1460px;
            height: 1px;
            margin: 0 auto;
            overflow: hidden;
            background: rgba(184, 155, 94, 0.3);
          }

          .our-work-divider span {
            position: absolute;
            top: 0;
            left: -20%;
            width: 20%;
            height: 100%;
            background: linear-gradient(90deg, transparent, #d4af37, transparent);
            animation: ourWorkDividerShine 3.2s ease-in-out infinite;
          }

          @media (min-width: 640px) {
            .our-work-divider {
              width: calc(100% - 4rem);
            }
          }

          @media (min-width: 768px) {
            .our-work-divider {
              width: calc(100% - 6rem);
            }
          }

          @media (min-width: 1024px) {
            .our-work-divider {
              width: calc(100% - 8rem);
            }
          }

          @keyframes ourWorkDividerShine {
            0%, 35% {
              transform: translateX(0);
            }
            70%, 100% {
              transform: translateX(600%);
            }
          }
        `}</style>
    </main>
  )
}
