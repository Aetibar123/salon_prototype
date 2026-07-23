'use client';

import { AppointmentForm } from '@/components/forms/appointment-form';

export default function BookPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[#faf8f4] to-[#f5f1e8] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-balance">Book Your Appointment</h1>
            <p className="mt-4 text-lg text-[#666666]">
              Schedule your beauty treatment with our expert stylists at your convenience.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white shadow-sm rounded-lg p-8 md:p-12">
            <AppointmentForm />
          </div>

          {/* Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Hours',
                content: 'Mon-Sun: 10AM - 8PM',
              },
              {
                title: 'Location',
                content: '123 Elegance Ave, New York, NY 10001',
              },
              {
                title: 'Contact',
                content: '(555) 123-4567',
              },
            ].map((info) => (
              <div key={info.title} className="text-center">
                <h3 className="font-serif text-lg mb-2">{info.title}</h3>
                <p className="text-[#666666]">{info.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
