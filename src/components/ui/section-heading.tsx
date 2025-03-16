
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
  descriptionClassName?: string;
  subtleText?: string;
}

const SectionHeading = ({
  title,
  description,
  centered = true,
  className,
  descriptionClassName,
  subtleText,
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      "space-y-4 mb-10",
      centered && "text-center",
      className
    )}>
      {subtleText && (
        <p className="text-sm font-medium tracking-widest uppercase text-invest-500 opacity-80 animate-fade-in">
          {subtleText}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight animate-fade-in">
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-muted-foreground max-w-3xl mx-auto animate-fade-in",
          descriptionClassName
        )}>
          {description}
        </p>
      )}
    </div>
  );
};

export { SectionHeading };
