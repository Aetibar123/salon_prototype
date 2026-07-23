'use client';

import { TESTIMONIALS } from '@/lib/constants';
import { TestimonialCard } from '@/components/cards/testimonial-card';
import { ScrollReveal } from '@/components/animations/scroll-reveal';

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-balance">Client Testimonials</h1>
          <p className="mt-4 text-lg text-[#666666] max-w-2xl mx-auto">
            Hear from our satisfied clients about their experiences at Luxe Salon
          </p>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 100}>
              <TestimonialCard testimonial={testimonial} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
