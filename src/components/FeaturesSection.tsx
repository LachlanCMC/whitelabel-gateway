
import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GradientText } from "@/components/ui/gradient-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { 
  ArrowRight, 
  ChartBar, 
  Globe, 
  Coins, 
  Shield, 
  Briefcase, 
  CreditCard, 
  UserCheck, 
  Building2, 
  Lock 
} from "lucide-react";

const FeaturesSection = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  
  const products = [
    {
      id: 1,
      title: "Fractional Shares",
      description: "Enable your customers to invest in fractional units of expensive stocks, increasing accessibility and portfolio diversification.",
      icon: <ChartBar className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Tax Wrappers",
      description: "Support for Cash ISA, Stocks & Shares ISA, SIPP, Junior ISA, and Trust accounts with full regulatory compliance and tax reporting.",
      icon: <Shield className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Mutual Funds",
      description: "Provide access to thousands of mutual funds from leading fund houses with automated order processing and dividend reinvestment.",
      icon: <Coins className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Global Market Trading",
      description: "Offer access to international markets with multi-currency support and efficient settlement workflows across 35+ global exchanges.",
      icon: <Globe className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Portfolio Management",
      description: "Comprehensive tools for constructing, analyzing, and rebalancing investment portfolios with real-time data and performance analytics.",
      icon: <Briefcase className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Payments Infrastructure",
      description: "Seamless payment processing, fund transfers, and settlement with integrated banking connections and reconciliation tools.",
      icon: <CreditCard className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "Client Onboarding",
      description: "Streamlined KYC/AML compliance workflows with automated verification, risk assessment, and ongoing monitoring capabilities.",
      icon: <UserCheck className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      title: "Appointed Representative Services",
      description: "Leverage our regulatory umbrella with full compliance support, oversight, and reporting for quick market entry.",
      icon: <Building2 className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      title: "Custody Solutions",
      description: "Secure asset safekeeping with multi-tier security protocols, segregated accounts, and transparent audit trails.",
      icon: <Lock className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 relative bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 -z-10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-invest-600">What We Offer</h2>
          <div className="flex items-center">
            <span className="text-3xl font-bold text-invest-500">0{activeProduct + 1}</span>
            <div className="h-[1px] w-10 bg-gray-300 mx-4"></div>
            <span className="text-3xl text-gray-300 font-bold">0{products.length}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Navigation */}
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className={`transition-all duration-300 cursor-pointer group py-4 px-6 rounded-xl hover:bg-white hover:shadow-md ${activeProduct === index ? 'bg-white shadow-md' : ''}`}
                onClick={() => setActiveProduct(index)}
                onMouseEnter={() => setActiveProduct(index)}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${activeProduct === index ? 'bg-invest-50 text-invest-600' : 'bg-gray-100 text-gray-500'}`}>
                    {product.icon}
                  </div>
                  <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${activeProduct === index ? 'text-invest-600' : 'text-gray-400'}`}>
                    {product.title}
                  </h3>
                </div>
                
                {activeProduct === index && (
                  <div className="animate-fade-in mt-4">
                    <p className="text-lg text-muted-foreground mb-6 pl-16">
                      {product.description}
                    </p>
                    <div className="pl-16">
                      <ShimmerButton 
                        className="flex items-center gap-2 text-invest-500 hover:text-invest-600 font-semibold border-none bg-transparent"
                        shimmerColor="rgba(17, 58, 42, 0.1)"
                      >
                        Learn more <ArrowRight className="h-4 w-4" />
                      </ShimmerButton>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Product Visuals */}
          <div className="relative bg-gradient-to-br from-white to-gray-100 rounded-3xl overflow-hidden h-[500px] shadow-xl">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeProduct === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <div className="h-full w-full p-8 flex flex-col justify-between">
                  <div className="w-full h-4/5 overflow-hidden rounded-2xl shadow-inner">
                    <img 
                      src={product.imageUrl} 
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <p className="font-medium text-lg text-invest-700">Choose the investment capabilities that work best for your business and your customers.</p>
                    <ShimmerButton 
                      className="bg-invest-500 hover:bg-invest-600 text-white rounded-full flex items-center gap-2 px-6 py-3"
                    >
                      Get started <ArrowRight className="h-4 w-4" />
                    </ShimmerButton>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Module animation indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {products.map((_, index) => (
                <div 
                  key={index} 
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${activeProduct === index ? 'bg-invest-500 w-4' : 'bg-gray-300'}`}
                  onClick={() => setActiveProduct(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
