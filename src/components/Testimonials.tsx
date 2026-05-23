import { motion } from 'motion/react';
import { Star, ShieldCheck, Heart, Users, ExternalLink } from 'lucide-react';
import { TESTIMONIALS, CONTACT_INFO } from '../data';

export default function Testimonials() {

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-rose-50/10 relative border-t border-b border-gray-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-900 font-bold tracking-wider text-xs uppercase bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
            Kashmir Patient Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-gray-950 mt-4 tracking-tight">
            Loved By Hundreds of Recovered Patients
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Read verified reviews and healing testimonials shared by patients across Sopore, Baramulla, and Rafiabad who recovered from stomach ulcers, acidity, or liver problems.
          </p>
        </div>

        {/* Global Stats bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 bg-white p-6 rounded-2xl border border-gray-150 shadow-sm text-center">
          <div className="p-2 space-y-1">
            <p className="text-3xl font-black text-rose-900 leading-none">4.9/5</p>
            <div className="flex gap-1 justify-center my-1">
              {[1, 2, 3, 4, 5].map(s => (
                <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              ))}
            </div>
            <p className="text-xs text-gray-500 font-medium">Over 350+ Google/Clinic Reviews</p>
          </div>
          
          <div className="p-2 border-y sm:border-y-0 sm:border-x border-gray-100 space-y-1">
            <p className="text-3xl font-black text-emerald-800 leading-none">18,000+</p>
            <div className="flex items-center justify-center gap-1 my-1 text-emerald-600">
              <Users className="w-4 h-4" />
              <span className="text-xs font-bold font-mono">Verified Case Files</span>
            </div>
            <p className="text-xs text-gray-500 font-medium font-sans">Throughout Kashmir Valley</p>
          </div>

          <div className="p-2 space-y-1">
            <p className="text-3xl font-black text-rose-900 leading-none">15+ Yrs</p>
            <div className="flex items-center justify-center gap-1 my-1 text-rose-800">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-bold font-mono">Super Specialty Care</span>
            </div>
            <p className="text-xs text-gray-500 font-medium font-sans">Active Clinical Practice</p>
          </div>
        </div>

        {/* Testimonials Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch" id=" testimonials-grid">
          {TESTIMONIALS.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 hover:border-emerald-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              
              <div>
                {/* 5-Star Rating row */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-1">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-rose-50 text-rose-950 text-[10px] font-bold uppercase tracking-wider">
                    <Heart className="w-3 h-3 text-rose-700 animate-pulse fill-rose-700" />
                    {test.treatment}
                  </span>
                </div>

                {/* Patient Review Content */}
                <p className="text-gray-700 text-xs sm:text-base leading-relaxed italic font-normal">
                  "{test.comment}"
                </p>
              </div>

              {/* Patient Profile row */}
              <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-bold text-gray-950 text-sm sm:text-base leading-none">
                    {test.name}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-1.5 font-sans">
                    Patient from <span className="font-semibold text-rose-950">{test.location}</span>, Kashmir
                  </p>
                </div>

                {/* Shield Check Status Badge */}
                <span className="inline-flex items-center gap-1 text-[10px] text-emerald-800 font-bold bg-emerald-50 rounded-full px-2.5 py-1 select-none">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Verified Cure</span>
                </span>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Action Bottom */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-xs">
            *Clinical data and names are published with the direct verbal consent of patients. Personal files are completely secured under doctor-patient confidentiality.
          </p>
        </div>

      </div>
    </section>
  );
}
