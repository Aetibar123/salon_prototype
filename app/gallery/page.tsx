'use client';

import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { motion } from 'framer-motion';

export default function GalleryPage() {
  const galleryItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    category: ['Hair', 'Makeup', 'Nails', 'Wellness'][i % 4],
  }));

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-balance">Gallery</h1>
          <p className="mt-4 text-lg text-[#666666] max-w-2xl mx-auto">
            Explore our stunning transformations and beautiful salon spaces
          </p>
        </ScrollReveal>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 30}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37] to-[#c9a961] opacity-0 group-hover:opacity-30 transition-opacity" />
                <div className="w-full h-full bg-gradient-to-br from-[#f5f1e8] to-[#faf8f4] flex items-center justify-center">
                  <span className="text-2xl font-serif text-[#d4af37]">
                    {item.category.charAt(0)}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-end justify-start p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
