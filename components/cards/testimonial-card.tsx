'use client';

import { Testimonial } from '@/types';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="border border-[#e8e8e8] rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-all">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-[#d4af37] text-[#d4af37]"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-base leading-relaxed mb-6 text-foreground italic">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#c9a961]" />
        <div>
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-[#666666]">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
