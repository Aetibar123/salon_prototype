'use client';

import { Service } from '@/types';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link href={`/services/${service.slug}`}>
        <div className="border border-[#e8e8e8] rounded-lg overflow-hidden bg-white shadow-sm group-hover:shadow-md transition-shadow">
          {/* Image */}
          <div className="aspect-square bg-gradient-to-br from-[#f5f1e8] to-[#faf8f4] relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-[#d4af37]">
              <span className="text-4xl font-serif">{service.name.charAt(0)}</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-serif mb-2 group-hover:text-[#d4af37] transition-colors">
              {service.name}
            </h3>
            <p className="text-sm text-[#666666] mb-4">{service.description}</p>

            {/* Meta */}
            <div className="flex items-center justify-between pt-4 border-t border-[#e8e8e8]">
              <div>
                <p className="text-2xl font-serif text-[#d4af37]">${service.price}</p>
                <p className="text-xs text-[#666666]">{service.duration}</p>
              </div>
              <span className="text-xs uppercase tracking-wider text-[#d4af37] font-medium">
                Learn More →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
