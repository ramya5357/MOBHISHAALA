import React from 'react';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export const Link: React.FC<LinkProps> = ({ 
  to, 
  children, 
  className = "", 
  external = false 
}) => {
  const baseClasses = "text-gray-800 transition-colors duration-200";
  const combinedClasses = `${baseClasses} ${className}`;
  
  if (external) {
    return (
      <a 
        href={to}
        className={combinedClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  
  // In a real app with routing, we'd use a proper router link
  // For now, using a styled anchor tag
  return (
    <a href={to} className={combinedClasses}>
      {children}
    </a>
  );
};