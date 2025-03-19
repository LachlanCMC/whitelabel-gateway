
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clientType, setClientType] = useState("personal");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/90 backdrop-blur-md shadow-sm"
          : "py-5 bg-white"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/00d572d5-100f-4f0b-8100-9ab6b34085c9.png" 
              alt="CMC Invest" 
              className="h-8 md:h-10"
            />
          </Link>
          
          <Tabs defaultValue="personal" value={clientType} className="hidden md:block">
            <TabsList>
              <TabsTrigger 
                value="personal" 
                onClick={() => setClientType("personal")}
                className="text-sm"
              >
                Personal
              </TabsTrigger>
              <TabsTrigger 
                value="business" 
                onClick={() => setClientType("business")}
                className="text-sm"
              >
                Business
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
            Products
          </a>
          <a href="#whitelabel" className="text-foreground/80 hover:text-foreground transition-colors">
            Solutions
          </a>
          <Link to="/ai" className="text-foreground/80 hover:text-foreground transition-colors">
            AI
          </Link>
          <a href="#compliance" className="text-foreground/80 hover:text-foreground transition-colors">
            Compliance
          </a>
          <ShimmerButton className="bg-invest-500 hover:bg-invest-600 text-white">
            Request Demo
          </ShimmerButton>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in-fast">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Tabs defaultValue="personal" value={clientType} className="mb-2">
              <TabsList>
                <TabsTrigger 
                  value="personal" 
                  onClick={() => setClientType("personal")}
                  className="text-sm"
                >
                  Personal
                </TabsTrigger>
                <TabsTrigger 
                  value="business" 
                  onClick={() => setClientType("business")}
                  className="text-sm"
                >
                  Business
                </TabsTrigger>
              </TabsList>
            </Tabs>
            
            <a 
              href="#features" 
              className="text-foreground/80 hover:text-foreground py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="#whitelabel" 
              className="text-foreground/80 hover:text-foreground py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </a>
            <Link 
              to="/ai" 
              className="text-foreground/80 hover:text-foreground py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              AI
            </Link>
            <a 
              href="#compliance" 
              className="text-foreground/80 hover:text-foreground py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Compliance
            </a>
            <ShimmerButton className="bg-invest-500 hover:bg-invest-600 text-white w-full">
              Request Demo
            </ShimmerButton>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
