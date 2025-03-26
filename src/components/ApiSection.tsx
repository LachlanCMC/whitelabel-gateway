
import React from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArrowRight } from "lucide-react";

const ApiSection = () => {
  return (
    <section id="api" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-sm font-medium mb-2 text-invest-500">Driven by technology</p>
            <h2 className="text-5xl md:text-6xl font-bold text-invest-500 mb-6">
              Grow and scale your business<br />faster with our API
            </h2>
            <p className="text-xl text-invest-600 max-w-3xl">
              With our cloud-based API, we offer banking infrastructure so financial institutions can 
              focus on providing the best service for their customers and stay relevant in a fast-paced market.
            </p>
            
            <ShimmerButton className="mt-8 bg-white hover:bg-gray-50 text-invest-500 border border-invest-300 rounded-full px-6 flex items-center gap-2">
              Explore our API <ArrowRight className="h-4 w-4" />
            </ShimmerButton>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="w-full max-w-md transform hover:scale-105 transition-transform duration-500">
              <img 
                src="/lovable-uploads/58ad11ca-6a5a-4f80-a7c3-4f62a5db7caf.png" 
                alt="API Visualization" 
                className="w-full h-auto rounded-2xl shadow-2xl" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiSection;
