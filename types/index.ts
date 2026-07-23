export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  price: number;
  duration: string;
  image: string;
  category: 'hair' | 'makeup' | 'nails' | 'wellness';
  benefits: string[];
}

export interface Team {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  experience: number;
  social?: {
    instagram?: string;
    linkedin?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  service: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: number;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
}

export interface FormData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  [key: string]: any;
}
