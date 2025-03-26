
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
              Wealth Platform 
              <span className="block mt-2">
                as a Service
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Launch comprehensive investment solutions in weeks, not years. Seamlessly integrate, scale, and customize your wealth management offering with our enterprise-grade infrastructure.
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
            {/* Animated graphic illustrating modules assembling */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg border border-slate-100/70 bg-white p-6">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-invest-50/30 rounded-full filter blur-2xl"></div>
              
              <div className="relative z-10">
                {/* Animated modules assembling illustration */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Animated modules that appear to assemble together */}
                  {['Fractional Shares', 'Tax Wrappers', 'Mutual Funds', 'Global Markets', 'Portfolio Mgmt', 'KYC', 'Custody', 'Payments', 'AR Services'].map((module, index) => (
                    <div 
                      key={index}
                      className="aspect-square rounded-lg bg-gradient-to-br from-invest-50 to-invest-100 flex items-center justify-center p-3 shadow-sm border border-invest-200/50 text-invest-700 font-medium text-sm text-center transform hover:scale-105 transition-all duration-300"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animationFillMode: "backwards",
                        animationName: "fade-in",
                        animationDuration: "0.6s",
                      }}
                    >
                      {module}
                    </div>
                  ))}
                </div>
                
                {/* Central platform hub */}
                <div className="mt-6 rounded-xl bg-invest-500 text-white p-4 text-center font-bold shadow-md transform hover:scale-105 transition-all duration-300 animate-pulse-slow">
                  Unified Wealth Platform
                </div>
                
                {/* Connection lines (represented with borders) */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M200 150 L200 250" stroke="rgba(17, 58, 42, 0.2)" strokeWidth="2" strokeDasharray="5,5" />
                    <path d="M100 150 L200 250" stroke="rgba(17, 58, 42, 0.2)" strokeWidth="2" strokeDasharray="5,5" />
                    <path d="M300 150 L200 250" stroke="rgba(17, 58, 42, 0.2)" strokeWidth="2" strokeDasharray="5,5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
