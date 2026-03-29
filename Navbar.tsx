import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Plane } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <Plane className="w-8 h-8 text-brand-gold transition-colors" />
              <span className="font-serif text-2xl font-bold tracking-wider uppercase text-white">
                Eagles Fly
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Curated travel experiences for the modern explorer. We design premium, unforgettable journeys to the world's most exclusive destinations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-brand-gold transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-white/60 hover:text-brand-gold transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-white/60 hover:text-brand-gold transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-white/60 hover:text-brand-gold transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-brand-gold uppercase tracking-wider">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/destinations" className="text-white/70 hover:text-white transition-colors text-sm">Destinations</Link></li>
              <li><Link to="/packages" className="text-white/70 hover:text-white transition-colors text-sm">Packages & Deals</Link></li>
              <li><Link to="/custom-trip" className="text-white/70 hover:text-white transition-colors text-sm">Custom Trip Builder</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/blog" className="text-white/70 hover:text-white transition-colors text-sm">Travel Guides</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-brand-gold uppercase tracking-wider">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/faq" className="text-white/70 hover:text-white transition-colors text-sm">FAQ</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="/terms" className="text-white/70 hover:text-white transition-colors text-sm">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-white/70 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/account" className="text-white/70 hover:text-white transition-colors text-sm">My Account</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-brand-gold uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">123 Luxury Avenue, Suite 400<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-white/70 text-sm">+1 (800) 555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-white/70 text-sm">concierge@eaglesfly.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} Eagles Fly Travel Agency. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-white/50 text-xs">Secure Payments</span>
            {/* Add payment icons here if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
}
