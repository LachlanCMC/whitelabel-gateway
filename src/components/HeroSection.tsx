
import React from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { GradientText } from "@/components/ui/gradient-text";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden relative">
      <div className="absolute inset-0 gradient-background -z-10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-8 animate-fade-in max-w-2xl">
            <p className="inline-block text-sm font-medium tracking-widest uppercase bg-invest-50 text-invest-700 px-3 py-1 rounded-full mb-2 animate-fade-in-fast">
              B2B Investment Infrastructure
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight md:leading-tight">
              Launch investment products 
              <span className="block mt-2">
                <GradientText 
                  text="in weeks, not years" 
                  fromColor="from-invest-400" 
                  toColor="to-invest-600"
                  animate={true}
                  size="xl"
                />
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Comprehensive whitelabel & API solutions to build, launch, and scale exceptional investment experiences — with global reach and regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
          
          <div className="flex-1 w-full max-w-2xl lg:max-w-none animate-float">
            <AspectRatio ratio={4/3} className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
              <div className="glass-panel h-full w-full p-6 relative overflow-hidden">
                <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-invest-100 rounded-full opacity-50 blur-xl"></div>
                <div className="absolute left-12 top-12 w-24 h-24 bg-invest-200 rounded-full opacity-40 blur-lg"></div>
                
                <div className="relative z-10 h-full">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm animate-fade-in" style={{animationDelay: '0.1s'}}>
                        <h3 className="text-sm font-medium mb-1">Portfolio Value</h3>
                        <p className="text-2xl font-bold text-invest-600">£1,284,500</p>
                        <p className="text-xs text-green-600 mt-1">+3.2% today</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm animate-fade-in" style={{animationDelay: '0.3s'}}>
                        <h3 className="text-sm font-medium mb-1">Active Accounts</h3>
                        <p className="text-2xl font-bold text-invest-600">24,387</p>
                        <p className="text-xs text-green-600 mt-1">+128 this week</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mt-8">
                      <div className="bg-white rounded-lg p-4 shadow-sm animate-fade-in" style={{animationDelay: '0.2s'}}>
                        <h3 className="text-sm font-medium mb-1">API Uptime</h3>
                        <p className="text-2xl font-bold text-invest-600">99.99%</p>
                        <p className="text-xs text-slate-500 mt-1">Last 30 days</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm animate-fade-in" style={{animationDelay: '0.4s'}}>
                        <h3 className="text-sm font-medium mb-1">Global Markets</h3>
                        <p className="text-2xl font-bold text-invest-600">35+</p>
                        <p className="text-xs text-slate-500 mt-1">Trading globally</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AspectRatio>
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
