import { motion } from 'motion/react';
import { 
  Award, Stethoscope, ThumbsUp, Heart, CheckCircle, 
  Sparkles, ShieldCheck, HeartPulse, ShieldAlert, GraduationCap, ArrowUpRight 
} from 'lucide-react';
import { BENEFITS, CONTACT_INFO } from '../data';

const doctorImg = "/src/assets/images/doctor_portrait_1779521903331.png";

export default function AboutDoctor() {
  // Dynamically map icon name for Why Choose Us
  const renderBenefitIcon = (iconName: string, className: string = "w-5 h-5") => {
    switch (iconName) {
      case "Award": return <Award className={className} />;
      case "Stethoscope": return <Stethoscope className={className} />;
      case "CheckCircle": return <CheckCircle className={className} />;
      case "MessageSquareCode": return <ShieldCheck className={className} />;
      case "Heart": return <Heart className={className} />;
      default: return <HeartPulse className={className} />;
    }
  };

  const counters = [
    { value: "15+", label: "Years Experience" },
    { value: "18,000+", label: "Kashmir Patients Healed" },
    { value: "100%", label: "Professional Care" },
    { value: "JIPMER", label: "DM Credentials" }
  ];

  const whyChooseUsPoints = [
    { title: "Experienced Gastroenterologist", desc: "DM trained from JIPMER Pondicherry with comprehensive clinical expertise.", icon: <GraduationCap className="w-5 h-5 text-rose-800" /> },
    { title: "Advanced Diagnosis", desc: "Modern diagnostic strategies for liver disorders, ulcers and acidity problems.", icon: <ActivityIcon /> },
    { title: "Personalized Treatment", desc: "Diet sheets, active patient care plans customized uniquely to your gut type.", icon: <Heart className="w-5 h-5 text-rose-800" /> },
    { title: "Trusted by Patients", desc: "Highest patient survival recovery rates in Kashmir. Safe non-surgical methods.", icon: <ThumbsUp className="w-5 h-5 text-rose-800" /> },
    { title: "Affordable Consultation", desc: "Standard economic clinic consulting price tags keeping quality healthcare accessible.", icon: <Award className="w-5 h-5 text-rose-800" /> },
    { title: "Quick Appointment Booking", desc: "Instant booking confirmation over WhatsApp. No endless waiting hours.", icon: <ShieldCheck className="w-5 h-5 text-rose-800" /> },
    { title: "Friendly Consultation", desc: "Humble patient listening, gentle behavior, and step-by-step disease explanation.", icon: <Sparkles className="w-5 h-5 text-rose-800" /> },
    { title: "Modern Medical Care", desc: "Following central SKIMS and nationwide peer-reviewed gastrological treatment guidelines.", icon: <HeartPulse className="w-5 h-5 text-rose-800" /> }
  ];

  return (
    <>
      {/* About The Doctor Hero Profile */}
      <section id="about" className="py-16 md:py-24 bg-rose-50/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Doctor Profile Photo Area */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] max-w-sm mx-auto bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src={doctorImg} 
                  alt="Dr. Syed Ishfaq, Gastro MD SKIMS DM JIPMER" 
                  className="w-full h-full object-cover object-top hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                
                {/* Decorative border tags overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white text-left">
                  <p className="text-xs uppercase font-mono tracking-widest text-rose-300">Specialist Practitioning</p>
                  <h3 className="font-sans font-bold text-lg">Dr. Syed Ishfaq</h3>
                  <p className="text-[11px] text-gray-200 mt-1">Sopore, Jammu & Kashmir, India</p>
                </div>
              </div>

              {/* Verified badge or background circular visuals */}
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-emerald-50 rounded-2xl flex flex-col justify-center items-center shadow-lg border border-emerald-100 p-2 text-center select-none">
                <Award className="w-7 h-7 text-emerald-700 mb-1" />
                <span className="text-[10px] font-extrabold text-gray-950 uppercase leading-none">Verified</span>
                <span className="text-[9px] text-emerald-800 font-bold mt-1">SKIMS / JIPMER</span>
              </div>
            </div>

            {/* Right Column: Bio Copy */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <span className="text-rose-905 font-bold tracking-wider text-xs uppercase bg-rose-100 px-3 py-1.5 rounded-full text-rose-900 border border-rose-200">
                Meet the Gastroenterology Expert
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-bold font-sans text-gray-950 mt-5 tracking-tight">
                Dr. Syed Ishfaq
              </h2>
              <p className="text-rose-900 font-bold text-sm tracking-wide font-mono mt-1">
                MBBS, MD (SKIMS) • DM Gastroenterology (JIPMER Pondicherry)
              </p>

              <div className="mt-6 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Dr. Syed Ishfaq is one of Kashmir's most qualified and respected gastroenterologists, specializing in complex stomach, bowel, intestine, pancreatic, and liver health issues.
                </p>
                <p>
                  With a solid foundation in Internal Medicine (MD) from the apex <strong>Sher-i-Kashmir Institute of Medical Sciences (SKIMS)</strong>, Srinagar, he went on to complete his higher Doctorate in Medicine (DM) in Gastroenterology from the highly prestigious <strong>JIPMER Pondicherry</strong> (Jawaharlal Institute of Postgraduate Medical Education & Research) &mdash; widely recognized as one of India's tier-1 central institutes of medical excellence.
                </p>
                <p>
                  At his clinical establishment in Sopore, Dr. Syed Ishfaq is dedicated to bringing world-class gastroenterological expertise right to the doorsteps of Kashmir’s patients, ensuring humble listening, highly modern scientific diagnoses, and extremely affordable consultation pathways.
                </p>
              </div>

              {/* Achievement Numbers Counters Grid */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {counters.map((cnt, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-gray-150 shadow-sm text-center">
                    <p className="text-lg sm:text-2xl font-black text-rose-900 leading-none">{cnt.value}</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 font-medium mt-1.5 leading-tight">{cnt.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="inline-flex items-center gap-2 text-rose-900 hover:text-rose-950 font-bold text-sm underline underline-offset-4"
                >
                  <span>Connect with the Clinic Reception Desk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-emerald-900 font-bold tracking-wider text-xs uppercase bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
              Why Patients Trust Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-gray-950 mt-4 tracking-tight">
              Exceptional Medical Standards for Kashmir
            </h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              Dr. Syed Ishfaq’s clinic puts patient health at the heart of everything we do. Here is why we are Sopore's trusted gastric health clinic:
            </p>
          </div>

          {/* Grid Layout of Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="p-6 bg-white rounded-2xl border border-gray-150 hover:border-emerald-100 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-900 flex items-center justify-center">
                  {point.icon}
                </div>
                <h3 className="font-sans font-bold text-gray-900 text-base mt-4 leading-tight">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

// Simple inline Activity icon generator
function ActivityIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-rose-800">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
