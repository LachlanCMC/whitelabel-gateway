
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureCard } from "@/components/ui/feature-card";
import { Briefcase, ChartBar, Globe, Shield, Database, Link, DollarSign, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Fractional Shares",
      description: "Enable your customers to invest in fractional units of expensive stocks, increasing accessibility and portfolio diversification.",
      icon: <ChartBar className="h-6 w-6" />
    },
    {
      title: "Tax Wrappers",
      description: "Support for ISAs, SIPPs, and other tax-efficient investment vehicles, fully compliant with local regulations.",
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: "Global Share Dealing",
      description: "Offer access to international markets with multi-currency support and efficient settlement workflows.",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Portfolio Management",
      description: "Comprehensive tools for constructing, analyzing, and rebalancing investment portfolios with real-time data.",
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      title: "API Integration",
      description: "Easily integrate with your existing systems using our comprehensive, well-documented REST APIs.",
      icon: <Link className="h-6 w-6" />
    },
    {
      title: "Whitelabel UI",
      description: "Fully customizable user interfaces that can be branded to match your company's identity and design language.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Data Security",
      description: "Enterprise-grade encryption and security protocols protecting sensitive financial and personal information.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Compliance Framework",
      description: "Built-in compliance with financial regulations including KYC, AML, and GDPR across multiple jurisdictions.",
      icon: <Database className="h-6 w-6" />
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          subtleText="Features"
          title="Everything you need to launch investment products"
          description="Our platform combines powerful investment capabilities with flexible integration options, so you can get to market quickly without compromising on features."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
