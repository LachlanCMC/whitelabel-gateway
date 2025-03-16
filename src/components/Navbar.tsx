import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          ? "py-3 bg-white/80 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/7ce8615d-bdd5-44c3-b141-6a9e5cbbd4b9.png" 
              alt="CMC Invest" 
              className="h-8 md:h-10"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#api" className="text-foreground/80 hover:text-foreground transition-colors">
            API
          </a>
          <a href="#compliance" className="text-foreground/80 hover:text-foreground transition-colors">
            Compliance
          </a>
          <a href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors">
            Testimonials
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
            <a 
              href="#features" 
              className="text-foreground/80 hover:text-foreground py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#api" 
              className="text-foreground/80 hover:text-foreground py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              API
            </a>
            <a 
              href="#compliance" 
              className="text-foreground/80 hover:text-foreground py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Compliance
            </a>
            <a 
              href="#testimonials" 
              className="text-foreground/80 hover:text-foreground py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
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
