export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon name matching
  prefilledMessage: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  treatment: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
