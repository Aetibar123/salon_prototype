'use client';

import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h1 className="text-balance mb-6">About Luxe Salon</h1>
            <p className="text-lg text-[#666666] mb-4">
              Founded in 2015, Luxe Salon has been a sanctuary of luxury beauty and wellness in the heart of New York City. Our mission is to provide world-class beauty treatments in an atmosphere of elegance and tranquility.
            </p>
            <p className="text-lg text-[#666666] mb-6">
              We believe that beauty is not just about appearance—it&apos;s about feeling confident, pampered, and rejuvenated. Every service at Luxe Salon is designed to deliver an exceptional experience.
            </p>
            <Link href="/book" className="px-6 py-3 bg-[#d4af37] text-foreground font-medium uppercase tracking-wide rounded-lg transition-all duration-300 hover:bg-[#c9a961] hover:shadow-lg active:scale-95">
              Book Your Experience
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="aspect-square bg-gradient-to-br from-[#f5f1e8] to-[#faf8f4] rounded-lg flex items-center justify-center">
              <span className="text-6xl font-serif text-[#d4af37]">L</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#f9f9f9] py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2>Our Values</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We maintain the highest standards in every aspect of our service, from product quality to staff expertise.',
              },
              {
                title: 'Innovation',
                description: 'We stay ahead of beauty trends and continuously invest in the latest techniques and technologies.',
              },
              {
                title: 'Care',
                description: 'We treat every client like family, understanding their unique needs and preferences.',
              },
            ].map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-serif text-foreground">
                      {value.title.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl mb-2">{value.title}</h3>
                  <p className="text-[#666666]">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <ScrollReveal className="text-center mb-12">
          <h2>By The Numbers</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: '9+', label: 'Years of Excellence' },
            { number: '50K+', label: 'Happy Clients' },
            { number: '12', label: 'Expert Stylists' },
            { number: '6', label: 'Service Categories' },
          ].map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100} className="text-center">
              <div className="text-4xl font-serif text-[#d4af37] mb-2">
                {stat.number}
              </div>
              <p className="text-[#666666]">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Team Preview */}
      <section className="bg-[#f9f9f9] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2>Meet Our Team</h2>
            <p className="mt-4 text-lg text-[#666666] max-w-2xl mx-auto">
              Our stylists and specialists bring years of international experience and passion for beauty
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: 'Sofia Rossi', role: 'Creative Director' },
              { name: 'Marcus Thompson', role: 'Senior Stylist' },
              { name: 'Elena Martinez', role: 'Makeup Artist' },
              { name: 'Aisha Patel', role: 'Esthetician' },
            ].map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 100}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-gradient-to-br from-[#d4af37] to-[#c9a961]" />
                  <div className="p-4 text-center">
                    <p className="font-serif font-semibold">{member.name}</p>
                    <p className="text-sm text-[#666666]">{member.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <Link href="/team" className="px-6 py-3 border-2 border-[#d4af37] text-[#d4af37] font-medium uppercase tracking-wide rounded-lg transition-all duration-300 hover:bg-[#f5f1e8]">
              View Full Team
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
