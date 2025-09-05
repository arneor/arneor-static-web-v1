import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServicesSection from "@/components/sections/ServicesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
