'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface CTABannerProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function CTABanner({
  title,
  subtitle,
  ctaText = 'Get Started',
  ctaHref = '/book',
}: CTABannerProps) {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full opacity-5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-balance text-white mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <Link href={ctaHref} className="px-6 py-3 bg-[#d4af37] text-foreground font-medium uppercase tracking-wide rounded-lg transition-all duration-300 hover:bg-[#c9a961] hover:shadow-lg active:scale-95 inline-block">
            {ctaText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
