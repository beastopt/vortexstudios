
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownIcon, SparklesIcon } from 'lucide-react';

const taglines = [
  "Crafting digital experiences that transcend ordinary interfaces",
  "Where innovative design meets cutting-edge development",
  "Transforming ideas into immersive digital reality",
  "Pioneering the future of web experiences through creative technology",
  "Blending artistic vision with technical excellence",
  "Creating memorable digital journeys through thoughtful design",
  "Pushing the boundaries of what's possible on the web",
  "Architecting digital solutions that inspire and engage",
  "Where imagination becomes interactive experience",
  "Elevating brands through exceptional digital craftsmanship"
];

export default function HeroSection() {
  const [tagline, setTagline] = useState("");

  useEffect(() => {
    // Select a random tagline when the component mounts
    const randomIndex = Math.floor(Math.random() * taglines.length);
    setTagline(taglines[randomIndex]);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-vortex-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-vortex-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-vortex-purple/30 bg-vortex-purple/5 text-sm mb-8 animate-fade-in">
            <SparklesIcon className="w-4 h-4 mr-2 text-vortex-purple" />
            <span>Welcome to the digital universe of VortexStudios</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Creating <span className="gradient-text">immersive</span> digital experiences
          </h1>
          
          <div className="h-24 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {tagline}
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button className="bg-vortex-purple hover:bg-vortex-vivid text-white px-8 py-6 rounded-lg text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
              Get In Touch
            </Button>
            <Button variant="outline" className="px-8 py-6 rounded-lg text-lg" onClick={scrollToProjects}>
              View Projects <ArrowDownIcon className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="mt-24 flex justify-center animate-bounce-soft">
          <div className="rounded-full border-2 border-primary/50 p-2">
            <ArrowDownIcon className="w-6 h-6 text-primary/70" />
          </div>
        </div>
      </div>
    </section>
  );
}
