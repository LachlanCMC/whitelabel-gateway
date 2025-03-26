
import React from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { GradientText } from "@/components/ui/gradient-text";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const CtaSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 gradient-background -z-10"></div>
      
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-5">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-invest-50 opacity-70 blur-3xl animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-invest-100 opacity-60 blur-3xl animate-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-invest-50 opacity-50 blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-8 max-w-2xl animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Ready to transform your 
              <span className="block mt-2">
                <GradientText 
                  text="wealth offerings?" 
                  fromColor="from-invest-400" 
                  toColor="to-invest-600"
                  animate={true}
                  size="lg"
                />
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join leading financial companies that are leveraging our infrastructure to deliver exceptional investment experiences.
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
                Contact Sales
              </ShimmerButton>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-xl lg:max-w-none animate-fade-in" style={{animationDelay: '0.3s'}}>
            <AspectRatio ratio={16/9} className="rounded-xl overflow-hidden shadow-2xl">
              <div className="glass-panel h-full w-full p-6 relative">
                <div className="h-full w-full relative z-10 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80" 
                    alt="Investment platform dashboard" 
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-6">
                    <p className="text-white text-xl font-medium mb-2">Get started in minutes</p>
                    <p className="text-white/80 text-sm">Our platform makes it easy to launch and scale</p>
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

export default CtaSection;
