import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, Menu, X, Award, Stethoscope, Clock3 } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface HeaderProps {
  onScrollTo: (selector: string) => void;
}

export default function Header({ onScrollTo }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "#home" },
    { label: "Services", id: "#services" },
    { label: "Why Choose Us", id: "#why-choose-us" },
    { label: "About Dr. Syed", id: "#about" },
    { label: "Clinic Timings", id: "#timings" },
    { label: "FAQs", id: "#faqs" },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onScrollTo(id);
  };

  return (
    <>
      {/* Dynamic Announcement Banner */}
      <div className="bg-rose-900 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium relative z-50 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-rose-100 text-rose-950 font-bold text-[10px] tracking-wider uppercase animate-pulse">
            JIPMER Specialist
          </span>
          <span>Don't ignore persistent stomach, gas or acidity issues. Consult Kashmir's DM expert.</span>
          <button 
            type="button"
            onClick={() => onScrollTo('#appointment')} 
            className="underline underline-offset-2 hover:text-rose-200 transition-colors font-semibold ml-1 cursor-pointer"
          >
            Pre-Book Consultation &rarr;
          </button>
        </div>
      </div>

      <header 
        id="app-header"
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-3' 
            : 'bg-white py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Branding */}
          <div 
            onClick={() => handleLinkClick('#home')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-700 border border-rose-100 group-hover:bg-rose-100 transition-colors">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-sans font-bold text-gray-900 text-base sm:text-lg tracking-tight">
                  Dr. Syed Ishfaq
                </span>
                <span className="inline-block px-1.5 py-0.5 text-[9px] font-bold tracking-wider uppercase rounded bg-rose-900 text-white leading-none">
                  DM
                </span>
              </div>
              <p className="text-[11px] text-gray-500 font-medium tracking-wide">
                Gastroenterologist • Sopore
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="text-gray-600 hover:text-rose-900 font-medium text-sm transition-colors relative py-1 cursor-pointer class-nav-link"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-gray-700 hover:text-rose-950 font-semibold text-sm hover:bg-gray-50 transition-colors border border-gray-200"
              id="header-call-btn"
            >
              <Phone className="w-4 h-4 text-rose-800" />
              <span>Call Doctor</span>
            </a>
            <button
              onClick={() => onScrollTo('#appointment')}
              className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              id="header-appointment-btn"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a 
              href={`tel:${CONTACT_INFO.phone}`}
              className="sm:hidden p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              aria-label="Call Doctor"
              id="mobile-phone-shortcut"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            id="mobile-navigation-drawer"
            className="lg:hidden bg-white border-b border-gray-200 overflow-hidden relative z-30"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-rose-50 hover:text-rose-950 font-medium text-sm transition-all"
                >
                  {item.label}
                </button>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl border border-gray-200 text-gray-700 font-semibold text-xs text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-rose-800" />
                  Call Now
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onScrollTo('#appointment');
                  }}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-emerald-700 text-white font-semibold text-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Book on WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
