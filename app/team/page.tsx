'use client';

import { TEAM } from '@/lib/constants';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { LinkedIn, Instagram } from '@mui/icons-material';


export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-balance">Meet Our Team</h1>
          <p className="mt-4 text-lg text-[#666666] max-w-2xl mx-auto">
            Our passionate team of beauty experts brings years of international experience and dedication to helping you feel your best.
          </p>
        </ScrollReveal>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {TEAM.map((member, index) => (
            <ScrollReveal key={member.id} delay={index * 100}>
              <div className="group">
                <div className="aspect-square bg-gradient-to-br from-[#f5f1e8] to-[#faf8f4] rounded-lg mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-[#d4af37] text-6xl font-serif">
                    {member.name.charAt(0)}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div>
                  <h3 className="font-serif text-2xl mb-1">{member.name}</h3>
                  <p className="text-[#d4af37] font-medium uppercase tracking-wide text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="text-[#666666] mb-6 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="text-xs bg-[#f5f1e8] text-foreground px-3 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Experience */}
                  <p className="text-sm text-[#666666] mb-4">
                    <span className="font-semibold text-foreground">
                      {member.experience} years
                    </span>
                    {' '}of experience
                  </p>

                  {/* Social Links */}
                  {member.social && (
                    <div className="flex gap-3">
                      {member.social.instagram && (
                        <a
                          href={member.social.instagram}
                          className="text-[#666666] hover:text-[#d4af37] transition-colors"
                          aria-label="Instagram"
                        >
                          <Instagram />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="text-[#666666] hover:text-[#d4af37] transition-colors"
                          aria-label="LinkedIn"
                        >
                          <LinkedIn/>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
