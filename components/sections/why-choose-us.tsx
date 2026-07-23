'use client';

import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Award, Users, Sparkles, Heart } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: 'Expert Stylists',
      description: 'Our team consists of award-winning professionals with international training and experience.',
    },
    {
      icon: Sparkles,
      title: 'Premium Products',
      description: 'We use only the finest luxury beauty and haircare brands from around the world.',
    },
    {
      icon: Heart,
      title: 'Client Care',
      description: 'Your satisfaction is our priority. We provide personalized consultations for every service.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join our exclusive community of beauty enthusiasts and enjoy member-only benefits.',
    },
  ];

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <h2>Why Choose Luxe Salon</h2>
          <p className="mt-4 text-lg text-[#666666] max-w-2xl mx-auto">
            Excellence isn't an act, but a habit. We are committed to providing the best salon experience.
          </p>
        </ScrollReveal>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <ScrollReveal key={reason.title} delay={index * 100}>
                <div className="text-center p-6 rounded-lg hover:bg-[#f9f9f9] transition-colors">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-[#f5f1e8] rounded-full">
                      <Icon size={28} className="text-[#d4af37]" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl mb-2">{reason.title}</h3>
                  <p className="text-[#666666] text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
