
import React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  text: string;
  className?: string;
  fromColor?: string;
  toColor?: string;
  animate?: boolean;
}

const GradientText = ({
  text,
  className,
  fromColor = "from-invest-400",
  toColor = "to-invest-600",
  animate = false,
}: GradientTextProps) => {
  return (
    <span
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent",
        fromColor,
        toColor,
        animate && "animate-gradientMove",
        className
      )}
    >
      {text}
    </span>
  );
};

export { GradientText };
