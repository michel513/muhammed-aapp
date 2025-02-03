import { CourseActionSection } from "./components/CourseActionSection";
import { CourseSection } from "./components/CourseSection";
import { FeaturesSection } from "./components/FeaturesSection";
import Footer from "./components/Footer";
import FreeCoursesSection from "./components/FreeCoursesSection";
import { HeroSection } from "./components/HeroSection";
import { MissionSection } from "./components/MissionSection";
import { Navbar } from "./components/Navbar";
import { TestimonialsSection } from "./components/TestimonialesSection";


export default function Home() {
  return (
    <div className="bg-[#1a1033] min-h-screen">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <CourseSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FreeCoursesSection />
      <CourseActionSection />
      <Footer />
    </div>
  );
}
