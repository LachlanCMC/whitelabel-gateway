
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";

const ComplianceSection = () => {
  const certifications = [
    { name: "ISO 27001", type: "Security" },
    { name: "SOC 2 Type II", type: "Compliance" },
    { name: "GDPR Compliant", type: "Privacy" },
    { name: "PCI DSS", type: "Payment Security" },
  ];

  const regulations = [
    { name: "FCA Regulated", description: "Financial Conduct Authority (UK)" },
    { name: "FINRA Compliance", description: "Financial Industry Regulatory Authority (US)" },
    { name: "ESMA Guidelines", description: "European Securities and Markets Authority" },
    { name: "MiFID II", description: "Markets in Financial Instruments Directive" },
  ];

  return (
    <section id="compliance" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 gradient-background -z-10 opacity-30"></div>
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          subtleText="Trust & Security"
          title="Enterprise-grade compliance and security"
          description="Our platform meets the highest standards of security and regulatory compliance, giving you and your customers peace of mind."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <Card className="animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-invest-500" />
                Certifications & Standards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert) => (
                  <div key={cert.name} className="p-4 border rounded-lg">
                    <Badge variant="outline" className="mb-2 bg-invest-50 text-invest-700 border-invest-200">
                      {cert.type}
                    </Badge>
                    <p className="font-medium">{cert.name}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-muted-foreground">
                <p>Our infrastructure undergoes regular security audits and penetration testing to ensure the highest level of protection for your data and your customers' investments.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-invest-500" />
                Regulatory Compliance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {regulations.map((reg) => (
                  <div key={reg.name} className="p-4 border rounded-lg">
                    <p className="font-medium">{reg.name}</p>
                    <p className="text-sm text-muted-foreground mt-1">{reg.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-muted-foreground">
                <p>Our compliance framework helps you navigate complex financial regulations across multiple jurisdictions, with built-in support for KYC, AML, and tax reporting requirements.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
