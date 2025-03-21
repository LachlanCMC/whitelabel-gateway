
import React from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { GradientText } from "@/components/ui/gradient-text";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden relative">
      <div className="absolute inset-0 bg-white -z-10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          <div className="flex-1 space-y-8 animate-fade-in max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight md:leading-tight">
              Launch wealth products 
              <span className="block mt-2">
                in weeks, not years
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Comprehensive whitelabel & API solutions to build, launch, and scale exceptional investment experiences — with global reach and regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <ShimmerButton 
                className="bg-invest-500 hover:bg-invest-600 text-white px-6 py-3 text-lg rounded-full flex items-center justify-center gap-2"
              >
                Get in Touch <ArrowRight className="h-5 w-5" />
              </ShimmerButton>
              <ShimmerButton 
                className="bg-transparent border border-gray-300 hover:bg-slate-50 text-slate-800 px-6 py-3 text-lg rounded-full"
                shimmerColor="rgba(0,0,0,0.03)"
              >
                Explore API Docs
              </ShimmerButton>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-2xl lg:max-w-none animate-float">
            <AspectRatio ratio={4/3} className="rounded-xl overflow-hidden shadow-lg bg-white border border-slate-200">
              <div className="h-full w-full p-6 relative overflow-hidden">
                <div className="relative z-10 h-full">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                        <h3 className="text-sm font-medium mb-1 text-invest-700">Total traders and investors</h3>
                        <p className="text-2xl font-bold text-invest-600">1m+</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                        <h3 className="text-sm font-medium mb-1 text-invest-700">Partners supported</h3>
                        <p className="text-2xl font-bold text-invest-600">150+</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                        <h3 className="text-sm font-medium mb-1 text-invest-700">Core uptime</h3>
                        <p className="text-2xl font-bold text-invest-600">99.95%</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                        <h3 className="text-sm font-medium mb-1 text-invest-700">Years of experience</h3>
                        <p className="text-2xl font-bold text-invest-600">30+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
