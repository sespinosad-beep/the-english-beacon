
import type { ReactNode } from 'react';

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  status: string;
}

export interface Faq {
  question: string;
  answer: string;
}
