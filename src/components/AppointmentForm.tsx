import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Phone, Clipboard, Clock, CheckCircle2, AlertCircle, Sparkles, Send } from 'lucide-react';
import { CONTACT_INFO, CLINIC_TIMINGS } from '../data';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    symptoms: '',
    preferredTime: 'Sunday Morning (09:30 AM onwards)',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [receiptUrl, setReceiptUrl] = useState('');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Please enter a valid full name.";
    }

    const cleanedPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required for WhatsApp coordination.";
    } else if (cleanedPhone.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (!formData.symptoms.trim()) {
      newErrors.symptoms = "Please briefly mention your stomach symptoms/problem.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Serialize appointment into professional clinical message format
    const formattedMessage = 
`*APPOINTMENT RESERVATION REQUEST*
----------------------------------------
*Doctor:* Dr. Syed Ishfaq (Gastroenterologist)
*Patient Name:* ${formData.name.trim()}
*Contact Phone:* ${formData.phone.trim()}
*Reported Symptoms:* ${formData.symptoms.trim()}
*Preferred Slot:* ${formData.preferredTime}
----------------------------------------
Please confirm the appointment slot at Sopore Clinic.`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappLink = `https://wa.me/919103534317?text=${encodedText}`;
    
    setReceiptUrl(whatsappLink);
    setIsSubmitted(true);

    // Auto redirect after short delay
    setTimeout(() => {
      window.open(whatsappLink, '_blank');
    }, 1800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      symptoms: '',
      preferredTime: 'Sunday Morning (09:30 AM onwards)',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="appointment" className="py-16 md:py-24 bg-rose-950 text-white relative overflow-hidden">
      
      {/* Visual background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.15),transparent_40%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: High Convince Texts */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <span className="text-yellow-400 font-extrabold tracking-wider text-xs uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
              ⚡ Secure & Instant Booking
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold mt-5 tracking-tight leading-tight">
              Don’t Ignore <span className="text-yellow-300">Stomach</span> Problems &mdash; Consult Today
            </h2>
            <p className="text-rose-100 mt-5 text-sm sm:text-base md:text-lg leading-relaxed">
              Acid reflux, persistent gases, liver swelling or gastric pains can escalate if left untreated. Book a guaranteed consultation slot with Sopore's premier gastro expert.
            </p>

            {/* Quick Guarantees checklist */}
            <div className="mt-8 space-y-4">
              {[
                "Priority response in under 1 hour",
                "Direct clinical support desk",
                "Strict scheduling - skip the waiting room queues",
                "Affordable medical consultation"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 text-left">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium text-rose-50">{text}</span>
                </div>
              ))}
            </div>

            {/* Timings Reference Card */}
            <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 text-left">
              <p className="text-xs text-rose-200 font-mono tracking-wider uppercase mb-2">Dr. Syed's Clinical Timings:</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-white">Sunday Session</p>
                  <p className="text-xs text-yellow-300">09:30 AM onwards</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Wednesday Session</p>
                  <p className="text-xs text-yellow-300">04:00 PM onwards</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Form / Receipt Display */}
          <div className="lg:col-span-7">
            <div className="bg-white text-gray-900 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-10 border border-gray-100 relative">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-sans font-bold text-xl sm:text-2xl text-gray-900">
                        Quick Appointment Reservation
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm mt-1">
                        Fill in basic clinical traits and click below to send immediate reservation schedule via WhatsApp.
                      </p>
                    </div>

                    {/* Full Name Input */}
                    <div className="space-y-2">
                      <label htmlFor="patient-name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Patient's Full Name <span className="text-rose-600">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                          <User className="w-4 h-4" />
                        </span>
                        <input
                          id="patient-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your first and last name"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-gray-900 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-rose-800 transition-all ${
                            errors.name ? 'border-rose-400 focus:ring-rose-400' : 'border-gray-200'
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-xs text-rose-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Mobile/WhatsApp Number */}
                      <div className="space-y-2">
                        <label htmlFor="patient-phone" className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                          Mobile / WhatsApp <span className="text-rose-600">*</span>
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                            <Phone className="w-4 h-4" />
                          </span>
                          <input
                            id="patient-phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="e.g. 91035 XXXXX"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-gray-900 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-rose-800 transition-all ${
                              errors.phone ? 'border-rose-400 focus:ring-rose-400' : 'border-gray-200'
                            }`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-xs text-rose-600 font-medium flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Preferred Schedule Selection */}
                      <div className="space-y-2">
                        <label htmlFor="preferred-slot" className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                          Preferred Consult Day <span className="text-rose-600">*</span>
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                            <Clock className="w-4 h-4" />
                          </span>
                          <select
                            id="preferred-slot"
                            value={formData.preferredTime}
                            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-rose-800 transition-all appearance-none cursor-pointer"
                          >
                            <option value="Sunday Morning (09:30 AM onwards)">Sunday Morning (09:30 AM onwards)</option>
                            <option value="Wednesday Evening (04:00 PM onwards)">Wednesday Evening (04:00 PM onwards)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Symptoms Textarea */}
                    <div className="space-y-2">
                      <label htmlFor="patient-symptoms" className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Describe Symptoms / Stomach Issues <span className="text-rose-600">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute top-3.5 left-3.5 text-gray-400">
                          <Clipboard className="w-4 h-4" />
                        </span>
                        <textarea
                          id="patient-symptoms"
                          rows={3}
                          required
                          value={formData.symptoms}
                          onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                          placeholder="e.g. Feeling persistent burning in heartburn (acidity), heavy bloating or severe constipation since 10 days..."
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-gray-900 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-rose-800 transition-all placeholder:text-gray-400 ${
                            errors.symptoms ? 'border-rose-400 focus:ring-rose-400' : 'border-gray-200'
                          }`}
                        />
                      </div>
                      {errors.symptoms && (
                        <p className="text-xs text-rose-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.symptoms}
                        </p>
                      )}
                    </div>

                    {/* Form Submit Primary Action Banner CTA */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold leading-normal tracking-wide text-base px-6 py-4 rounded-xl shadow-lg shadow-emerald-600/10 hover:shadow-xl hover:shadow-emerald-600/30 transition-all cursor-pointer"
                      id="submit-appointment-btn"
                    >
                      <Send className="w-5 h-5" />
                      <span>Confirm & Book via WhatsApp</span>
                    </button>

                    <p className="text-[11px] text-gray-500 text-center font-medium font-sans">
                      🔒 Your medical status remains completely private and shared solely with the specialist.
                    </p>

                  </motion.form>
                ) : (
                  // Success Ticket Screen State
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <h3 className="text-2xl font-bold font-sans text-gray-900">
                      Redirecting to WhatsApp...
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 max-w-md mx-auto">
                      We have prepared your clinical scheduling information! If your browser did not redirect automatically, please tap the green button below.
                    </p>

                    {/* Receipt Coupon Preview */}
                    <div className="my-8 p-6 rounded-2xl bg-gray-50 border-2 border-dashed border-gray-200 text-left max-w-md mx-auto font-mono text-xs text-gray-800 space-y-2 relative">
                      <div className="absolute top-0 right-4 translate-y-[-50%] bg-emerald-600 text-white font-bold px-2 py-0.5 rounded text-[10px]">
                        DRAFT BOOKING
                      </div>
                      <p className="font-bold border-b border-gray-200 pb-2 text-center text-sm">
                        CLINIC PASS SPECIMEN
                      </p>
                      <p><strong className="text-gray-500">PROVIDER:</strong> Dr. Syed Ishfaq (Gastro)</p>
                      <p><strong className="text-gray-500">PATIENT:</strong> {formData.name}</p>
                      <p><strong className="text-gray-500">PHONE:</strong> {formData.phone}</p>
                      <p><strong className="text-gray-500">SYMPTOMS:</strong> {formData.symptoms}</p>
                      <p><strong className="text-gray-500">PREFERRED SLOT:</strong> {formData.preferredTime}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                      <a
                        href={receiptUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm cursor-pointer"
                        id="auto-redirect-btn"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send WhatsApp Ticket Now</span>
                      </a>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="text-gray-500 hover:text-gray-900 font-semibold text-xs py-2 px-4 underline cursor-pointer"
                      >
                        Book another appointment
                      </button>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
