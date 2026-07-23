'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[#faf8f4] to-[#f5f1e8] flex items-center justify-center pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-8xl font-serif text-[#d4af37] mb-4">404</div>
          <h1 className="text-balance mb-4">Page Not Found</h1>
          <p className="text-lg text-[#666666] mb-8 max-w-md mx-auto">
            Sorry, the page you&apos;re looking for doesn&apos;t exist. Let us help you get back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="px-6 py-3 bg-[#d4af37] text-foreground font-medium uppercase tracking-wide rounded-lg transition-all duration-300 hover:bg-[#c9a961] hover:shadow-lg active:scale-95">
              Go Home
            </Link>
            <Link href="/book" className="px-6 py-3 border-2 border-[#d4af37] text-[#d4af37] font-medium uppercase tracking-wide rounded-lg transition-all duration-300 hover:bg-[#f5f1e8]">
              Book Appointment
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
