
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import TimelineSection from "@/components/TimelineSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <TimelineSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
