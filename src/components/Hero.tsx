import { motion } from 'motion/react';
import { Phone, MessageSquare, Award, Star, ShieldCheck, HeartPulse, GraduationCap } from 'lucide-react';
import { CONTACT_INFO } from '../data';

const doctorImg = "/src/assets/images/doctor_portrait_1779521903331.png";

interface HeroProps {
  onScrollTo: (selector: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  // Setup standard whatsapp links
  const whatsappUrl = `${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(CONTACT_INFO.whatsappPrefilled)}`;

  return (
    <section 
      id="home" 
      className="relative bg-gradient-to-br from-emerald-50/20 via-white to-rose-50/15 overflow-hidden py-12 md:py-20 lg:py-24 border-b border-gray-100"
    >
      {/* Decorative background grid and blurs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointers-events-none" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-rose-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            
            {/* Trust Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-900 text-xs font-semibold tracking-wide self-center lg:self-start mb-6"
            >
              <Award className="w-3.5 h-3.5 text-rose-700" />
              <span>SKIMS & JIPMER Alumnus</span>
              <span className="w-1 h-1 rounded-full bg-rose-400" />
              <span>DM Gastroenterology Specialist</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]"
              id="hero-main-title"
            >
              Expert <span className="text-rose-900 relative">Gastroenterologist</span> <br className="hidden sm:inline" /> in Sopore, Kashmir
            </motion.h1>

            {/* Subheadline (Expert treatment for issues) */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              id="hero-sub-title"
            >
              Get advanced medical treatment for gas, acidity, bloating, indigestion, liver problems, ulcers, constipation, and common to complex digestive disorders.
            </motion.p>

            {/* Trust Badges - Grid format */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 max-w-xl mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-100 shadow-sm">
                <div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center text-rose-800">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[12px] font-bold text-gray-950">MBBS, MD</p>
                  <p className="text-[10px] text-gray-500">SKIMS Srinagar</p>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-100 shadow-sm">
                <div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center text-rose-800">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[12px] font-bold text-gray-950">DM Gastro</p>
                  <p className="text-[10px] text-gray-500">JIPMER Pondy</p>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-100 shadow-sm">
                <div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center text-emerald-800">
                  <Star className="w-4 h-4 fill-emerald-50 text-emerald-600" />
                </div>
                <div className="text-left">
                  <p className="text-[12px] font-bold text-gray-950">100% Trust</p>
                  <p className="text-[10px] text-gray-500">Verified Specialist</p>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-100 shadow-sm">
                <div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center text-rose-800">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[12px] font-bold text-gray-950">Active Care</p>
                  <p className="text-[10px] text-gray-500">Sopore Clinic</p>
                </div>
              </div>
            </motion.div>

            {/* CTAs (WhatsApp Booking & Call Now) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-6 py-4 rounded-xl shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:shadow-emerald-600/35 transition-all duration-300 transform hover:-translate-y-0.5"
                id="hero-whatsapp-btn"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Book Appointment on WhatsApp</span>
              </a>

              <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white hover:bg-gray-50 text-rose-950 font-bold text-base px-6 py-4 rounded-xl shadow-sm border border-gray-200 transition-all duration-300"
                id="hero-call-btn"
              >
                <Phone className="w-5 h-5 text-rose-800" />
                <span>Call Now: {CONTACT_INFO.whatsappDisplay}</span>
              </a>
            </motion.div>

            {/* Inline Micro-trust badge */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs text-gray-500 mt-4 font-mono text-center lg:text-left"
            >
              ⚡ Fast Booking Response • Usually replies within 1 hour
            </motion.p>

          </div>

          {/* Right Column: Doctor Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-12 xl:col-span-5 lg:col-start-8 flex justify-center relative select-none"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[400px]">
              
              {/* Backglow ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-900 to-emerald-600 rounded-3xl rotate-3 scale-[1.03] opacity-10 absolute blur-md" />
              
              {/* Image Frame */}
              <div className="relative aspect-[3/4] bg-white rounded-3xl overflow-hidden border-2 border-white shadow-xl">
                <img 
                  src={doctorImg} 
                  alt="Dr. Syed Ishfaq, Gastroenterologist" 
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500" 
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Achievement Banner over image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                    <HeartPulse className="w-5.5 h-5.5 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-900">Dr. Syed Ishfaq</h3>
                    <p className="text-[10px] text-gray-600 font-medium">100% Patient Success Rate in Sopore</p>
                  </div>
                </div>
              </div>

              {/* Verified badge */}
              <div className="absolute -top-3 -right-3 z-20 bg-emerald-600 text-white rounded-full p-2 shadow-lg border-2 border-white flex items-center justify-center animate-bounce">
                <Star className="w-5 h-5 fill-white text-emerald-600" />
              </div>

              {/* SKIMS badge */}
              <div className="absolute top-[40%] -left-6 z-20 bg-rose-900 text-white text-[10px] font-bold py-1.5 px-3 rounded-lg shadow-md border border-rose-800 rotate-[-4deg]">
                Ex-SKIMS Clinician
              </div>

              {/* JIPMER badge */}
              <div className="absolute bottom-[25%] -right-6 z-20 bg-yellow-400 text-gray-950 text-[10px] font-bold py-1.5 px-3 rounded-lg shadow-md border border-yellow-300 rotate-[4deg]">
                JIPMER Pondicherry Alumnus
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
