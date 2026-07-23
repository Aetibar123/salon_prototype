'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

export function AppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        notes: '',
      });
    }, 3000);
  };

  return (
    <div className="relative">
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
            <h3 className="text-2xl font-serif mb-2">Booking Confirmed!</h3>
            <p className="text-[#666666] mb-4">
              Thank you for booking your appointment. We&apos;ll see you soon!
            </p>
            <p className="text-sm text-[#666666]">
              A confirmation email has been sent to {formData.email}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e8e8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e8e8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e8e8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Service *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e8e8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="hair-cut">Hair Cut & Style</option>
                  <option value="color">Color Treatment</option>
                  <option value="bridal">Bridal Makeup</option>
                  <option value="nails">Manicure & Pedicure</option>
                  <option value="facial">Facial Treatment</option>
                  <option value="massage">Massage Therapy</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e8e8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Time *</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e8e8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Additional Notes
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-[#e8e8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent resize-none"
                placeholder="Any special requests or preferences?"
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
                  Confirming...
                </span>
              ) : (
                'Confirm Booking'
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
