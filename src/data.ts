import { Service, FAQ, Testimonial, Benefit } from './types';

export const CONTACT_INFO = {
  phone: "+91 91035 34317",
  phoneFormatted: "+91-91035-34317",
  whatsapp: "+919103534317",
  whatsappDisplay: "+91 91035 34317",
  whatsappLink: "https://wa.me/919103534317",
  whatsappPrefilled: "Hello Doctor, I want to book an appointment.",
  address: "New Colony, Sopore, Jammu & Kashmir, 193201",
  landmark: "Near J&K Grameen Bank, Sopore",
  googleMapsAddressLink: "https://www.google.com/maps/search/?api=1&query=New+Colony+Sopore+Grameen+Bank",
  // Standard Google Maps embed focusing on Sopore Kashmir New Colony
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13166.442994998858!2d74.457199!3d34.291325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e100e47da69b2d%3A0xc3af7f152b21c6ba!2sNew%20Colony%2C%20Sopore%20193201!5e0!3m2!1sen!2sin!4v1716447811234!5m2!1sen!2sin"
};

export const CLINIC_TIMINGS = [
  {
    day: "Sunday",
    time: "09:30 AM onwards",
    badge: "Morning Session Available",
    classes: "border-emerald-200 bg-emerald-50/50"
  },
  {
    day: "Wednesday",
    time: "04:00 PM onwards",
    badge: "Evening Consultation",
    classes: "border-rose-200 bg-rose-50/50"
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: "b1",
    title: "DM Gastroenterologist (JIPMER)",
    description: "Doctor of Medicine in Gastroenterology from JIPMER Pondicherry - one of India's most prestigious central medical institutes.",
    iconName: "Award"
  },
  {
    id: "b2",
    title: "MD SKIMS Expertise",
    description: "Completed MD internal medicine from SKIMS, Srinagar's apex healthcare university, providing rich clinical insights.",
    iconName: "Stethoscope"
  },
  {
    id: "b3",
    title: "Advanced In-Clinic Diagnosis",
    description: "High-precision screening and expert assessments for complex liver diseases and clinical stomach issues.",
    iconName: "CheckCircle"
  },
  {
    id: "b4",
    title: "Instant Booking via WhatsApp",
    description: "Skip the long lines. Instant appointment confirmation and direct connection via dedicated hospital WhatsApp coordination.",
    iconName: "MessageSquareCode"
  },
  {
    id: "b5",
    title: "Patient-First Approach",
    description: "Personalized diet schedules, gentle consultation, and affordable follow-up charges designed for Kashmir's patients.",
    iconName: "Heart"
  },
  {
    id: "b6",
    title: "Convenient Location",
    description: "Centrally located at New Colony Sopore, with ample parking and accessibility, right near Grameen Bank.",
    iconName: "MapPin"
  }
];

export const SERVICES: Service[] = [
  {
    id: "gas",
    title: "Gas & Flatulence",
    description: "Expert cure for persistent bloating, belching, and internal stomach gas. Customized gut motility treatments and dietary analysis.",
    iconName: "Wind",
    prefilledMessage: "Hello Dr. Syed Ishfaq, I want to book an appointment for Gas and Bloating treatment."
  },
  {
    id: "acidity",
    title: "Chronic Acidity & GERD",
    description: "Cure heart-burn, chest pain, and acid reflux. Customized diagnostic protocols for permanent hyperacidity relief.",
    iconName: "ShieldAlert",
    prefilledMessage: "Hello Dr. Syed Ishfaq, I want to book an appointment for persistent Acidity and Acid Reflux."
  },
  {
    id: "bloating",
    title: "Stomach Bloating",
    description: "Heaviness or swelling in the stomach. Effective clinical mapping to restore normal bowel and core digestive system mechanics.",
    iconName: "Activity",
    prefilledMessage: "Hello Dr. Syed Ishfaq, I want to book an appointment for chronic bloating and stomach heaviness."
  },
  {
    id: "indigestion",
    title: "Indigestion (Dyspepsia)",
    description: "Relief from early satiety, stomach burning, and feeling full. Root cause analysis for persistent weak digestion system.",
    iconName: "Compass",
    prefilledMessage: "Hello Dr. Syed Ishfaq, I want to book an appointment for continuous indigestion problems."
  },
  {
    id: "liver",
    title: "Liver Diseases",
    description: "Comprehensive management of Jaundice, Hepatitis, elevated liver enzymes (SGOT/SGPT), and cirrhosis care with world-class protocols.",
    iconName: "Activity", // LIVER surrogate
    prefilledMessage: "Hello Dr. Syed Ishfaq, I want to book an appointment for Liver related disease consultation."
  },
  {
    id: "ulcer",
    title: "Stomach & Duodenal Ulcers",
    description: "Accurate evaluation of H. pylori infection, peptic ulcers, and burning stomach pains with highly modern gut healing regime.",
    iconName: "Flame",
    prefilledMessage: "Hello Dr. Syed Ishfaq, I want to book an appointment for Ulcer-related stomach pain."
  },
  {
    id: "constipation",
    title: "Chronic Constipation",
    description: "Scientific and long-term relief from difficult bowel movements, hard stools, and modern functional constipation syndromes.",
    iconName: "TrendingDown",
    prefilledMessage: "Hello Dr. Syed Ishfaq, I want to book an appointment for severe, chronic Constipation problems."
  },
  {
    id: "loose-motion",
    title: "Loose Motion (Diarrhea)",
    description: "Immediate expert support for acute, cyclic, or chronic watery stool, food poisoning, and intestinal infections.",
    iconName: "Droplets",
    prefilledMessage: "Hello Dr. Syed Ishfaq, I want to book an appointment for Diarrhea / Loose Motion treatment."
  },
  {
    id: "ibs",
    title: "IBS (Irritable Bowel)",
    description: "Anxiety-linked gut issues, crampy abdominal pains, alternate constipation and loose motions perfectly resolved.",
    iconName: "Sparkles",
    prefilledMessage: "Hello Dr. Syed Ishfaq, I want to book an appointment for IBS (Irritable Bowel Syndrome)."
  },
  {
    id: "fatty-liver",
    title: "Fatty Liver (NAFLD)",
    description: "Modern lifestyle fatty liver grade 1/2/3 reversing procedures, lipid controls, and healthy visceral fat treatments.",
    iconName: "Layers",
    prefilledMessage: "Hello Dr. Syed Ishfaq, I want to book an appointment for Fatty Liver treatment and guidance."
  },
  {
    id: "stomach-pain",
    title: "Unexplained Stomach Pain",
    description: "Precise localization and diagnosis of abdominal cramps, sudden spikes, or persistent low-intensity deep pains.",
    iconName: "AlertTriangle",
    prefilledMessage: "Hello Dr. Syed Ishfaq, I want to book an appointment for persistent Stomach Pain."
  },
  {
    id: "digestive",
    title: "Digestive Disorders",
    description: "Underlying malabsorption, functional gut weakness, pan-digestive challenges expert supervision and therapy sessions.",
    iconName: "HeartPulse",
    prefilledMessage: "Hello Dr. Syed Ishfaq, I want to book an appointment for clinical Digestive Disorders."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Mohammad Ashraf Bhat",
    location: "Sopore Town",
    rating: 5,
    comment: "Dr. Syed Ishfaq is an extraordinary gastroenterologist. I had chronic acidity and bloat problems for 5 years and took various medicines. After just two weeks of his DM-specialized treatment, I am 90% better. Highly recommended in Sopore!",
    treatment: "Chronic Acidity & GERD"
  },
  {
    id: "t2",
    name: "Sajad Ahmad Dar",
    location: "Baramulla",
    rating: 5,
    comment: "Our family trusts only Dr. Syed Ishfaq for stomach problems. He is so polite, explains everything very clearly, and doesn't prescribe unnecessary medicines. The SKIMS/JIPMER reputation is fully visible in his humble attitude.",
    treatment: "Fatty Liver Grade 2"
  },
  {
    id: "t3",
    name: "Parveena Akhtar",
    location: "Rafiabad",
    rating: 5,
    comment: "Best stomach specialist in Sopore. I underwent treatment for severe abdominal pain and ulcers. His detailed guidance on hot spicy Kashmiri food changes, plus targeted medications, cured my burning pain of many years. Booking online was very fast.",
    treatment: "Stomach Ulcer cured"
  },
  {
    id: "t4",
    name: "Hilal Ahmad",
    location: "Sangrama",
    rating: 5,
    comment: "Quick diagnosis and very friendly consultation. I booked via WhatsApp, the response was very prompt and scheduling was effortless. This website is extremely helpful for Kashmiri patients to book directly from their phone.",
    treatment: "Severe Indigestion"
  }
];

export const FAQS: FAQ[] = [
  {
    question: "Who is the best gastroenterologist in Sopore?",
    answer: "Dr. Syed Ishfaq is one of the most highly qualified gastroenterologists practicing in Sopore, Jammu & Kashmir. He holds prestigious central degrees (MBBS, MD from SKIMS, and DM Gastroenterology from the renowned JIPMER Pondicherry), offering world-class expertise locally."
  },
  {
    question: "What digestive and stomach problems does the doctor treat?",
    answer: "He provides advanced, specialized treatments for stomach gas, acidity, GERD, severe abdominal bloating, fatty liver, jaundice, hepatitis, chronic constipation, loose motions, stomach ulcers, and Irritable Bowel Syndrome (IBS)."
  },
  {
    question: "How do I book an appointment with Dr. Syed Ishfaq?",
    answer: "You can book easily in two ways: (1) Click the green 'Book Appointment on WhatsApp' button to send a priority booking message over WhatsApp, or (2) fill out the quick contact form on this page which will generate a summarized reservation message to send directly to the clinic's reception."
  },
  {
    question: "Is WhatsApp booking available for Sopore patients?",
    answer: "Yes, fully active! Dr. Syed Ishfaq's clinic uses WhatsApp (+91 91035 34317) to provide the fastest, line-skipping appointment confirmations so patients from outside Sopore can travel safely with guaranteed timings."
  },
  {
    question: "What are Dr. Syed Ishfaq's clinic timings in Sopore?",
    answer: "The clinic runs on two major days with high accessibility: Sundays from 09:30 AM onwards, and Wednesdays from 04:00 PM onwards. It is recommended to pre-book hours in advance so you do not have to wait at the clinic."
  },
  {
    question: "Where is the clinic located in Sopore?",
    answer: "The clinic is very easy to find. It is located at New Colony Sopore, Jammu & Kashmir (Near J&K Grameen Bank New Colony branch) - accessible by local transport with dedicated parking spaces nearby."
  }
];
