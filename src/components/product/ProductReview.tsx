import React from 'react';
import { formatDate } from '../../utils/formatters';
import { Review } from '../../types';
import { Rating } from '../ui/Rating';

interface ProductReviewProps {
  review: Review;
}

export const ProductReview: React.FC<ProductReviewProps> = ({ review }) => {
  return (
    <div className="border-b border-gray-200 py-4 last:border-0">
      <div className="flex items-start">
        {review.userAvatar ? (
          <img 
            src={review.userAvatar} 
            alt={review.userName} 
            className="w-10 h-10 rounded-full mr-4"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
            <span className="text-gray-500 text-sm font-medium">
              {review.userName.charAt(0)}
            </span>
          </div>
        )}
        
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
            <h4 className="font-medium">{review.userName}</h4>
            <span className="text-gray-500 text-sm">{formatDate(review.date)}</span>
          </div>
          
          <div className="mb-2">
            <Rating value={review.rating} size="sm" />
          </div>
          
          <p className="text-gray-700 text-sm">{review.text}</p>
        </div>
      </div>
    </div>
  );
};