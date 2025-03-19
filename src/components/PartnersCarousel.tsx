
import React, { useEffect, useRef } from "react";

const partners = [
  {
    name: "Revolut",
    logo: "/lovable-uploads/54753089-fb7a-4a30-a9f0-7fa4f0e25ef2.png",
    logoClass: "h-10 md:h-12" // Adjust based on logo proportions
  },
  {
    name: "RBC",
    logo: "/lovable-uploads/54753089-fb7a-4a30-a9f0-7fa4f0e25ef2.png",
    logoClass: "h-10 md:h-12" 
  },
  {
    name: "Currys",
    logo: "/lovable-uploads/54753089-fb7a-4a30-a9f0-7fa4f0e25ef2.png",
    logoClass: "h-10 md:h-12" 
  },
  {
    name: "ANZ Bank",
    logo: "/lovable-uploads/54753089-fb7a-4a30-a9f0-7fa4f0e25ef2.png",
    logoClass: "h-10 md:h-12" 
  },
  {
    name: "Bendigo Invest Direct",
    logo: "/lovable-uploads/54753089-fb7a-4a30-a9f0-7fa4f0e25ef2.png",
    logoClass: "h-10 md:h-12" 
  },
  {
    name: "Plum",
    logo: "/lovable-uploads/54753089-fb7a-4a30-a9f0-7fa4f0e25ef2.png",
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
    <section className="py-8 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-6">
          <h3 className="text-lg md:text-xl font-semibold text-invest-600">
            CMC Group supports the following companies
          </h3>
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
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-slate-50 to-transparent"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-slate-50 to-transparent"></div>
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
