import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, Wind, ShieldAlert, Activity, Compass, Flame, 
  TrendingDown, Droplets, Sparkles, Layers, AlertTriangle, 
  HeartPulse, ExternalLink, HelpCircle 
} from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '../data';
import { Service } from '../types';

export default function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Dynamically map icon strings to Lucide components
  const renderIcon = (iconName: string, className: string = "w-6 h-6") => {
    switch (iconName) {
      case "Wind": return <Wind className={className} />;
      case "ShieldAlert": return <ShieldAlert className={className} />;
      case "Activity": return <Activity className={className} />;
      case "Compass": return <Compass className={className} />;
      case "Flame": return <Flame className={className} />;
      case "TrendingDown": return <TrendingDown className={className} />;
      case "Droplets": return <Droplets className={className} />;
      case "Sparkles": return <Sparkles className={className} />;
      case "Layers": return <Layers className={className} />;
      case "AlertTriangle": return <AlertTriangle className={className} />;
      case "HeartPulse": return <HeartPulse className={className} />;
      default: return <Activity className={className} />;
    }
  };

  const filteredServices = SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectedCategory === 'all') return matchesSearch;
    if (selectedCategory === 'stomach') {
      return matchesSearch && ['gas', 'acidity', 'bloating', 'indigestion', 'ulcer', 'constipation', 'loose-motion', 'ibs', 'stomach-pain', 'digestive'].includes(service.id);
    }
    if (selectedCategory === 'liver') {
      return matchesSearch && ['liver', 'fatty-liver'].includes(service.id);
    }
    return matchesSearch;
  });

  const getWhatsAppLinkForService = (service: Service) => {
    return `${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(service.prefilledMessage)}`;
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-rose-900 font-bold tracking-wider text-xs uppercase bg-rose-50 px-3 py-1.5 rounded-full border border-rose-100">
            What We Treat
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-gray-950 mt-4 tracking-tight">
            Specialized Gastroenterology Services
          </h2>
          <p className="text-gray-600 mt-4 text-base sm:text-lg">
            Experienced diagnosis and modern medical treatments delivered by Dr. Syed Ishfaq for all minor & major digestive and liver ailments in Kashmir.
          </p>
        </div>

        {/* Live Filter / Search Interactive Control Panel */}
        <div className="mt-12 bg-gray-50 p-4 rounded-2xl border border-gray-200/60 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            
            {/* Search Input */}
            <div className="relative w-full sm:flex-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Search symptoms (e.g. gas, acidity, fatty liver...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-rose-800 transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Category Quick Tags */}
            <div className="flex gap-2 w-full sm:w-auto overflow-x-auto no-scrollbar py-1">
              {[
                { label: "All Problems", value: "all" },
                { label: "Stomach Issues", value: "stomach" },
                { label: "Liver Specialist Care", value: "liver" }
              ].map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat.value
                      ? 'bg-rose-900 text-white shadow-sm'
                      : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Services Grid with Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-rose-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-50 to-orange-50/50 flex items-center justify-center text-rose-900 group-hover:from-rose-900 group-hover:to-rose-800 group-hover:text-white transition-all duration-300">
                    {renderIcon(service.iconName, "w-6 h-6")}
                  </div>

                  {/* Service Title */}
                  <h3 className="font-sans font-bold text-gray-900 text-lg mt-5 group-hover:text-rose-950 transition-colors">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-600 font-normal text-sm mt-3.5 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Consult Now Button / WhatsApp direct trigger */}
                <div className="mt-6 pt-4 border-t border-gray-50">
                  <a
                    href={getWhatsAppLinkForService(service)}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 group-hover:text-emerald-800 group-hover:underline transition-all"
                  >
                    <span>Instant Consult on WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </motion.div>
            ))
          ) : (
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 py-16 text-center text-gray-500">
              <HelpCircle className="w-12 h-12 text-gray-300 mx-auto stroke-s-1 mb-3" />
              <p className="font-semibold text-lg text-gray-700">No matching services found</p>
              <p className="text-sm mt-1">Try searching for other conditions, or click "All Problems" to see everything.</p>
            </div>
          )}
        </div>

        {/* Dynamic CTA Strip bottom of services */}
        <div className="mt-16 bg-gradient-to-r from-emerald-800 to-emerald-950 rounded-2xl p-6 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center md:text-left">
            <h3 className="font-sans font-bold text-xl sm:text-2xl">Can't identify your stomach symptoms?</h3>
            <p className="text-emerald-100 text-sm sm:text-base mt-2 max-w-xl">
              Describe your symptoms directly to Dr. Syed Ishfaq's patient assistant over WhatsApp for proper scheduling and early checkups.
            </p>
          </div>
          <a
            href={`${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent("Hello Dr. Syed Ishfaq, I am feeling unwell and having unspecified stomach symptoms. Can I schedule a general consultation?")}`}
            target="_blank"
            rel="noreferrer noopener"
            className="w-full md:w-auto shrink-0 bg-white text-emerald-900 hover:bg-emerald-50 font-bold px-6 py-3.5 rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-2"
          >
            <span>Ask Patient Assistant</span>
            <ExternalLink className="w-4 h-4 text-emerald-700" />
          </a>
        </div>

      </div>
    </section>
  );
}
