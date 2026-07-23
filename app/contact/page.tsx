'use client';

import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-balance">Get In Touch</h1>
          <p className="mt-4 text-lg text-[#666666] max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <ScrollReveal className="space-y-8">
              {[
                {
                  icon: Phone,
                  title: 'Call Us',
                  content: '(555) 123-4567',
                  subtext: 'Mon-Sun, 10AM - 8PM EST',
                },
                {
                  icon: Mail,
                  title: 'Email Us',
                  content: 'hello@luxesalon.com',
                  subtext: 'We respond within 24 hours',
                },
                {
                  icon: MapPin,
                  title: 'Visit Us',
                  content: '123 Elegance Ave',
                  subtext: 'New York, NY 10001',
                },
                {
                  icon: Clock,
                  title: 'Hours',
                  content: 'Monday - Friday: 10AM - 8PM',
                  subtext: 'Saturday - Sunday: 11AM - 7PM',
                },
              ].map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={info.title}>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-[#f5f1e8] rounded-lg flex items-center justify-center">
                          <Icon size={24} className="text-[#d4af37]" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-serif font-semibold mb-1">
                          {info.title}
                        </h3>
                        <p className="text-foreground mb-1">{info.content}</p>
                        <p className="text-sm text-[#666666]">{info.subtext}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <ScrollReveal delay={200}>
            <div className="border border-[#e8e8e8] rounded-lg p-8 bg-[#f9f9f9]">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <Check size={40} className="text-green-600" />
                    </motion.div>
                    <h3 className="text-2xl font-serif mb-2">Message Sent!</h3>
                    <p className="text-[#666666]">
                      Thank you for reaching out. We&apos;ll get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#e8e8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent bg-white"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-[#e8e8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent bg-white"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-[#e8e8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent bg-white"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#e8e8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent bg-white"
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-[#e8e8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent resize-none bg-white"
                        placeholder="Your message..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 font-medium uppercase tracking-wide rounded-lg transition-all duration-300 ${
                        isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'px-6 py-3 bg-[#d4af37] text-foreground font-medium uppercase tracking-wide rounded-lg transition-all duration-300 hover:bg-[#c9a961] hover:shadow-lg active:scale-95'
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
