
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
}

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  className, 
  index = 0,
  footer
}: FeatureCardProps) => {
  const animationDelay = `${index * 0.1}s`;

  return (
    <Card 
      className={cn(
        "feature-card w-full h-full opacity-0", 
        className
      )}
      style={{
        animationDelay,
        animationFillMode: "forwards",
        animationName: "fade-in",
        animationDuration: "0.6s",
      }}
    >
      <CardHeader>
        <div className="h-12 w-12 mb-3 flex items-center justify-center rounded-full bg-invest-50 text-invest-500">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
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
