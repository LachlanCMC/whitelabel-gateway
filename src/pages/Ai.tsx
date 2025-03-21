
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArrowRight, Zap, Shield, LineChart, BarChart2, Brain, Users } from "lucide-react";

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
  return (
    <div className="feature-card bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-slate-100">
      <div className="mb-4 text-invest-600">
        <div className="w-12 h-12 rounded-lg bg-invest-100 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Ai = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-invest-800">
                Revolutionise Wealth Management with Agentic & Generative AI
              </h1>
              <p className="text-xl text-muted-foreground">
                In today's fast-paced financial landscape, staying ahead of market shifts and anticipating client needs can make all the difference. CMC Invest's AI solutions supercharge your business, transforming raw data into actionable insights—while helping your users make smarter investment decisions.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                Our AI platform delivers real-time, explainable portfolio insights and optimizes every stage of the wealth management journey.
              </p>
            </div>
            
            <div className="mt-12 relative max-w-4xl mx-auto">
              <img 
                src="/lovable-uploads/2af861d1-f2c3-42f7-a66c-32fbb45ba09a.png" 
                alt="AI-Powered Investment Platform" 
                className="w-full rounded-xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-invest-800/20 to-transparent opacity-80 mix-blend-overlay rounded-xl"></div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              title="AI-Powered Investment Benefits"
              description="Transform your wealth management experience with cutting-edge AI technology"
              centered={true}
            />
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <FeatureCard 
                title="Real-Time Insights" 
                description="Access real-time market analysis, portfolio insights, and performance metrics to make informed decisions instantly."
                icon={<Zap className="h-6 w-6 text-invest-500" />}
              />
              
              <FeatureCard 
                title="Predictive Analytics" 
                description="Leverage powerful AI algorithms to forecast market trends, identify opportunities, and mitigate risks before they occur."
                icon={<LineChart className="h-6 w-6 text-invest-500" />}
              />
              
              <FeatureCard 
                title="Personalized Experience" 
                description="Deliver tailored investment strategies and recommendations based on individual client goals, risk tolerance, and preferences."
                icon={<Users className="h-6 w-6 text-invest-500" />}
              />
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              title="AI-Powered Investment Features"
              description="Unlock the full potential of your investment platform with our advanced AI solutions"
              centered={true}
            />
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <FeatureCard 
                title="AI Investment Copilot" 
                description="Provide clients with an AI assistant that can answer questions, explain strategies, and guide decision-making through natural language interaction."
                icon={<Brain className="h-6 w-6 text-invest-500" />}
              />
              
              <FeatureCard 
                title="Portfolio Optimization" 
                description="Automatically analyze and rebalance portfolios based on changing market conditions, client goals, and risk parameters."
                icon={<BarChart2 className="h-6 w-6 text-invest-500" />}
              />
              
              <FeatureCard 
                title="Regulatory Compliance" 
                description="Ensure all AI-driven recommendations and actions comply with regulatory requirements and industry standards."
                icon={<Shield className="h-6 w-6 text-invest-500" />}
              />
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <SectionHeading
                title="How Our AI Wealth Management Works"
                centered={true}
              />
              
              <div className="mt-12 space-y-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1 order-2 md:order-1">
                    <div className="bg-white p-8 rounded-xl shadow-md">
                      <h3 className="text-2xl font-bold mb-4">Data Integration & Analysis</h3>
                      <p className="text-slate-600">
                        Our AI platform integrates with your existing systems to collect and analyze market data, client information, and portfolio performance in real-time.
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 order-1 md:order-2">
                    <div className="aspect-video bg-invest-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-invest-200 to-invest-100"></div>
                      <div className="relative z-10 p-8">
                        <LineChart className="h-20 w-20 text-invest-600 mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <div className="aspect-video bg-invest-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-invest-200 to-invest-100"></div>
                      <div className="relative z-10 p-8">
                        <Brain className="h-20 w-20 text-invest-600 mx-auto" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white p-8 rounded-xl shadow-md">
                      <h3 className="text-2xl font-bold mb-4">AI-Powered Insights</h3>
                      <p className="text-slate-600">
                        Using advanced machine learning algorithms, our platform generates personalized insights, recommendations, and forecasts tailored to each client's unique situation.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1 order-2 md:order-1">
                    <div className="bg-white p-8 rounded-xl shadow-md">
                      <h3 className="text-2xl font-bold mb-4">Seamless Client Experience</h3>
                      <p className="text-slate-600">
                        Deliver AI-driven insights through an intuitive interface that empowers clients to make informed decisions while maintaining control over their investments.
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 order-1 md:order-2">
                    <div className="aspect-video bg-invest-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-invest-200 to-invest-100"></div>
                      <div className="relative z-10 p-8">
                        <Users className="h-20 w-20 text-invest-600 mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-invest-600 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your wealth management platform with AI?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get in touch with our team to schedule a personalized demo and discover how our AI solutions can empower your business.
            </p>
            <ShimmerButton className="bg-white text-invest-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-full inline-flex items-center justify-center gap-2">
              Get in Touch <ArrowRight className="h-5 w-5" />
            </ShimmerButton>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Ai;
