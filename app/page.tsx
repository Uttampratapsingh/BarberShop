import BeautyJourney from "./BeautyJourney";
import BridalHero from "./BridalHero";
import BridalServices from "./BridalService";
import BridalServicesDetails from "./BridalServicesDetails";
import CertificationPrograms from "./CertificationPrograms";
import CertificationProgramsDetails from "./CertificationProgramsDetails";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-start">
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