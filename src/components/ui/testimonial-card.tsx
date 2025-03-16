
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  companyName: string;
  avatarSrc?: string;
  className?: string;
  index?: number;
}

const TestimonialCard = ({
  quote,
  author,
  position,
  companyName,
  avatarSrc,
  className,
  index = 0,
}: TestimonialCardProps) => {
  const animationDelay = `${0.2 + index * 0.1}s`;
  const initials = author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card 
      className={cn(
        "h-full opacity-0", 
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
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={avatarSrc} alt={author} />
            <AvatarFallback className="bg-invest-100 text-invest-800">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-muted-foreground">
              {position}, {companyName}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <blockquote className="text-lg font-light italic">"{quote}"</blockquote>
      </CardContent>
    </Card>
  );
};

export { TestimonialCard };
