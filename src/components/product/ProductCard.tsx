import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Rating } from '../ui/Rating';
import { Product } from '../../types';
import { formatPrice, calculateDiscount } from '../../utils/formatters';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
  layout?: 'grid' | 'list';
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product,
  layout = 'grid'
}) => {
  const { addItem } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };
  
  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Wishlist functionality would be implemented here
  };
  
  if (layout === 'list') {
    return (
      <Link to={`/products/${product.id}`}>
        <Card className="overflow-hidden hover:scale-[1.01] transition-transform duration-200">
          <div className="flex flex-col md:flex-row">
            <div className="relative md:w-1/3">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-60 md:h-full object-cover"
              />
              {product.isOnSale && product.originalPrice && (
                <Badge 
                  variant="primary" 
                  className="absolute top-2 left-2"
                >
                  {calculateDiscount(product.originalPrice, product.price)}% OFF
                </Badge>
              )}
              {product.isBestSeller && (
                <Badge 
                  variant="secondary" 
                  className="absolute top-2 right-2"
                >
                  Best Seller
                </Badge>
              )}
            </div>
            
            <div className="p-6 flex flex-col md:w-2/3">
              <div className="mb-2">
                <Badge variant="outline" className="mb-2">{product.category}</Badge>
                <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
                
                <div className="flex items-center mb-2">
                  <Rating value={product.rating} size="sm" />
                  <span className="text-xs text-gray-600 ml-2">
                    ({product.reviewCount} reviews)
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                
                <ul className="mb-4">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="text-xs text-gray-700 flex items-center mb-1">
                      <span className="w-1 h-1 bg-primary-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto flex flex-wrap items-center justify-between">
                <div className="mb-2 md:mb-0">
                  <div className="flex items-baseline">
                    <span className="font-bold text-lg">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                      <span className="text-gray-500 text-sm line-through ml-2">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    size="sm"
                    variant="outline"
                    onClick={handleAddToWishlist}
                    leftIcon={<Heart size={16} />}
                  >
                    Wishlist
                  </Button>
                  <Button 
                    size="sm"
                    onClick={handleAddToCart}
                    leftIcon={<ShoppingCart size={16} />}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    );
  }
  
  return (
    <Link to={`/products/${product.id}`}>
      <Card className="overflow-hidden h-full hover:scale-[1.02] transition-transform duration-200">
        <div className="relative">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-48 object-cover"
          />
          {product.isOnSale && product.originalPrice && (
            <Badge 
              variant="primary" 
              className="absolute top-2 left-2"
            >
              {calculateDiscount(product.originalPrice, product.price)}% OFF
            </Badge>
          )}
          {product.isBestSeller && (
            <Badge 
              variant="secondary" 
              className="absolute top-2 right-2"
            >
              Best Seller
            </Badge>
          )}
        </div>
        
        <div className="p-4">
          <Badge variant="outline" className="mb-2">{product.category}</Badge>
          <h3 className="font-semibold line-clamp-1">{product.name}</h3>
          
          <div className="flex items-center my-2">
            <Rating value={product.rating} size="sm" />
            <span className="text-xs text-gray-600 ml-2">
              ({product.reviewCount})
            </span>
          </div>
          
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
          
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-baseline">
              <span className="font-bold">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-gray-500 text-xs line-through ml-1">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            
            <div className="flex space-x-1">
              <Button 
                size="sm"
                variant="ghost"
                className="p-1"
                onClick={handleAddToWishlist}
              >
                <Heart size={18} />
              </Button>
              <Button 
                size="sm"
                variant="ghost"
                className="p-1"
                onClick={handleAddToCart}
              >
                <ShoppingCart size={18} />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};