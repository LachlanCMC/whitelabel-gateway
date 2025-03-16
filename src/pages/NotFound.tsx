
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="text-center max-w-md mx-auto">
        <p className="text-invest-500 font-medium tracking-wider mb-2">404 ERROR</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Page not found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <ShimmerButton className="bg-invest-500 hover:bg-invest-600 text-white px-6 py-3">
            Return to Home
          </ShimmerButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
