
import React from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { GradientText } from "@/components/ui/gradient-text";

const CtaSection = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 gradient-background -z-10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready to transform your 
            <span className="block mt-2">
              <GradientText 
                text="investment offerings?" 
                fromColor="from-invest-400" 
                toColor="to-invest-600"
              />
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join leading financial companies that are leveraging our infrastructure to deliver exceptional investment experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <ShimmerButton 
              className="bg-invest-500 hover:bg-invest-600 text-white px-6 py-3 text-lg"
            >
              Request a Demo
            </ShimmerButton>
            <ShimmerButton 
              className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 px-6 py-3 text-lg"
              shimmerColor="rgba(0,0,0,0.03)"
            >
              Contact Sales
            </ShimmerButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
