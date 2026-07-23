'use client';

import { PRICING_TIERS } from '@/lib/constants';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-balance">Flexible Membership Plans</h1>
          <p className="mt-4 text-lg text-[#666666] max-w-2xl mx-auto">
            Choose the perfect plan to unlock exclusive benefits and savings on your favorite services
          </p>
        </ScrollReveal>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PRICING_TIERS.map((tier, index) => (
            <ScrollReveal
              key={tier.id}
              delay={index * 100}
              className={tier.popular ? 'md:scale-105' : ''}
            >
              <div
                className={`rounded-lg p-8 transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-br from-[#d4af37] to-[#c9a961] text-foreground shadow-lg'
                    : 'border border-[#e8e8e8] bg-white shadow-sm hover:shadow-md'
                }`}
              >
                {tier.popular && (
                  <div className="inline-block bg-white text-[#d4af37] px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
                    Most Popular
                  </div>
                )}

                <h3 className="font-serif text-2xl mb-2">{tier.name}</h3>
                <p
                  className={`text-sm mb-6 ${
                    tier.popular ? 'text-foreground/80' : 'text-[#666666]'
                  }`}
                >
                  {tier.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-serif">${tier.price}</span>
                    <span
                      className={`text-sm ${
                        tier.popular
                          ? 'text-foreground/70'
                          : 'text-[#666666]'
                      }`}
                    >
                      /{tier.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 items-start"
                    >
                      <Check
                        size={20}
                        className={`flex-shrink-0 mt-0.5 ${
                          tier.popular
                            ? 'text-white'
                            : 'text-[#d4af37]'
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          tier.popular
                            ? 'text-foreground'
                            : 'text-foreground'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href="/book"
                  className={`block w-full text-center py-3 font-medium uppercase tracking-wide rounded-lg transition-all duration-300 ${
                    tier.popular
                      ? 'bg-white text-[#d4af37] hover:bg-gray-100'
                      : 'px-6 py-3 bg-[#d4af37] text-foreground font-medium uppercase tracking-wide rounded-lg transition-all duration-300 hover:bg-[#c9a961] hover:shadow-lg active:scale-95'
                  }`}
                >
                  Choose Plan
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* FAQ Section */}
        <ScrollReveal className="max-w-2xl mx-auto">
          <h2 className="text-center font-serif text-2xl mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Can I cancel my membership anytime?',
                a: 'Yes, memberships are flexible and can be cancelled at any time without penalties.',
              },
              {
                q: 'Can I upgrade or downgrade my plan?',
                a: 'Absolutely! You can change your plan at any time to better suit your needs.',
              },
              {
                q: 'Are there any enrollment fees?',
                a: 'No, there are no hidden fees or enrollment charges. You only pay the monthly membership fee.',
              },
              {
                q: 'Do benefits roll over each month?',
                a: 'Our standard plans do not roll over, but your membership renews monthly with fresh benefits.',
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group border border-[#e8e8e8] rounded-lg p-4 cursor-pointer hover:shadow-sm transition-shadow"
              >
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  {faq.q}
                  <span className="text-[#d4af37] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-[#666666] mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
