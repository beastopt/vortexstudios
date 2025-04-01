
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const socials = [
  { name: 'GitHub', href: 'https://github.com/vortexstudios', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/vortexstudios', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/vortexstudios', icon: Twitter },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/70 dark:bg-vortex-darkest/70 backdrop-blur-lg py-2 shadow-md' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-display font-bold gradient-text">
                VortexStudios
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium hover:text-vortex-purple dark:hover:text-vortex-light-purple transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            
            <div className="flex items-center space-x-4">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-vortex-purple dark:hover:text-vortex-light-purple transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{item.name}</span>
                  </a>
                );
              })}
              <div className="border-l border-border h-6 mx-1" />
              <ThemeToggle />
            </div>
          </div>
          
          <div className="flex md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 transform transition-all ease-in-out duration-300 md:hidden',
          mobileMenuOpen 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-full opacity-0'
        )}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" 
          onClick={() => setMobileMenuOpen(false)} 
        />
        <nav className="fixed top-0 right-0 bottom-0 flex w-3/4 max-w-xs flex-col overflow-y-auto glass-panel py-6 px-6 shadow-xl">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-display font-bold gradient-text">
              VortexStudios
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="mt-2 space-y-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium hover:text-vortex-purple dark:hover:text-vortex-light-purple"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="mt-auto pt-6 flex justify-center space-x-6">
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-vortex-purple dark:hover:text-vortex-light-purple"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{item.name}</span>
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
