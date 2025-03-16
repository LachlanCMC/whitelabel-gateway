
import React from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { GradientText } from "@/components/ui/gradient-text";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden relative">
      <div className="absolute inset-0 gradient-background -z-10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
          <p className="inline-block text-sm font-medium tracking-widest uppercase bg-invest-50 text-invest-700 px-3 py-1 rounded-full mb-2">
            B2B Investment Infrastructure
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight md:leading-tight">
            Launch investment products 
            <span className="block mt-2">
              <GradientText 
                text="in weeks, not years" 
                fromColor="from-invest-400" 
                toColor="to-invest-600"
              />
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive whitelabel & API solutions to build, launch, and scale exceptional investment experiences — with global reach and regulatory compliance.
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
              Explore API Docs
            </ShimmerButton>
          </div>
        </div>
      </div>

      {/* Abstract shapes or decorative elements */}
      <div className="hidden md:block absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-invest-50 opacity-70 blur-3xl"></div>
      <div className="hidden md:block absolute top-32 -right-32 w-96 h-96 rounded-full bg-invest-50 opacity-60 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
