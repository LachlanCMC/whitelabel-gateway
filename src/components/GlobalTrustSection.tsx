
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Globe, Shield, Users } from "lucide-react";

const GlobalTrustSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-invest-50/10 -z-10"></div>
      <div className="absolute right-0 top-0 w-1/4 h-1/4 bg-invest-50/30 rounded-full filter blur-3xl"></div>
      <div className="absolute left-0 bottom-0 w-1/5 h-1/5 bg-blue-50/30 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          subtleText="Global Trust"
          title="Trusted by partners worldwide"
          description="Our platform connects financial institutions across the globe, providing secure and reliable wealth management infrastructure."
          centered={true}
        />
        
        <div className="mt-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main globe image */}
              <div className="rounded-xl overflow-hidden shadow-xl border border-slate-100 transform transition-transform hover:scale-102 duration-500">
                <img 
                  src="/lovable-uploads/58ad11ca-6a5a-4f80-a7c3-4f62a5db7caf.png"
                  alt="Global connections network" 
                  className="w-full h-auto" 
                />
                
                {/* Overlay with subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-invest-900/20 to-transparent pointer-events-none"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-invest-100/40 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-blue-100/30 -z-10"></div>
            </div>
          </div>
          
          <div className="flex-1 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <Globe className="h-8 w-8 text-invest-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                <p className="text-slate-600">Supporting partners across 30+ countries with localized regulatory compliance.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <Shield className="h-8 w-8 text-invest-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                <p className="text-slate-600">ISO 27001, SOC 2 Type II certified with bank-grade encryption and protection.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <Users className="h-8 w-8 text-invest-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Trusted Partners</h3>
                <p className="text-slate-600">Over 150 financial institutions rely on our infrastructure daily.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="h-8 w-8 flex items-center justify-center text-invest-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M2 5h20M2 19h20M5 12H2M22 12h-3M10 12H8M16 12h-2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Global Connectivity</h3>
                <p className="text-slate-600">Seamless integration with financial systems and markets worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalTrustSection;
