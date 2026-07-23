'use client';

import { Hero } from '@/components/sections/hero';
import { FeaturedServices } from '@/components/sections/featured-services';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { CTABanner } from '@/components/sections/cta-banner';
import { SERVICES, TESTIMONIALS } from '@/lib/constants';

export default function Page() {
  return (
    <>
      <Hero
        title="Luxe Salon"
        subtitle="Experience premium beauty treatments in an elegant sanctuary of wellness and sophistication"
      />
      <FeaturedServices services={SERVICES.slice(0, 6)} />
      <WhyChooseUs />
      <TestimonialsSection testimonials={TESTIMONIALS} />
      <CTABanner
        title="Ready for Your Transformation?"
        subtitle="Book your appointment today and discover the luxury salon experience."
      />
    </>
  );
}
