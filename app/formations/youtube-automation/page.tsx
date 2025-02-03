import { Navbar } from "@/app/components/Navbar";
import { HeroSection } from "./_components/HeroSection";
import { ProgramContent } from "./_components/ProgramContent";
import { ProgramSection } from "./_components/ProgramSection";
import PromotionalCountdown from "@/app/components/PromotionalCountdown";

const EcomLandingPage = () => {
    return (
      <div>
        <Navbar />
        <HeroSection />
        <ProgramSection />
        <ProgramContent />
        <PromotionalCountdown />
      </div>
    );
  };
  
  export default EcomLandingPage;