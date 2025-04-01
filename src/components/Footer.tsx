
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NewsletterSubscribe from './NewsletterSubscribe';

const Footer = () => {
  return (
    <footer className="bg-vortex-darkest">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-display font-bold gradient-text">VortexStudios</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-xs">
              Creating immersive digital experiences with cutting-edge web technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/vortexstudios"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-vortex-purple transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com/vortexstudios"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-vortex-purple transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="mailto:contact@vortexstudios.com"
                className="text-muted-foreground hover:text-vortex-purple transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/#about" className="text-muted-foreground hover:text-vortex-purple transition-colors">
                About
              </Link>
              <Link to="/#projects" className="text-muted-foreground hover:text-vortex-purple transition-colors">
                Projects
              </Link>
              <Link to="/#skills" className="text-muted-foreground hover:text-vortex-purple transition-colors">
                Skills
              </Link>
              <Link to="/products" className="text-muted-foreground hover:text-vortex-purple transition-colors">
                Products
              </Link>
              <Link to="/#contact" className="text-muted-foreground hover:text-vortex-purple transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          
          <div className="col-span-1">
            <NewsletterSubscribe />
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} VortexStudios. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-vortex-purple transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-vortex-purple transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
