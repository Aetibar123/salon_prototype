'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function Hero({
  title,
  subtitle,
  ctaText = 'Book Now',
  ctaHref = '/book',
  secondaryCtaText = 'Learn More',
  secondaryCtaHref = '/about',
}: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#faf8f4] to-[#f5f1e8] relative overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#d4af37] rounded-full opacity-5 blur-3xl" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#d4af37] rounded-full opacity-5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#d4af37] font-serif text-lg mb-4 uppercase tracking-widest"
          >
            Welcome to Luxury
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif mb-6 text-balance leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-[#666666] mb-8 max-w-2xl mx-auto text-pretty"
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href={ctaHref}
              className="px-6 py-3 bg-[#d4af37] text-foreground font-medium uppercase tracking-wide rounded-lg transition-all duration-300 hover:bg-[#c9a961] hover:shadow-lg active:scale-95"
            >
              {ctaText}
            </Link>
            <Link
              href={secondaryCtaHref}
              className="px-6 py-3 border-2 border-[#d4af37] text-[#d4af37] font-medium uppercase tracking-wide rounded-lg transition-all duration-300 hover:bg-[#f5f1e8]"
            >
              {secondaryCtaText}
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{ top:2, position:'relative',marginTop:'30px'}}
        >
          <div className="text-[#d4af37] text-sm uppercase tracking-wider font-medium" >
            Scroll to explore
          </div>
        </motion.div>
      </div>
    </section>
  );
}
