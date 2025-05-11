import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Heart, 
  Share2, 
  Check, 
  ChevronLeft, 
  Star, 
  ArrowLeft, 
  ArrowRight 
} from 'lucide-react';
import { products } from '../data/products';
import { reviews } from '../data/reviews';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Rating } from '../components/ui/Rating';
import { ProductReview } from '../components/product/ProductReview';
import { useCart } from '../context/CartContext';
import { formatPrice, calculateDiscount } from '../utils/formatters';
import { ProductCard } from '../components/product/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  // Find the product
  const product = products.find(p => p.id === id);
  
  // Get reviews for this product
  const productReviews = reviews[id as string] || [];
  
  // Get related products (same category)
  const relatedProducts = products
    .filter(p => p.id !== id && p.category === product?.category)
    .slice(0, 4);
  
  // Handle adding to cart
  const handleAddToCart = () => {
    if (product) {
      // Add multiple items based on quantity
      for (let i = 0; i < quantity; i++) {
        addItem(product);
      }
    }
  };
  
  // If product not found
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-28 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/products">
            <Button leftIcon={<ChevronLeft size={16} />}>
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-primary-400">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-primary-400">Products</Link>
            <span className="mx-2">/</span>
            <Link to={`/categories/${product.category}`} className="hover:text-primary-400">
              {product.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700 font-medium">{product.name}</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Product Details Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product Image */}
            <div className="relative">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover object-center"
                style={{ maxHeight: '500px' }}
              />
              
              {product.isOnSale && product.originalPrice && (
                <Badge 
                  variant="primary" 
                  className="absolute top-4 left-4 text-sm"
                >
                  {calculateDiscount(product.originalPrice, product.price)}% OFF
                </Badge>
              )}
            </div>
            
            {/* Product Info */}
            <div className="p-6 md:p-8 flex flex-col">
              <div className="mb-2">
                <Badge variant="outline">{product.category}</Badge>
                {product.isBestSeller && (
                  <Badge variant="secondary" className="ml-2">Best Seller</Badge>
                )}
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <Rating value={product.rating} />
                <span className="ml-2 text-gray-600 text-sm">
                  ({product.reviewCount} reviews)
                </span>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 text-lg line-through ml-2">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={16} className="text-primary-400 mt-0.5 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Quantity</h3>
                <div className="flex items-center">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="px-3"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="mx-4 min-w-8 text-center">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="px-3"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <Button 
                  leftIcon={<ShoppingCart size={18} />}
                  size="lg"
                  className="flex-1"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  leftIcon={<Heart size={18} />}
                  size="lg"
                  className="flex-1"
                >
                  Add to Wishlist
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="sm:flex-initial"
                >
                  <Share2 size={18} />
                </Button>
              </div>
              
              <div className="border-t border-gray-200 mt-6 pt-6">
                <div className="flex items-center">
                  <Star className="text-accent-400 mr-2" size={16} />
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Satisfaction guaranteed.</span> If you're not 
                    satisfied with the product, we offer a 30-day money-back guarantee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Reviews Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-12">
          <h2 className="text-xl font-bold mb-6">Customer Reviews</h2>
          
          {productReviews.length > 0 ? (
            <div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <Rating value={product.rating} size="lg" />
                      <span className="ml-2 text-2xl font-bold">{product.rating.toFixed(1)}</span>
                    </div>
                    <p className="text-gray-600">Based on {product.reviewCount} reviews</p>
                  </div>
                  
                  <Button>Write a Review</Button>
                </div>
              </div>
              
              <div className="space-y-2">
                {productReviews.map(review => (
                  <ProductReview key={review.id} review={review} />
                ))}
              </div>
              
              {product.reviewCount > productReviews.length && (
                <div className="mt-6 text-center">
                  <Button variant="outline">View All Reviews</Button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">No reviews yet</p>
              <Button>Be the First to Review</Button>
            </div>
          )}
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Related Products</h2>
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="p-2"
                  aria-label="Previous products"
                >
                  <ArrowLeft size={16} />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="p-2"
                  aria-label="Next products"
                >
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;