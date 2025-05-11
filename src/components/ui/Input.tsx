import React, { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, leftIcon, rightIcon, fullWidth = false, ...props }, ref) => {
    const inputClasses = cn(
      'flex h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      error && 'border-error-400 focus-visible:ring-error-400',
      leftIcon && 'pl-10',
      rightIcon && 'pr-10',
      fullWidth && 'w-full',
      className
    );

    return (
      <div className={cn('flex flex-col space-y-1.5', fullWidth && 'w-full')}>
        {label && (
          <label className="text-sm font-medium leading-none text-gray-700">{label}</label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}
          <input ref={ref} className={inputClasses} {...props} />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>
        {error && <p className="text-xs text-error-400">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';