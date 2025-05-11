import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md',
        className
      )}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => {
  return (
    <div
      className={cn('flex flex-col space-y-1.5 p-6', className)}
    >
      {children}
    </div>
  );
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const CardTitle: React.FC<CardTitleProps> = ({ 
  children, 
  className,
  as: Component = 'h3'
}) => {
  return (
    <Component
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
    >
      {children}
    </Component>
  );
};

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ children, className }) => {
  return (
    <p
      className={cn('text-sm text-gray-500', className)}
    >
      {children}
    </p>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
  return (
    <div className={cn('p-6 pt-0', className)}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => {
  return (
    <div
      className={cn('flex items-center p-6 pt-0', className)}
    >
      {children}
    </div>
  );
};