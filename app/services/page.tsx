'use client';

import { useState } from 'react';
import { SERVICES } from '@/lib/constants';
import { ServiceCard } from '@/components/cards/service-card';
import { ScrollReveal } from '@/components/animations/scroll-reveal';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Hair', 'Makeup', 'Nails', 'Wellness'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES
    : SERVICES.filter(
        (s) => s.category === selectedCategory.toLowerCase()
      );

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <h1 className="text-balance">Our Services</h1>
          <p className="mt-4 text-lg text-[#666666] max-w-2xl mx-auto">
            Discover our comprehensive range of premium beauty and wellness treatments
          </p>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium uppercase tracking-wide transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#d4af37] text-foreground'
                  : 'border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#f5f1e8]'
              }`}
            >
              {category}
            </button>
          ))}
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 50}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
