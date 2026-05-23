import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, Calendar, Shield, ThumbsUp } from 'lucide-react';
import { CONTACT_INFO, CLINIC_TIMINGS } from '../data';

interface FooterProps {
  onScrollTo: (selector: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const year = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onScrollTo(id);
  };

  return (
    <footer className="bg-gray-900 text-gray-400 font-normal text-sm border-t border-gray-850" id="main-footer">
      
      {/* Upper Grid Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Dr Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <span className="font-sans font-black text-lg sm:text-xl tracking-tight">
                Dr. Syed Ishfaq
              </span>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-black uppercase bg-rose-900 border border-rose-800">
                DM
              </span>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              Expert Gastroenterology and Hepatology specialist in Sopore, Kashmir. MBBS, MD SKIMS and DM Gastroenterology JIPMER Pondicherry alumnus.
            </p>

            <div className="flex gap-3 pt-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 rounded px-2.5 py-1">
                🔒 HIPAA Compliant
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-gray-200 bg-white/5 rounded px-2.5 py-1">
                ⭐ Rated 4.9/5
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-white text-xs uppercase tracking-widest pb-2 border-b border-gray-800">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { label: "Home", id: "#home" },
                { label: "Our Services", id: "#services" },
                { label: "Why Choose Us", id: "#why-choose-us" },
                { label: "About Dr. Syed", id: "#about" },
                { label: "Schedules & Directions", id: "#timings" },
                { label: "Patient Testimonials", id: "#testimonials" },
                { label: "Frequently Questions", id: "#faqs" }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Landmarks */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-white text-xs uppercase tracking-widest pb-2 border-b border-gray-800">
              Clinic Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-rose-800 shrink-0 mt-1" />
                <span>
                  New Colony Sopore, Jammu & Kashmir 193201 <br />
                  <span className="text-[11px] text-gray-500">Near J&K Grameen Bank</span>
                </span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-rose-850 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors font-semibold">
                  {CONTACT_INFO.whatsappDisplay} (Regular Hotline)
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <MessageSquare className="w-4 h-4 text-emerald-505 shrink-0" />
                <a 
                  href={`${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent("Hello Clinic, I want to confirm clinic slot details.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors text-emerald-400 font-bold"
                >
                  Direct WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Timings Recap */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-white text-xs uppercase tracking-widest pb-2 border-b border-gray-800">
              Clinic Consultation
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              {CLINIC_TIMINGS.map((tim, idx) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <Calendar className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-gray-200">{tim.day}:</span>
                    <p className="text-[12px] text-yellow-300 font-mono font-bold">{tim.time}</p>
                  </div>
                </div>
              ))}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={(e) => handleLinkClick(e, "#appointment")}
                  className="inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold px-3 py-1.5 rounded-lg text-xs tracking-wide transition-all cursor-pointer"
                  id="footer-appointment-shortcut"
                >
                  <span>Pre-Book Slot Now</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lower Copyright Area */}
      <div className="bg-gray-950 text-gray-500 text-xs py-6 border-t border-gray-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div>
            <p className="font-sans font-normal text-center md:text-left">
              &copy; {year} Dr. Syed Ishfaq Clinic (Gastroenterologist, Sopore). All rights reserved.
            </p>
            <p className="text-[10px] text-gray-600 font-mono mt-1 text-center md:text-left">
              Expert gastrological treatment in Jammu & Kashmir. Powered by digital health standards.
            </p>
          </div>

          <div className="flex gap-4 font-normal">
            <span className="hover:text-gray-300">Privacy Policy</span>
            <span className="w-1 h-3 border-r border-gray-800" />
            <span className="hover:text-gray-300">Medical Disclaimer</span>
            <span className="w-1 h-3 border-r border-gray-800" />
            <span className="hover:text-gray-300">Terms of Use</span>
          </div>

        </div>
      </div>

    </footer>
  );
}
