'use client';

import { Service } from '@/types';
import { ServiceCard } from '@/components/cards/service-card';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import Link from 'next/link';

interface FeaturedServicesProps {
  services: Service[];
  title?: string;
  description?: string;
}

export function FeaturedServices({
  services,
  title = 'Our Services',
  description = 'Experience our curated selection of premium beauty treatments',
}: FeaturedServicesProps) {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-balance">{title}</h2>
          <p className="mt-4 text-lg text-[#666666] max-w-2xl mx-auto">
            {description}
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>

        {/* View All CTA */}
        <ScrollReveal className="text-center">
          <Link
            href="/services"
            className="inline-block px-6 py-3 border-2 border-[#d4af37] text-[#d4af37] font-medium uppercase tracking-wide rounded-lg transition-all duration-300 hover:bg-[#f5f1e8]"
          >
            View All Services
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
