
import React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  text: string;
  className?: string;
  fromColor?: string;
  toColor?: string;
  animate?: boolean;
  size?: "default" | "lg" | "xl";
}

const GradientText = ({
  text,
  className,
  fromColor = "from-invest-400",
  toColor = "to-invest-600",
  animate = false,
  size = "default",
}: GradientTextProps) => {
  return (
    <span
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent bg-[length:200%_auto]",
        fromColor,
        toColor,
        animate && "animate-gradientMove",
        size === "lg" && "text-4xl md:text-5xl font-bold",
        size === "xl" && "text-5xl md:text-6xl font-bold",
        className
      )}
      style={animate ? {
        backgroundSize: "200% auto",
        animationDuration: "3s",
        animationTimingFunction: "ease",
        animationIterationCount: "infinite",
      } : undefined}
    >
      {text}
    </span>
  );
};

export { GradientText };
