import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCirclePlus } from 'lucide-react';
import { FAQS, CONTACT_INFO } from '../data';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 md:py-24 bg-gray-50/50 relative border-t border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-rose-900 font-bold tracking-wider text-xs uppercase bg-rose-50 px-3 py-1.5 rounded-full border border-rose-100">
            FAQ Desk
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-gray-950 mt-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Find quick professional answers regarding stomach treatment protocols, clinic setup, and Dr. Syed Ishfaq's credentials.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-rose-200/80 shadow-md' 
                    : 'border-gray-200/60 hover:border-gray-300 shadow-sm'
                }`}
              >
                {/* Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-5 sm:px-6 py-5 flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 ${isOpen ? 'text-rose-800' : 'text-gray-400'}`} />
                    <span className="font-sans font-bold text-gray-900 text-sm sm:text-base">
                      {faq.question}
                    </span>
                  </div>
                  <div className="shrink-0 mt-1 text-gray-500">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-0 text-gray-700 text-xs sm:text-sm leading-relaxed font-normal pl-13">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

        {/* Banner for Custom Queries */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-gray-150 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-sans font-bold text-gray-900 text-sm sm:text-base">Still have questions regarding stomach issues?</h4>
            <p className="text-gray-500 text-xs mt-1">Chat directly with the medical department over WhatsApp for fast help.</p>
          </div>
          <a
            href={`${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent("Hello Doctor, I went through the FAQs but have a custom question regarding your gastroenterology consultation.")}`}
            target="_blank"
            rel="noreferrer noopener"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-rose-50 hover:bg-rose-100 text-rose-950 px-4 py-2.5 rounded-xl text-xs font-bold transition-all"
            id="faq-help-whatsapp"
          >
            <MessageCirclePlus className="w-4 h-4 text-rose-800" />
            <span>Ask Custom Question</span>
          </a>
        </div>

      </div>
    </section>
  );
}
