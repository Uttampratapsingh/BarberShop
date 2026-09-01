import CoursesGrid from "./CoursesGrid";
import GoldenCareerPath from "./GoldenCareerPath";
import GoldenEducationStandards from "./GoldenEducationStandards";
import OurCourses from "./OurCourses";

export default function CoursesPage(){
  return (
    <main className="min-h-screen bg-black text-white flex items-start">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-12">
        <OurCourses/>
        <CoursesGrid/>
        <GoldenEducationStandards/>
        <GoldenCareerPath/>
      </div>
    </main>
  )
}
