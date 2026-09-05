import BeautyJourney from "./BeautyJourney";
import BridalHero from "./BridalHero";
import BridalServices from "./BridalService";
import BridalServicesDetails from "./BridalServicesDetails";
import CertificationPrograms from "./CertificationPrograms";
import CertificationProgramsDetails from "./CertificationProgramsDetails";

export default function Page() {
  return (
    <main className="home-page min-h-screen bg-[#713600] text-[#FDFBD4] flex flex-col items-start">
      {/* Full-bleed hero */}
      <BridalHero />
      <BridalServices/>
      <BridalServicesDetails/>
      <CertificationPrograms/>
      <CertificationProgramsDetails/>
      <BeautyJourney/>
    </main>
  );
}