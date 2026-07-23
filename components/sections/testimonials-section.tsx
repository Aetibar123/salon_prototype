'use client';

import { Testimonial } from '@/types';
import { TestimonialCard } from '@/components/cards/testimonial-card';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import Link from 'next/link';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  title?: string;
}

export function TestimonialsSection({
  testimonials,
  title = 'What Our Clients Say',
}: TestimonialsSectionProps) {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-balance">{title}</h2>
          <p className="mt-4 text-lg text-[#666666]">
            Discover why our clients trust us with their beauty needs
          </p>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 100}>
              <TestimonialCard testimonial={testimonial} />
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal className="text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-[#666666] mb-6">
              Join hundreds of satisfied clients who have experienced our luxury salon services.
            </p>
            <Link href="/book" className="px-6 py-3 bg-[#d4af37] text-foreground font-medium uppercase tracking-wide rounded-lg transition-all duration-300 hover:bg-[#c9a961] hover:shadow-lg active:scale-95">
              Book Your Appointment
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
