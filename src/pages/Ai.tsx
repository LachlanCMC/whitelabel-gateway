
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArrowRight } from "lucide-react";

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon?: React.ReactNode }) => {
  return (
    <div className="feature-card hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
      <div className="mb-4 text-invest-600">
        {icon || (
          <div className="w-12 h-12 rounded-lg bg-invest-100 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-invest-500"></div>
          </div>
        )}
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
                Leverage the power of generative AI to empower your investors—safely, transparently, and at scale
              </h1>
              <p className="text-xl text-muted-foreground">
                In today's fast-paced financial landscape, staying ahead of market shifts and anticipating client needs can make all the difference. CMC Invest's AI solutions supercharge your business, transforming raw data into actionable insights—while helping your users make smarter investment decisions.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                Our generative AI platform is designed to integrate seamlessly with your infrastructure, delivering powerful, tailored experiences that include:
              </p>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              title="AI-Powered Investment Features"
              description="Unlock the full potential of your investment platform with our advanced AI solutions"
              centered={true}
            />
            
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div className="feature-card hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-white">
                <div className="mb-4 text-invest-600">
                  <div className="w-12 h-12 rounded-lg bg-invest-100 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-invest-500"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized Investment Insights</h3>
                <p className="text-muted-foreground">
                  Move beyond generic market analysis. Our foundation models process your proprietary data in real-time to deliver client-specific insights. From automated portfolio rebalancing suggestions to user behavior analytics, you get actionable intelligence tailored for each of your investors.
                </p>
              </div>
              
              <div className="feature-card hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-white">
                <div className="mb-4 text-invest-600">
                  <div className="w-12 h-12 rounded-lg bg-invest-100 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-invest-500"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Co-Pilot for Investor Success</h3>
                <p className="text-muted-foreground">
                  Help investors gain clarity and confidence. Combining large language models with your unique datasets, our AI "co-pilot" can answer client questions, suggest new investment opportunities, and forecast potential risks—all within a safe, regulatory-compliant environment.
                </p>
              </div>
              
              <div className="feature-card hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-white">
                <div className="mb-4 text-invest-600">
                  <div className="w-12 h-12 rounded-lg bg-invest-100 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-invest-500"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">AI-Driven Portfolios</h3>
                <p className="text-muted-foreground">
                  Evolve from standard allocation strategies to AI-powered portfolios. Leverage signals such as macro trends, social sentiment, and user preference data to build robust, adaptive portfolios that deliver smarter returns.
                </p>
              </div>
              
              <div className="feature-card hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-white">
                <div className="mb-4 text-invest-600">
                  <div className="w-12 h-12 rounded-lg bg-invest-100 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-invest-500"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">White-Label & Custom Solutions</h3>
                <p className="text-muted-foreground">
                  We understand the importance of your brand identity. Our white-label solutions allow you to embed AI-driven widgets—such as advanced dashboards, robo-advisory features, or targeted insights—directly into your platform. This way, you remain the star of your investor journey while benefiting from our powerful engine behind the scenes.
                </p>
              </div>
              
              <div className="feature-card hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-white">
                <div className="mb-4 text-invest-600">
                  <div className="w-12 h-12 rounded-lg bg-invest-100 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-invest-500"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Secure & Compliant</h3>
                <p className="text-muted-foreground">
                  Regulatory compliance and data security are core to our approach. Our end-to-end encryption, strict role-based access, and compliance-monitoring tools help ensure you meet regional and international guidelines, protecting both your business and your users.
                </p>
              </div>
              
              <div className="feature-card hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-white">
                <div className="mb-4 text-invest-600">
                  <div className="w-12 h-12 rounded-lg bg-invest-100 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-invest-500"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Real-Time Intelligence</h3>
                <p className="text-muted-foreground">
                  Empower your teams and your clients with immediate, data-backed decisions. Whether you're analyzing fluctuations in the crypto market or unveiling hidden trends in user trading patterns, our AI platform delivers near-real-time insights to keep you ahead of the curve.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-invest-600 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your investment platform with AI?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get in touch with our team to schedule a personalized demo and discover how our AI solutions can empower your business.
            </p>
            <ShimmerButton className="bg-white text-invest-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-full inline-flex items-center justify-center gap-2">
              Schedule a Demo <ArrowRight className="h-5 w-5" />
            </ShimmerButton>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Ai;
