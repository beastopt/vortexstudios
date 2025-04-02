import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X, Linkedin, Twitter, LogIn, User, LogOut, Settings } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = [
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/#contact' },
];

const socials = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/vortexstudios', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/vortexstudios', icon: Twitter },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-3xl font-display font-bold gradient-text">
                VortexStudios
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-base font-medium hover:text-vortex-purple dark:hover:text-vortex-light-purple transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-vortex-purple dark:hover:text-vortex-light-purple transition-colors"
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
              <ThemeToggle />
              {currentUser ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-2">
                      <div className="w-10 h-10 rounded-full bg-vortex-purple/20 flex items-center justify-center">
                        <User className="h-5 w-5 text-vortex-vivid" />
                      </div>
                      <span className="font-medium">{currentUser.displayName || currentUser.email}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem onClick={() => navigate('/profile')}>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/settings')}>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link to="/login">
                  <Button variant="outline" size="default" className="flex items-center h-10">
                    <LogIn className="h-5 w-5 mr-2" />
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
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
          "md:hidden transition-all duration-300",
          isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="px-4 py-3 space-y-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block text-sm font-medium hover:text-vortex-purple dark:hover:text-vortex-light-purple transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-3 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-vortex-purple dark:hover:text-vortex-light-purple transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
                <ThemeToggle />
              </div>
              {currentUser ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-2">
                      <div className="w-10 h-10 rounded-full bg-vortex-purple/20 flex items-center justify-center">
                        <User className="h-5 w-5 text-vortex-vivid" />
                      </div>
                      <span className="font-medium">{currentUser.displayName || currentUser.email}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem onClick={() => navigate('/profile')}>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/settings')}>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link to="/login">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
