import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureCard } from "@/components/ui/feature-card";
import { GradientText } from "@/components/ui/gradient-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Briefcase, ChartBar, Globe, Shield, Database, Link, DollarSign, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Fractional Shares",
      description: "Enable your customers to invest in fractional units of expensive stocks, increasing accessibility and portfolio diversification.",
      icon: <ChartBar className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Tax Wrappers",
      description: "Support for ISAs, SIPPs, and other tax-efficient investment vehicles, fully compliant with local regulations.",
      icon: <DollarSign className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Global Share Dealing",
      description: "Offer access to international markets with multi-currency support and efficient settlement workflows.",
      icon: <Globe className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Portfolio Management",
      description: "Comprehensive tools for constructing, analyzing, and rebalancing investment portfolios with real-time data.",
      icon: <Briefcase className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "API Integration",
      description: "Easily integrate with your existing systems using our comprehensive, well-documented REST APIs.",
      icon: <Link className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Whitelabel UI",
      description: "Fully customizable user interfaces that can be branded to match your company's identity and design language.",
      icon: <Users className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 relative bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 -z-10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          subtleText="Features"
          title="Everything you need to launch investment products"
          description="Our platform combines powerful investment capabilities with flexible integration options, so you can get to market quickly without compromising on features."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
              imageUrl={feature.imageUrl}
            />
          ))}
        </div>

        <div className="mt-16 animate-fade-in flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="text-center md:text-left md:max-w-lg">
            <h3 className="text-2xl font-bold mb-4">
              <GradientText 
                text="Ready to transform your investment platform?" 
                fromColor="from-invest-500" 
                toColor="to-invest-700"
                animate={true}
              />
            </h3>
            <p className="text-muted-foreground mb-6">
              Join leading financial companies that are leveraging our infrastructure to deliver exceptional investment experiences.
            </p>
          </div>
          <div>
            <ShimmerButton 
              className="bg-invest-500 hover:bg-invest-600 text-white px-6 py-3 text-lg"
            >
              Book a Demo
            </ShimmerButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
