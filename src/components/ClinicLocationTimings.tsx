import { motion } from 'motion/react';
import { Clock, MapPin, Navigation, Landmark, ArrowRight, Share2, Phone } from 'lucide-react';
import { CONTACT_INFO, CLINIC_TIMINGS } from '../data';

interface ClinicLocationProps {
  onScrollTo: (selector: string) => void;
}

export default function ClinicLocationTimings({ onScrollTo }: ClinicLocationProps) {
  
  const handleShareAddress = () => {
    if (navigator.share) {
      navigator.share({
        title: "Dr. Syed Ishfaq Clinic Address",
        text: `Dr. Syed Ishfaq, Gastroenterologist - New Colony Sopore, Near Grameen Bank. Times: Sunday 9:30 AM, Wednesday 4 PM. Phone: ${CONTACT_INFO.phone}`,
        url: window.location.href
      }).catch(err => console.log('Error sharing:', err));
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(`Dr. Syed Ishfaq, Gastroenterologist: New Colony Sopore, Near J&K Grameen Bank. Phone: ${CONTACT_INFO.phone}`);
      alert("Clinic Address copied to clipboard!");
    }
  };

  return (
    <section id="timings" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-rose-905 font-bold tracking-wider text-xs uppercase bg-rose-50 px-3 py-1.5 rounded-full text-rose-900 border border-rose-100">
            Timing & Access
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-gray-950 mt-4 tracking-tight">
            Clinic Timings & Location
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Visit the doctor at his modern clinical establishment located centrally in Sopore. Please review the specific hours below before scheduling your checkup.
          </p>
        </div>

        {/* Outer Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch" id="timing-location-grid">
          
          {/* Left Side: Schedules & Details (Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Timings Cards List */}
            <div className="space-y-4">
              <h3 className="font-sans font-bold text-gray-900 text-lg flex items-center gap-2">
                <Clock className="w-5 h-5 text-rose-800" />
                <span>Specialist Consultation Days</span>
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {CLINIC_TIMINGS.map((tim, idx) => (
                  <div 
                    key={idx} 
                    className={`p-5 rounded-2xl border-2 transition-all ${tim.classes}`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="inline-block px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded bg-white text-gray-800 border border-gray-200 shadow-sm mb-2">
                          {tim.badge}
                        </span>
                        <h4 className="font-sans font-extrabold text-gray-900 text-lg sm:text-xl">
                          {tim.day}
                        </h4>
                        <p className="text-rose-950 font-bold text-sm sm:text-base mt-1.5 flex items-center gap-1.5">
                          <span>{tim.time}</span>
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white text-rose-900 border border-gray-100 flex items-center justify-center">
                        <Clock className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 text-xs leading-relaxed">
                ⚠️ <strong>Patient Instruction:</strong> Since Dr. Syed Ishfaq receives patients from across North Kashmir, please book in advance to avoid waiting, or check with the assistant on WhatsApp if the days change due to SKIMS/JIPMER routines.
              </div>
            </div>

            {/* Address & Landmark */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-150 space-y-4">
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-850 shrink-0 mt-1" />
                <div>
                  <h4 className="font-sans font-bold text-gray-900 text-sm">Clinic Address:</h4>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Landmark className="w-5 h-5 text-emerald-800 shrink-0 mt-1" />
                <div>
                  <h4 className="font-sans font-bold text-gray-900 text-sm">Nearby Landmark:</h4>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1">
                    {CONTACT_INFO.landmark} (Easily accessible from main bypass road)
                  </p>
                </div>
              </div>

              {/* Share & Booking Quick Nav triggers */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={handleShareAddress}
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-100 text-gray-700 text-xs font-bold font-sans transition-all cursor-pointer"
                  id="share-address-btn"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Location</span>
                </button>
                <button
                  onClick={() => onScrollTo('#appointment')}
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold font-sans transition-all cursor-pointer"
                  id="timing-book-shortcut"
                >
                  <span>Pre-Book Hour</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

          {/* Right Side: Map Display Area (Col 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Map Wrapper Card */}
            <div className="flex-1 bg-gray-100 rounded-3xl overflow-hidden border border-gray-200 relative min-h-[300px] lg:min-h-full flex flex-col justify-between">
              
              {/* Actual Google Map Iframe Integration */}
              <iframe
                src={CONTACT_INFO.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. Syed Ishfaq Clinic Map Location"
                className="w-full flex-1 min-h-[320px]"
              />

              {/* Get Directions Floating Control Strip */}
              <div className="p-4 bg-gray-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">New Colony Sopore</p>
                  <p className="text-sm font-bold mt-0.5 text-gray-200">Get route directions on Google Maps</p>
                </div>
                <a
                  href={CONTACT_INFO.googleMapsAddressLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition-all whitespace-nowrap"
                  id="maps-get-directions-btn"
                >
                  <Navigation className="w-3.5 h-3.5 rotate-45" />
                  <span>Get Live Directions</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
