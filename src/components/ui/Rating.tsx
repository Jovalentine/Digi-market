import React from 'react';
import { cn } from '../../utils/cn';
import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  readonly?: boolean;
  onChange?: (value: number) => void;
  className?: string;
}

export const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  size = 'md',
  readonly = true,
  onChange,
  className,
}) => {
  const stars = Array.from({ length: max }, (_, i) => i + 1);
  
  // Size classes
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };
  
  // Container size classes
  const containerSizeClasses = {
    sm: 'gap-1',
    md: 'gap-1.5',
    lg: 'gap-2',
  };
  
  return (
    <div 
      className={cn(
        'flex items-center', 
        containerSizeClasses[size], 
        !readonly && 'cursor-pointer',
        className
      )}
    >
      {stars.map((star) => (
        <Star
          key={star}
          className={cn(
            sizeClasses[size],
            'transition-colors',
            star <= value 
              ? 'fill-accent-400 text-accent-400' 
              : 'fill-transparent text-gray-300',
            !readonly && 'cursor-pointer hover:text-accent-400'
          )}
          onClick={() => !readonly && onChange?.(star)}
          onKeyDown={(e) => {
            if (!readonly && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault();
              onChange?.(star);
            }
          }}
          tabIndex={!readonly ? 0 : undefined}
        />
      ))}
    </div>
  );
};