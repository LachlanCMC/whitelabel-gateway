
import React from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-white -z-10"></div>
      <div className="absolute right-0 top-32 w-1/3 h-1/3 bg-invest-50/50 rounded-full filter blur-3xl"></div>
      <div className="absolute left-0 bottom-0 w-1/4 h-1/4 bg-blue-50/40 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-8 animate-fade-in max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight md:leading-tight text-invest-800">
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
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <AspectRatio ratio={4/3} className="bg-white">
                <div className="p-6 h-full">
                  <div className="bg-gradient-to-br from-white to-slate-50 rounded-lg h-full shadow-sm border border-slate-100">
                    <div className="grid grid-cols-2 gap-4 p-6 h-full">
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-slate-100">
                          <h3 className="text-sm font-medium mb-1 text-invest-700">Total traders and investors</h3>
                          <p className="text-2xl font-bold text-invest-600">1m+</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-slate-100">
                          <h3 className="text-sm font-medium mb-1 text-invest-700">Partners supported</h3>
                          <p className="text-2xl font-bold text-invest-600">150+</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-slate-100">
                          <h3 className="text-sm font-medium mb-1 text-invest-700">Core uptime</h3>
                          <p className="text-2xl font-bold text-invest-600">99.95%</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-slate-100">
                          <h3 className="text-sm font-medium mb-1 text-invest-700">Years of experience</h3>
                          <p className="text-2xl font-bold text-invest-600">30+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AspectRatio>
              
              {/* Decorative elements */}
              <div className="absolute top-6 right-14 w-20 h-20 rounded-full bg-invest-100/40 filter blur-xl"></div>
              <div className="absolute bottom-10 left-6 w-16 h-16 rounded-full bg-blue-100/30 filter blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
