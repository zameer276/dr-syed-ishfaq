import { Phone, MessageSquare, AlertTriangle, ShieldAlert } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface EmergencyCTAProps {
  onScrollTo: (selector: string) => void;
}

export default function EmergencyCTA({ onScrollTo }: EmergencyCTAProps) {
  const whatsappUrl = `${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(CONTACT_INFO.whatsappPrefilled)}`;

  return (
    <div className="bg-gradient-to-r from-rose-900 to-rose-950 text-white py-12 px-4 relative overflow-hidden" id="emergency-banner">
      {/* Visual glowing elements */}
      <div className="absolute top-[-50%] left-[-20%] w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.02))] pointers-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10 px-4 sm:px-6 lg:px-8">
        
        {/* Texts */}
        <div className="text-center lg:text-left space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 text-white text-[11px] font-bold uppercase tracking-wider">
            <ShieldAlert className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
            <span>Kashmir Gastric Health Department</span>
          </div>
          <h3 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight">
            Your Health Matters &mdash; Book Your Consultation Today
          </h3>
          <p className="text-rose-100 text-xs sm:text-base font-normal">
            Take the first step towards resolving painful acidity, chronic gas, liver diseases, or flatulence symptoms safely. Speak to Dr. Syed Ishfaq now.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-stretch w-full sm:w-auto shrink-0">
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-4 rounded-xl shadow-lg transition-all text-sm border border-emerald-500/20"
            id="emergency-whatsapp-booking"
          >
            <MessageSquare className="w-4 h-4 fill-white text-emerald-600" />
            <span>WhatsApp Now</span>
          </a>

          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex items-center justify-center gap-2.5 bg-white hover:bg-gray-100 text-rose-950 font-bold px-6 py-4 rounded-xl shadow-sm transition-all text-sm"
            id="emergency-call-doctor"
          >
            <Phone className="w-4 h-4 text-rose-800 shrink-0" />
            <span>Call Doctor ({CONTACT_INFO.whatsappDisplay})</span>
          </a>

        </div>

      </div>
    </div>
  );
}
