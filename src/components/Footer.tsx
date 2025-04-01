
import { ArrowUpIcon } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="border-t border-border py-12 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <span className="text-xl font-display font-bold gradient-text">
                VortexStudios
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              Creating immersive digital experiences and cutting-edge web applications with a focus on interaction and visual excellence.
            </p>
          </div>
          
          <div className="flex flex-col items-end">
            <button
              onClick={scrollToTop}
              className="mb-4 p-2 rounded-full bg-secondary hover:bg-vortex-purple/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUpIcon className="h-5 w-5" />
            </button>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} VortexStudios. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
