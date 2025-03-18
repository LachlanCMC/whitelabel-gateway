
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArrowRight } from "lucide-react";

const WhitelabelSection = () => {
  return (
    <section id="whitelabel" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Screenshots on the left - fixed with max-width container */}
          <div className="space-y-6 relative animate-fade-in max-w-md mx-auto lg:mx-0">
            <div className="relative z-10 transform rotate-[-5deg] shadow-xl rounded-3xl overflow-hidden border border-gray-100">
              <img
                src="/lovable-uploads/54753089-fb7a-4a30-a9f0-7fa4f0e25ef2.png"
                alt="Whitelabel Mobile App Portfolio View"
                className="w-full h-auto"
              />
            </div>
            <div className="relative z-20 ml-16 -mt-12 transform rotate-[5deg] shadow-xl rounded-3xl overflow-hidden border border-gray-100">
              <img
                src="/lovable-uploads/d5846e9b-be30-4d00-b842-839774e04402.png"
                alt="Whitelabel Mobile App Trading View"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Description on the right */}
          <div className="space-y-8 animate-fade-in">
            <SectionHeading
              subtleText="Whitelabel Solutions"
              title="Branded investment experiences"
              description="Fully customizable user interfaces that can be branded to match your company's identity and design language."
              centered={false}
            />
            
            <div className="space-y-6">
              <div className="border rounded-lg p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Custom Branding</h3>
                <p className="text-muted-foreground">Colors, logos, typography, and UI elements that align perfectly with your brand identity.</p>
              </div>
              
              <div className="border rounded-lg p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Flexible Layouts</h3>
                <p className="text-muted-foreground">Configurable interfaces to prioritize the information most important to your customers.</p>
              </div>
              
              <div className="border rounded-lg p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">White Label Mobile Apps</h3>
                <p className="text-muted-foreground">Native iOS and Android applications that can be published under your company's name.</p>
              </div>
            </div>
            
            <ShimmerButton className="flex items-center gap-2 bg-invest-500 hover:bg-invest-600 text-white">
              Explore Whitelabel Options <ArrowRight className="h-4 w-4" />
            </ShimmerButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitelabelSection;
