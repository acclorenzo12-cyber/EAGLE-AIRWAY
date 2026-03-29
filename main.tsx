import { Link } from 'react-router-dom';
import { Menu, X, Plane } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-blue/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Plane className={`w-8 h-8 ${isScrolled ? 'text-brand-gold' : 'text-white'} transition-colors`} />
            <span className={`font-serif text-2xl font-bold tracking-wider uppercase ${isScrolled ? 'text-white' : 'text-white'}`}>
              Eagles Fly
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/destinations" className="text-white/90 hover:text-brand-gold transition-colors text-sm font-medium uppercase tracking-wide">Destinations</Link>
            <Link to="/packages" className="text-white/90 hover:text-brand-gold transition-colors text-sm font-medium uppercase tracking-wide">Packages</Link>
            <Link to="/custom-trip" className="text-white/90 hover:text-brand-gold transition-colors text-sm font-medium uppercase tracking-wide">Custom Trip</Link>
            <Link to="/about" className="text-white/90 hover:text-brand-gold transition-colors text-sm font-medium uppercase tracking-wide">About</Link>
            <Link to="/book" className="bg-brand-gold hover:bg-brand-gold-light text-brand-blue px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-brand-gold transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-blue shadow-xl border-t border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <Link to="/destinations" className="text-white hover:text-brand-gold block px-3 py-3 text-base font-medium uppercase tracking-wide border-b border-white/5">Destinations</Link>
            <Link to="/packages" className="text-white hover:text-brand-gold block px-3 py-3 text-base font-medium uppercase tracking-wide border-b border-white/5">Packages</Link>
            <Link to="/custom-trip" className="text-white hover:text-brand-gold block px-3 py-3 text-base font-medium uppercase tracking-wide border-b border-white/5">Custom Trip</Link>
            <Link to="/about" className="text-white hover:text-brand-gold block px-3 py-3 text-base font-medium uppercase tracking-wide border-b border-white/5">About</Link>
            <Link to="/book" className="bg-brand-gold text-brand-blue block text-center px-3 py-3 rounded-md text-base font-bold uppercase tracking-wide mt-4">
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
