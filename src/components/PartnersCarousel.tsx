
import React, { useEffect, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const partners = [
  {
    name: "Revolut",
    logo: "/lovable-uploads/d0dc3e36-596d-4d05-8080-dbf2d7989c9a.png", // Using the provided example image
    logoClass: "h-10 md:h-12" // Adjust based on logo proportions
  },
  {
    name: "RBC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Royal_Bank_of_Canada_logo.svg/1280px-Royal_Bank_of_Canada_logo.svg.png",
    logoClass: "h-8 md:h-10" // Adjust based on logo proportions
  },
  {
    name: "Currys",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Currys_logo_2021.svg/1280px-Currys_logo_2021.svg.png",
    logoClass: "h-8 md:h-10" // Adjust based on logo proportions
  },
  {
    name: "ANZ Bank",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Australia_and_New_Zealand_Banking_Group_logo.svg/1280px-Australia_and_New_Zealand_Banking_Group_logo.svg.png",
    logoClass: "h-8 md:h-10" // Adjust based on logo proportions
  },
  {
    name: "Bendigo Invest Direct",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Bendigo_Bank_logo.svg/1280px-Bendigo_Bank_logo.svg.png",
    logoClass: "h-8 md:h-10" // Adjust based on logo proportions
  },
  {
    name: "Plum",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Plum_Logo.svg/1280px-Plum_Logo.svg.png",
    logoClass: "h-8 md:h-9" // Adjust based on logo proportions
  }
];

const PartnersCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const startAutoScroll = () => {
      const scrollElement = scrollRef.current;
      if (!scrollElement) return;
      
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
    <section className="py-10 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-6">
          <h3 className="text-lg md:text-xl font-semibold text-invest-600">
            CMC Group supports the following companies
          </h3>
        </div>
        
        <div className="relative overflow-hidden">
          {/* Desktop Carousel with auto-scroll */}
          <div className="hidden md:block">
            <ScrollArea className="w-full whitespace-nowrap" ref={scrollRef}>
              <div className="flex space-x-12 px-10 py-4">
                {partners.map((partner, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
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
                    className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                  >
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`} 
                      className={`${partner.logoClass} object-contain`}
                    />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
          
          {/* Mobile Carousel with controls */}
          <div className="md:hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true
              }}
              className="w-full"
            >
              <CarouselContent>
                {partners.map((partner, index) => (
                  <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                    <div className="flex items-center justify-center h-24 grayscale hover:grayscale-0 transition-all duration-300">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className={`${partner.logoClass} object-contain`}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-1" />
              <CarouselNext className="right-1" />
            </Carousel>
          </div>
          
          {/* Gradient overlays for desktop to indicate scrolling */}
          <div className="hidden md:block absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-slate-50 to-transparent"></div>
          <div className="hidden md:block absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-slate-50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
