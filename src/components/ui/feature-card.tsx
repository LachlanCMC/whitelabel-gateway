
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  index?: number;
  footer?: React.ReactNode;
  imageUrl?: string;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  className, 
  index = 0,
  footer,
  imageUrl
}: FeatureCardProps) => {
  const animationDelay = `${index * 0.1}s`;

  return (
    <Card 
      className={cn(
        "feature-card w-full h-full opacity-0 overflow-hidden group hover:-translate-y-2 transition-all duration-500", 
        className
      )}
      style={{
        animationDelay,
        animationFillMode: "forwards",
        animationName: "fade-in",
        animationDuration: "0.6s",
      }}
    >
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
          />
        </div>
      )}
      <CardHeader>
        <div className="h-12 w-12 mb-3 flex items-center justify-center rounded-full bg-invest-50 text-invest-500 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <CardTitle className="text-xl group-hover:text-invest-600 transition-colors duration-300">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">
          {description}
        </CardDescription>
      </CardContent>
      {footer && (
        <CardFooter>
          {footer}
        </CardFooter>
      )}
    </Card>
  );
};

export { FeatureCard };
