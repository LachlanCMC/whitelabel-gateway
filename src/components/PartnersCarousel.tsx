
import React, { useEffect, useRef } from "react";

const partners = [
  {
    name: "Revolut",
    logo: "/lovable-uploads/94dcc645-f0d3-4c70-9d20-606efd6059d2.png",
    logoClass: "h-10 md:h-12" // Increased size for better visibility
  },
  {
    name: "RBC",
    logo: "/lovable-uploads/c1107d67-c03d-4ad6-bf9b-23ba562f7cda.png",
    logoClass: "h-12 md:h-14" 
  },
  {
    name: "Currys",
    logo: "/lovable-uploads/5e3b812e-319e-49c0-b060-fd54b835c28c.png",
    logoClass: "h-12 md:h-14" 
  },
  {
    name: "ANZ Bank",
    logo: "/lovable-uploads/4c5f8a9c-30c6-4818-a9bf-81cecdebe2bd.png",
    logoClass: "h-10 md:h-12" 
  },
  {
    name: "Bendigo Bank",
    logo: "/lovable-uploads/49301167-f5e3-41e0-bcdf-03ea0908921e.png",
    logoClass: "h-10 md:h-12" 
  },
  {
    name: "St.George",
    logo: "/lovable-uploads/4b7086fa-1c8f-4003-a74b-8c070abc29ff.png",
    logoClass: "h-10 md:h-12" 
  },
  {
    name: "E-Superfund",
    logo: "/lovable-uploads/5e025d2b-424c-4037-8b3b-926f9ad282fa.png",
    logoClass: "h-10 md:h-12" 
  }
];

const PartnersCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const startAutoScroll = () => {
      const scrollElement = scrollRef.current;
      if (!scrollElement) return;
      
      // Initial scroll position
      scrollElement.scrollLeft = 0;
      
      const scroll = () => {
        if (!scrollElement) return;
        const maxScroll = scrollElement.scrollWidth - scrollElement.clientWidth;
        let currentScroll = scrollElement.scrollLeft;
        
        // Reset to start when reaching end
        if (currentScroll >= maxScroll - 10) {
          scrollElement.scrollLeft = 0;
        } else {
          scrollElement.scrollLeft += 1;
        }
      };
      
      const intervalId = setInterval(scroll, 30);
      return () => clearInterval(intervalId);
    };
    
    const autoScrollStop = startAutoScroll();
    return () => {
      if (autoScrollStop) autoScrollStop();
    };
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <p className="text-lg md:text-xl text-slate-700 max-w-4xl mx-auto">
            Financial institutions - from fintechs to banks —use CMC's technology to grow their business, and stay ahead.
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="w-full overflow-hidden">
            <div className="ticker-wrap" ref={scrollRef}>
              <div className="ticker">
                {partners.map((partner, index) => (
                  <div 
                    key={index} 
                    className="ticker-item flex items-center justify-center mx-12"
                  >
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`} 
                      className={`${partner.logoClass} object-contain`}
                    />
                  </div>
                ))}
                {/* Repeat partners to create infinite scroll effect */}
                {partners.map((partner, index) => (
                  <div 
                    key={`repeat-${index}`} 
                    className="ticker-item flex items-center justify-center mx-12"
                  >
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`} 
                      className={`${partner.logoClass} object-contain`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Gradient overlays to indicate scrolling */}
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </div>
      
      <style>
        {`
        .ticker-wrap {
          width: 100%;
          overflow-x: scroll;
          overflow-y: hidden;
          white-space: nowrap;
          -webkit-overflow-scrolling: touch;
          -ms-overflow-style: none;
          scrollbar-width: none;
          padding: 1rem 0;
        }
        
        .ticker-wrap::-webkit-scrollbar {
          display: none;
        }
        
        .ticker {
          display: inline-flex;
          white-space: nowrap;
          padding-right: 100%;
        }
        
        .ticker-item {
          display: inline-flex;
          flex-shrink: 0;
        }
        `}
      </style>
    </section>
  );
};

export default PartnersCarousel;
