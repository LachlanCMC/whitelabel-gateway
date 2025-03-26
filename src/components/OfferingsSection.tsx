
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureCard } from "@/components/ui/feature-card";
import { Layers, Shield, Coins, Globe, Briefcase, CreditCard, Users, FileCheck, Building } from "lucide-react";

const offerings = [
  {
    id: 1,
    title: "Fractional Shares",
    description: "Enable investment in partial shares, increasing accessibility for all investor types.",
    icon: <Layers className="h-6 w-6" />
  },
  {
    id: 2,
    title: "Tax Wrappers",
    description: "ISA, SIPP, and Junior ISA solutions with full regulatory compliance and reporting.",
    icon: <Shield className="h-6 w-6" />
  },
  {
    id: 3,
    title: "Mutual Funds",
    description: "Access thousands of funds with automated processing and dividend reinvestment.",
    icon: <Coins className="h-6 w-6" />
  },
  {
    id: 4,
    title: "Global Market Trading",
    description: "Multi-currency support and efficient settlement across 35+ global exchanges.",
    icon: <Globe className="h-6 w-6" />
  },
  {
    id: 5,
    title: "Portfolio Management",
    description: "Comprehensive tools for building, analyzing, and rebalancing investment portfolios.",
    icon: <Briefcase className="h-6 w-6" />
  },
  {
    id: 6,
    title: "Payments Infrastructure",
    description: "Seamless payment processing, transfers, and reconciliation capabilities.",
    icon: <CreditCard className="h-6 w-6" />
  },
  {
    id: 7,
    title: "Client Onboarding",
    description: "Streamlined KYC, AML, and compliance processes for quick customer verification.",
    icon: <Users className="h-6 w-6" />
  },
  {
    id: 8,
    title: "AR Services",
    description: "Appointed Representative services with regulatory umbrella and oversight.",
    icon: <FileCheck className="h-6 w-6" />
  },
  {
    id: 9,
    title: "Custody Solutions",
    description: "Secure asset custody with comprehensive reconciliation and reporting.",
    icon: <Building className="h-6 w-6" />
  }
];

const OfferingsSection = () => {
  return (
    <section id="offerings" className="py-20 md:py-32 bg-gradient-to-b from-white to-invest-50/20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          subtleText="What We Offer"
          title="Modular capabilities for your wealth platform"
          description="Choose the building blocks that align with your business needs and customer expectations."
          centered={true}
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <FeatureCard
              key={offering.id}
              title={offering.title}
              description={offering.description}
              icon={offering.icon}
              index={index}
              className="hover:border-invest-200 hover:shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
