import { useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp, Calendar, Heart } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutDoctor from './components/AboutDoctor';
import ClinicLocationTimings from './components/ClinicLocationTimings';
import Testimonials from './components/Testimonials';
import AppointmentForm from './components/AppointmentForm';
import FAQs from './components/FAQs';
import EmergencyCTA from './components/EmergencyCTA';
import Footer from './components/Footer';
import { CONTACT_INFO } from './data';

export default function App() {
  // Utility for smooth sectional scrolls
  const handleScrollTo = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      const headerOffset = 110; // offset for the announcement and sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Setup basic scroll action logging or analytics if needed, otherwise clean entry
  useEffect(() => {
    // Basic SEO enhancements or tracker
    document.title = "Dr. Syed Ishfaq | Best Gastroenterologist in Sopore Jammu & Kashmir";
  }, []);

  const whatsappUrl = `${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(CONTACT_INFO.whatsappPrefilled)}`;

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden font-sans select-text">
      
      {/* Premium Sticky / Fixed Header */}
      <Header onScrollTo={handleScrollTo} />

      {/* Main Flow Sections */}
      <main className="pb-16 sm:pb-0"> {/* padding-bottom to separate out the mobile bottom sticky CTA */}
        
        {/* Core Hero Component */}
        <Hero onScrollTo={handleScrollTo} />

        {/* Specialized treatment listings */}
        <Services />

        {/* Doctor clinical bio & Why choose us grid */}
        <AboutDoctor />

        {/* Real patient feedback */}
        <Testimonials />

        {/* High-converting booking interactive widget */}
        <AppointmentForm />

        {/* Timelines and Interactive Maps iframe */}
        <ClinicLocationTimings onScrollTo={handleScrollTo} />

        {/* SEO-optimized accordion FAQ segment */}
        <FAQs />

        {/* Red urgent Call / Chat banner */}
        <EmergencyCTA onScrollTo={handleScrollTo} />

      </main>

      {/* Fully Configured Footer */}
      <Footer onScrollTo={handleScrollTo} />

      {/* Floating Pulse Action Button: WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="fixed z-50 bottom-24 sm:bottom-6 right-6 w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group hover:scale-105"
        aria-label="Contact Dr. Syed Ishfaq on WhatsApp"
        id="global-floating-whatsapp"
      >
        <div className="absolute inset-0 rounded-full bg-emerald-600 animate-ping opacity-35" />
        <MessageSquare className="w-7 h-7 fill-white text-emerald-600 relative z-10" />
        
        {/* Toll-tip details */}
        <span className="absolute right-16 bg-gray-950 text-white text-[10px] font-extrabold tracking-wide uppercase px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
          Book Appointment
        </span>
      </a>

      {/* Exclusive Mobile Sticky Bottom CTA strip */}
      <div 
        id="mobile-sticky-quickactions"
        className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 shadow-2xl z-40 grid grid-cols-2 gap-3"
      >
        <a
          href={`tel:${CONTACT_INFO.phone}`}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gray-300 bg-white text-gray-950 text-xs font-bold active:bg-gray-50 transition-colors"
          id="sticky-mobile-phone"
        >
          <Phone className="w-4 h-4 text-rose-800" />
          <span>Call Doctor</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 text-white text-xs font-bold active:bg-emerald-700 transition-colors"
          id="sticky-mobile-whatsapp"
        >
          <MessageSquare className="w-4 h-4 fill-white text-emerald-600" />
          <span>WhatsApp Book</span>
        </a>
      </div>

    </div>
  );
}
