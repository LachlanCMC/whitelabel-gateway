
import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GradientText } from "@/components/ui/gradient-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArrowRight, ChartBar, Globe, Coins, Shield, Briefcase } from "lucide-react";

const FeaturesSection = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  
  const products = [
    {
      id: 1,
      title: "Fractional Shares",
      description: "Enable your customers to invest in fractional units of expensive stocks, increasing accessibility and portfolio diversification.",
      icon: <ChartBar className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Global Market Access",
      description: "Offer access to international markets with multi-currency support and efficient settlement workflows across 35+ global exchanges.",
      icon: <Globe className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Mutual Funds",
      description: "Provide access to thousands of mutual funds from leading fund houses with automated order processing and dividend reinvestment.",
      icon: <Coins className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Tax Wrappers",
      description: "Support for Cash ISA, Stocks & Shares ISA, Junior ISA, and Trust accounts with full regulatory compliance and tax reporting.",
      icon: <Shield className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1586486942853-511cfa86bb04?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Portfolio Management",
      description: "Comprehensive tools for constructing, analyzing, and rebalancing investment portfolios with real-time data and performance analytics.",
      icon: <Briefcase className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 relative bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 -z-10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our products</h2>
          <div className="flex items-center">
            <span className="text-3xl font-bold">0{activeProduct + 1}</span>
            <div className="h-[1px] w-10 bg-gray-300 mx-4"></div>
            <span className="text-3xl text-gray-300 font-bold">05</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Navigation */}
          <div className="space-y-8">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className={`transition-all duration-300 cursor-pointer group`}
                onClick={() => setActiveProduct(index)}
              >
                <h3 className={`text-3xl md:text-4xl font-bold mb-2 transition-colors duration-300 ${activeProduct === index ? 'text-foreground' : 'text-gray-300'}`}>
                  {product.title}
                </h3>
                
                {activeProduct === index && (
                  <div className="animate-fade-in">
                    <p className="text-lg text-muted-foreground mb-6">
                      {product.description}
                    </p>
                    <ShimmerButton 
                      className="flex items-center gap-2 text-invest-500 hover:text-invest-600 font-semibold border-none bg-transparent"
                      shimmerColor="rgba(17, 58, 42, 0.1)"
                    >
                      Get started <ArrowRight className="h-4 w-4" />
                    </ShimmerButton>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Product Visuals */}
          <div className="relative bg-gray-100 rounded-3xl overflow-hidden h-[500px]">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeProduct === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <div className="h-full w-full p-8 flex flex-col justify-between">
                  <div className="w-full h-4/5 overflow-hidden rounded-2xl">
                    <img 
                      src={product.imageUrl} 
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <p className="font-medium text-lg">Choose the investment capabilities that work best for your business and your customers.</p>
                    <ShimmerButton 
                      className="bg-black hover:bg-gray-800 text-white rounded-full flex items-center gap-2 px-6 py-3"
                    >
                      Get started <ArrowRight className="h-4 w-4" />
                    </ShimmerButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
