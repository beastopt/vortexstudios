
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import TimelineSection from "@/components/TimelineSection";
import ContactSection from "@/components/ContactSection";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

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
          <motion.section
            className="section-container bg-vortex-darkest/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="max-w-3xl mx-auto">
              <NewsletterSubscribe />
            </div>
          </motion.section>
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
