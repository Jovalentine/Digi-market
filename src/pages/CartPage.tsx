import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ChevronLeft, ShoppingBag, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatters';

const CartPage: React.FC = () => {
  const { items, total, removeItem, updateQuantity, clearCart } = useCart();
  
  // Calculate shipping cost (free over $100)
  const shippingCost = total >= 100 ? 0 : 9.99;
  
  // Calculate tax (10%)
  const taxAmount = total * 0.1;
  
  // Calculate grand total
  const grandTotal = total + shippingCost + taxAmount;
  
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Your Cart</h1>
          <p className="text-gray-600">
            Review and manage your selected items before checkout
          </p>
        </div>
        
        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">
                      {items.length} {items.length === 1 ? 'Item' : 'Items'} in Cart
                    </h2>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-gray-600"
                      onClick={clearCart}
                    >
                      Clear Cart
                    </Button>
                  </div>
                </div>
                
                <ul className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <li key={item.product.id} className="p-6">
                      <div className="flex gap-4">
                        <Link to={`/products/${item.product.id}`} className="flex-shrink-0">
                          <img 
                            src={item.product.imageUrl} 
                            alt={item.product.name} 
                            className="w-20 h-20 object-cover rounded"
                          />
                        </Link>
                        
                        <div className="flex-1 min-w-0">
                          <Link 
                            to={`/products/${item.product.id}`}
                            className="text-lg font-semibold hover:text-primary-400 transition-colors line-clamp-1"
                          >
                            {item.product.name}
                          </Link>
                          
                          <p className="text-gray-500 mb-1 line-clamp-1">
                            {item.product.category}
                          </p>
                          
                          <div className="mt-2 sm:flex sm:justify-between">
                            <div className="flex items-center">
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="h-8 w-8 p-0"
                                onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                              >
                                -
                              </Button>
                              <span className="mx-3">{item.quantity}</span>
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="h-8 w-8 p-0"
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              >
                                +
                              </Button>
                            </div>
                            
                            <div className="mt-2 sm:mt-0 flex items-center">
                              <div className="mr-6">
                                <div className="font-medium text-gray-900">
                                  {formatPrice(item.product.price * item.quantity)}
                                </div>
                                {item.quantity > 1 && (
                                  <div className="text-xs text-gray-500">
                                    {formatPrice(item.product.price)} each
                                  </div>
                                )}
                              </div>
                              
                              <Button 
                                variant="ghost" 
                                size="sm"
                                className="text-gray-500 hover:text-error-400 p-1"
                                onClick={() => removeItem(item.product.id)}
                              >
                                <Trash2 size={18} />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <div className="p-6 border-t border-gray-200">
                  <Link 
                    to="/products"
                    className="flex items-center text-primary-400 hover:text-primary-500 transition-colors text-sm font-medium"
                  >
                    <ChevronLeft size={16} className="mr-1" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="font-semibold">Order Summary</h2>
                </div>
                
                <div className="p-6">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">{formatPrice(total)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">
                        {shippingCost === 0 ? 'Free' : formatPrice(shippingCost)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax (10%)</span>
                      <span className="font-medium">{formatPrice(taxAmount)}</span>
                    </div>
                    
                    <div className="h-px bg-gray-200 my-4"></div>
                    
                    <div className="flex justify-between text-base font-semibold">
                      <span>Total</span>
                      <span>{formatPrice(grandTotal)}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link to="/checkout">
                      <Button fullWidth size="lg">
                        Proceed to Checkout
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="mt-4 text-xs text-gray-500 flex items-start">
                    <AlertCircle size={14} className="mr-1 flex-shrink-0 mt-0.5" />
                    <p>
                      Digital products will be available for download immediately after payment is confirmed.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Payment Methods */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="font-semibold">We Accept</h2>
                </div>
                
                <div className="p-6">
                  <div className="flex gap-2 mb-4">
                    <div className="bg-gray-100 rounded-md p-2 flex-1 flex items-center justify-center">
                      <span className="text-sm font-medium">Visa</span>
                    </div>
                    <div className="bg-gray-100 rounded-md p-2 flex-1 flex items-center justify-center">
                      <span className="text-sm font-medium">Mastercard</span>
                    </div>
                    <div className="bg-gray-100 rounded-md p-2 flex-1 flex items-center justify-center">
                      <span className="text-sm font-medium">PayPal</span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500">
                    <p>
                      100% secure checkout. Your payment information is processed securely.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-4">
              <ShoppingBag size={24} className="text-gray-400" />
            </div>
            
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any products to your cart yet.
            </p>
            
            <Link to="/products">
              <Button>Start Shopping</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;