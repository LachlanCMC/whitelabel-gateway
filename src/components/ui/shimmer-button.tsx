
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  children: React.ReactNode;
  className?: string;
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  ({ 
    shimmerColor = "rgba(20, 113, 70, 0.1)", 
    shimmerSize = "0.1em", 
    borderRadius = "100px",
    shimmerDuration = "2s",
    className,
    children,
    ...props 
  }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative overflow-hidden button-shine", 
          className
        )}
        style={{ 
          borderRadius: borderRadius,
        }}
        {...props}
      >
        {children}
        <span 
          className="absolute inset-0 overflow-hidden rounded-[inherit]" 
          style={{ 
            '--shimmer-color': shimmerColor,
            '--shimmer-size': shimmerSize,
            '--shimmer-duration': shimmerDuration,
          } as React.CSSProperties}
        />
      </Button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";

export { ShimmerButton };
