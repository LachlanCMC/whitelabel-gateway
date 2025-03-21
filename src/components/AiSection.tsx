
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AiSection = () => {
  return (
    <section id="ai" className="py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12">
          <p className="text-sm font-medium tracking-widest uppercase text-invest-500 mb-2">AI & AUTOMATION</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Build intelligent investment experiences</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16 mt-12">
          <div className="flex-1 space-y-8 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-invest-800 animate-fade-in">
              Revolutionise Wealth Management with Agentic & Generative AI
            </h2>
            
            <p className="text-lg text-slate-600 animate-fade-in">
              Leverage the power of agentic and generative AI to deliver real-time, explainable portfolio insights and optimize every stage of the wealth management journey. Enhance client outcomes through predictive analytics, personalized engagement, and seamless automation—all while adhering to industry regulations. With robust data protection at its core, this innovative approach to AI transforms the wealth management experience by boosting efficiency, accuracy, and security.
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
              <img 
                src="/lovable-uploads/381ee24d-0db7-4560-8dd3-7680e6916089.png" 
                alt="AI Wealth Management" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-invest-800/30 to-transparent opacity-80 mix-blend-overlay"></div>
              
              {/* Decorative elements */}
              <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-invest-100/50 backdrop-blur-sm"></div>
              <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-invest-500/10 backdrop-blur-sm"></div>
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
