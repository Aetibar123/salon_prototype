'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#d4af37] rounded-full" />
              <span className="text-lg font-serif font-semibold">Luxe Salon</span>
            </div>
            <p className="text-sm text-gray-400">
              Experience luxury beauty treatments in an elegant sanctuary of wellness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'About', href: '/about' },
                { label: 'Blog', href: '/blog' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#d4af37] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                { label: 'Hair Services', href: '/services' },
                { label: 'Makeup', href: '/services' },
                { label: 'Nails', href: '/services' },
                { label: 'Wellness', href: '/services' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#d4af37] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex gap-2 items-start">
                <Phone size={16} className="text-[#d4af37] mt-1" />
                <span className="text-sm text-gray-400">(555) 123-4567</span>
              </div>
              <div className="flex gap-2 items-start">
                <Mail size={16} className="text-[#d4af37] mt-1" />
                <span className="text-sm text-gray-400">hello@luxesalon.com</span>
              </div>
              <div className="flex gap-2 items-start">
                <MapPin size={16} className="text-[#d4af37] mt-1" />
                <span className="text-sm text-gray-400">
                  123 Elegance Ave, New York, NY 10001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-right text-xs text-gray-500">
            <p>&copy; 2024 Luxe Salon. All rights reserved.</p>
            <div className="flex justify-center md:justify-end gap-4 mt-2">
              <Link href="/privacy" className="hover:text-[#d4af37]">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-[#d4af37]">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
