
import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const AccessSection = () => {
  return (
    <section id="access" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-invest-50/30 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-blue-50/30 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          subtleText="How Clients Can Access"
          title="Flexible integration options"
          description="Whether you need a complete whitelabel solution or want to integrate specific capabilities via API, our platform adapts to your technology stack."
          centered={true}
          className="mb-16"
        />
        
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="whitelabel" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="whitelabel" className="text-lg py-3">Whitelabel Solution</TabsTrigger>
              <TabsTrigger value="api" className="text-lg py-3">API Integration</TabsTrigger>
            </TabsList>
            
            <TabsContent value="whitelabel" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Whitelabel animation/visualization */}
                <div className="order-2 lg:order-1 space-y-6">
                  <h3 className="text-2xl font-bold text-invest-800">Launch with your brand identity</h3>
                  <p className="text-muted-foreground">
                    Deploy a fully-branded wealth management platform under your own name. 
                    Our whitelabel solution includes web and mobile interfaces that can be 
                    customized to match your design language and user experience needs.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-invest-100 text-invest-600 flex items-center justify-center mt-0.5">
                        <span className="text-sm font-medium">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Custom branding</h4>
                        <p className="text-sm text-muted-foreground">Logos, colors, typography that aligns with your brand</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-invest-100 text-invest-600 flex items-center justify-center mt-0.5">
                        <span className="text-sm font-medium">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Responsive interfaces</h4>
                        <p className="text-sm text-muted-foreground">Web, mobile and tablet optimized experiences</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-invest-100 text-invest-600 flex items-center justify-center mt-0.5">
                        <span className="text-sm font-medium">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Rapid deployment</h4>
                        <p className="text-sm text-muted-foreground">Go to market in weeks, not months or years</p>
                      </div>
                    </div>
                  </div>
                  
                  <ShimmerButton className="bg-invest-500 hover:bg-invest-600 text-white flex items-center gap-2 mt-4">
                    Explore Whitelabel <ArrowRight className="h-4 w-4" />
                  </ShimmerButton>
                </div>
                
                {/* Visual representation of whitelabel */}
                <div className="order-1 lg:order-2 relative animate-float">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-white to-invest-50 p-8">
                    {/* Branding transition animation representation */}
                    <div className="absolute inset-0 bg-white opacity-70"></div>
                    
                    <div className="relative z-10 grid grid-cols-3 gap-4 h-full">
                      {/* Showing different branding options */}
                      <div className="col-span-3 bg-invest-500 h-12 rounded-lg animate-pulse-slow flex items-center justify-center text-white font-medium">
                        Your Brand
                      </div>
                      
                      <div className="col-span-2 row-span-2 bg-white rounded-lg shadow-md border border-gray-100 p-4 flex flex-col justify-between transform hover:scale-105 transition-all duration-300">
                        <div className="w-1/2 h-2 bg-invest-200 rounded-full mb-2"></div>
                        <div className="w-3/4 h-2 bg-invest-100 rounded-full mb-4"></div>
                        <div className="w-full h-24 bg-invest-50 rounded-lg"></div>
                        <div className="w-2/3 h-2 bg-invest-100 rounded-full mt-4"></div>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-md border border-gray-100 p-3 flex flex-col justify-between transform hover:scale-105 transition-all duration-300">
                        <div className="w-full h-2 bg-invest-200 rounded-full mb-2"></div>
                        <div className="w-full h-12 bg-invest-50 rounded-lg"></div>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-md border border-gray-100 p-3 flex flex-col justify-between transform hover:scale-105 transition-all duration-300">
                        <div className="w-full h-2 bg-invest-200 rounded-full mb-2"></div>
                        <div className="w-full h-12 bg-invest-50 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Branded device frames */}
                  <div className="absolute -bottom-6 -right-6 w-20 h-32 bg-white rounded-lg shadow-lg border border-gray-200 transform rotate-12 animate-float">
                    <div className="h-3 w-10 bg-invest-300 rounded-full mx-auto mt-1"></div>
                    <div className="mt-2 px-1">
                      <div className="h-2 w-full bg-invest-100 rounded-full mb-1"></div>
                      <div className="h-2 w-3/4 bg-invest-100 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="api" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* API integration visualization */}
                <div className="relative animate-float">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-white to-slate-50 p-8">
                    {/* API visualization */}
                    <div className="relative z-10 flex flex-col h-full justify-center">
                      <div className="grid grid-cols-3 gap-x-8 gap-y-4">
                        {/* API endpoints visualization */}
                        <div className="col-span-1 bg-white rounded-lg shadow-md border border-gray-100 p-3 transform hover:scale-105 transition-all duration-300">
                          <div className="text-xs font-mono text-invest-600 mb-1">/api/accounts</div>
                          <div className="w-full h-8 bg-slate-50 rounded-md"></div>
                        </div>
                        
                        <div className="col-span-1 bg-white rounded-lg shadow-md border border-gray-100 p-3 transform hover:scale-105 transition-all duration-300">
                          <div className="text-xs font-mono text-invest-600 mb-1">/api/products</div>
                          <div className="w-full h-8 bg-slate-50 rounded-md"></div>
                        </div>
                        
                        <div className="col-span-1 bg-white rounded-lg shadow-md border border-gray-100 p-3 transform hover:scale-105 transition-all duration-300">
                          <div className="text-xs font-mono text-invest-600 mb-1">/api/trading</div>
                          <div className="w-full h-8 bg-slate-50 rounded-md"></div>
                        </div>
                        
                        {/* Connection lines */}
                        <div className="col-span-3 flex justify-around items-center h-8">
                          <div className="h-0 w-1/4 border-t-2 border-dashed border-invest-200"></div>
                          <div className="h-0 w-1/4 border-t-2 border-dashed border-invest-200"></div>
                          <div className="h-0 w-1/4 border-t-2 border-dashed border-invest-200"></div>
                        </div>
                        
                        {/* Integration target */}
                        <div className="col-span-3 bg-invest-500 rounded-lg p-4 text-white text-center font-medium">
                          Your Application
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/30 rounded-full filter blur-xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-invest-50/30 rounded-full filter blur-xl"></div>
                  </div>
                  
                  {/* Code snippet decoration */}
                  <div className="absolute -bottom-4 -left-4 w-32 h-16 bg-white rounded-lg shadow-lg border border-gray-200 p-2 transform -rotate-6">
                    <div className="text-xs font-mono text-slate-600 line-clamp-3">
                      {"{"}<br/>
                      {"  \"data\": { ... }"}<br/>
                      {"}"}
                    </div>
                  </div>
                </div>
                
                {/* API integration text */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-invest-800">Integrate with flexible APIs</h3>
                  <p className="text-muted-foreground">
                    Connect your existing systems directly to our platform via modern, 
                    developer-friendly APIs. Select specific modules to integrate based 
                    on your needs with comprehensive documentation and support.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-invest-100 text-invest-600 flex items-center justify-center mt-0.5">
                        <span className="text-sm font-medium">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium">RESTful endpoints</h4>
                        <p className="text-sm text-muted-foreground">Clean, consistent API design with comprehensive documentation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-invest-100 text-invest-600 flex items-center justify-center mt-0.5">
                        <span className="text-sm font-medium">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Modular architecture</h4>
                        <p className="text-sm text-muted-foreground">Use only the components you need</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-invest-100 text-invest-600 flex items-center justify-center mt-0.5">
                        <span className="text-sm font-medium">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Developer support</h4>
                        <p className="text-sm text-muted-foreground">Dedicated integration team to assist with implementation</p>
                      </div>
                    </div>
                  </div>
                  
                  <ShimmerButton className="bg-invest-500 hover:bg-invest-600 text-white flex items-center gap-2 mt-4">
                    Explore API Docs <ArrowRight className="h-4 w-4" />
                  </ShimmerButton>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;
