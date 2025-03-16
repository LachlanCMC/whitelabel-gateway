
import React from "react";
import { cn } from "@/lib/utils";

interface ApiCodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

const ApiCodeBlock = ({
  code,
  language = "javascript",
  title,
  className,
}: ApiCodeBlockProps) => {
  return (
    <div className={cn(
      "rounded-lg overflow-hidden border",
      className
    )}>
      {title && (
        <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 border-b">
          <p className="text-sm font-medium">{title}</p>
        </div>
      )}
      <pre className="p-4 overflow-x-auto bg-slate-50 dark:bg-slate-900 text-sm">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export { ApiCodeBlock };
