
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "@/components/ui/testimonial-card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "CMC Invest's API allowed us to launch our investment app 60% faster than building from scratch. Their fractional shares feature has been a game-changer for our user engagement.",
      author: "Sarah Johnson",
      position: "CTO",
      companyName: "FinTech Solutions Ltd",
    },
    {
      quote: "The whitelabel platform gave us complete control over branding while providing enterprise-grade security and compliance. Our customers trust us with their investments because we trust CMC Invest.",
      author: "Michael Chen",
      position: "Head of Product",
      companyName: "Wealth Managers International",
    },
    {
      quote: "Implementing the tax wrapper functionality saved us months of development time and ensured we were fully compliant with regulations from day one.",
      author: "Jessica Williams",
      position: "Director of Operations",
      companyName: "NexGen Investments",
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          subtleText="Success Stories"
          title="Trusted by innovative financial companies"
          description="See how businesses like yours are leveraging our platform to deliver exceptional investment experiences to their customers."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              companyName={testimonial.companyName}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
