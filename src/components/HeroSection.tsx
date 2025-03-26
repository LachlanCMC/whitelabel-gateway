
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
              Wealth platform as a service
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
            {/* Modern stats display */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100/70">
              <div className="p-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="group">
                      <div className="flex items-baseline mb-2">
                        <span className="text-4xl font-bold text-invest-700 group-hover:text-invest-600 transition-colors">1m+</span>
                        <span className="ml-1 text-invest-500 text-lg">users</span>
                      </div>
                      <p className="text-slate-600">Total traders and investors globally</p>
                    </div>
                    
                    <div className="group">
                      <div className="flex items-baseline mb-2">
                        <span className="text-4xl font-bold text-invest-700 group-hover:text-invest-600 transition-colors">150+</span>
                      </div>
                      <p className="text-slate-600">Partners supported across markets</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="group">
                      <div className="flex items-baseline mb-2">
                        <span className="text-4xl font-bold text-invest-700 group-hover:text-invest-600 transition-colors">99.95%</span>
                      </div>
                      <p className="text-slate-600">Core platform uptime reliability</p>
                    </div>
                    
                    <div className="group">
                      <div className="flex items-baseline mb-2">
                        <span className="text-4xl font-bold text-invest-700 group-hover:text-invest-600 transition-colors">30+</span>
                        <span className="ml-1 text-invest-500 text-lg">years</span>
                      </div>
                      <p className="text-slate-600">Industry expertise and experience</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-invest-50/10 pointer-events-none"></div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-invest-100/20"></div>
              <div className="absolute top-10 -left-10 w-20 h-20 rounded-full bg-blue-100/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
