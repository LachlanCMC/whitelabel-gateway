
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AiSection = () => {
  return (
    <section id="ai" className="py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 space-y-8 max-w-2xl">
            <SectionHeading
              title="AI-Powered Investment Solutions"
              centered={false}
              className="text-left"
            />
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-invest-800 animate-fade-in">
              Leverage the power of generative AI to empower your investors—safely, transparently, and at scale
            </h2>
            
            <p className="text-lg text-slate-600 animate-fade-in">
              Transform your investment platform with cutting-edge AI technology that delivers personalized insights, 
              predictive analytics, and automated portfolio management while maintaining regulatory compliance.
            </p>
            
            <div className="pt-4 animate-fade-in">
              <Link to="/ai">
                <ShimmerButton className="bg-invest-500 hover:bg-invest-600 text-white px-6 py-3 text-lg rounded-full flex items-center justify-center gap-2 w-full sm:w-auto">
                  Explore AI Solutions <ArrowRight className="h-5 w-5" />
                </ShimmerButton>
              </Link>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square md:aspect-[4/3] overflow-hidden rounded-2xl shadow-xl animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-invest-600 to-invest-800 opacity-95"></div>
              <div className="absolute inset-0 flex flex-col justify-center p-8">
                <div className="glass-panel bg-white/10 p-6 rounded-xl mb-6 backdrop-blur-md border border-white/20 transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-white text-lg font-medium mb-2">AI Investment Copilot</h3>
                  <p className="text-white/80 text-sm">
                    "What's the best way to diversify my tech-heavy portfolio given current market conditions?"
                  </p>
                </div>
                
                <div className="glass-panel bg-white/10 p-6 rounded-xl backdrop-blur-md border border-white/20 transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-white text-lg font-medium mb-2">Personalized Analysis</h3>
                  <div className="flex space-x-2 mb-3">
                    <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 w-3/4 rounded-full"></div>
                    </div>
                    <span className="text-white text-xs whitespace-nowrap">75% Match</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    Portfolio optimization suggests reducing tech exposure by 15% and increasing healthcare allocation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract decoration */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-invest-100 rounded-full filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-30"></div>
    </section>
  );
};

export default AiSection;
