import { LanguageProvider } from './context/LanguageContext';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import ProblemSection from './sections/ProblemSection';
import BlueZonesSection from './sections/BlueZonesSection';
import VisionSection from './sections/VisionSection';
import ArchitectsSection from './sections/ArchitectsSection';
import WellnessSection from './sections/WellnessSection';
import MasterplanSection from './sections/MasterplanSection';
import GallerySection from './sections/GallerySection';
import InvestmentSection from './sections/InvestmentSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FinalCTASection from './sections/FinalCTASection';
import FooterSection from './sections/FooterSection';

function App() {
  return (
    <LanguageProvider>
      <div className="relative">
        {/* Grain Overlay */}
        <div className="grain-overlay" />

        {/* Vignette Overlay */}
        <div className="vignette-overlay" />

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="relative">
          <HeroSection />
          <ProblemSection />
          <BlueZonesSection />
          <InvestmentSection />
          <VisionSection />
          <ArchitectsSection />
          <WellnessSection />
          <MasterplanSection />
          <GallerySection />
          <TestimonialsSection />
          <FinalCTASection />
          <FooterSection />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
