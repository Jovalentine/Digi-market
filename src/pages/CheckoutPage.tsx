import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, CreditCard, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatters';

const CheckoutPage: React.FC = () => {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  // Calculate shipping cost (free over $100)
  const shippingCost = total >= 100 ? 0 : 9.99;
  
  // Calculate tax (10%)
  const taxAmount = total * 0.1;
  
  // Calculate grand total
  const grandTotal = total + shippingCost + taxAmount;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsComplete(true);
      clearCart(); // Clear the cart on successful checkout
      
      // Redirect to confirmation page after 2 seconds
      setTimeout(() => {
        navigate('/checkout/confirmation');
      }, 2000);
    }, 1500);
  };
  
  if (isComplete) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-lg mx-auto text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-success-400 text-white rounded-full mb-6">
              <CheckCircle size={32} />
            </div>
            
            <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
            <p className="text-gray-600 mb-8">
              Your order has been placed and is being processed. You will receive a confirmation email shortly.
            </p>
            
            <Link to="/">
              <Button size="lg">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link 
            to="/cart"
            className="flex items-center text-primary-400 hover:text-primary-500 transition-colors text-sm font-medium"
          >
            <ChevronLeft size={16} className="mr-1" />
            Back to Cart
          </Link>
        </div>
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Checkout</h1>
          <p className="text-gray-600">
            Complete your purchase by providing payment details
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="font-semibold flex items-center">
                  <CreditCard size={18} className="mr-2" />
                  Payment Information
                </h2>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6">
                <div className="space-y-6">
                  {/* Billing Information */}
                  <div>
                    <h3 className="font-medium mb-4">Billing Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="First Name"
                        placeholder="Enter your first name"
                        required
                      />
                      <Input
                        label="Last Name"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                    
                    <div className="mt-4">
                      <Input
                        label="Email Address"
                        type="email"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Card Information */}
                  <div>
                    <h3 className="font-medium mb-4">Card Information</h3>
                    <div className="space-y-4">
                      <Input
                        label="Card Number"
                        placeholder="1234 1234 1234 1234"
                        required
                      />
                      
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          label="Expiration Date"
                          placeholder="MM/YY"
                          required
                        />
                        <Input
                          label="Security Code"
                          placeholder="CVC"
                          required
                        />
                      </div>
                      
                      <Input
                        label="Cardholder Name"
                        placeholder="Name as it appears on your card"
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Terms Agreement */}
                  <div className="flex items-start">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 mt-1 text-primary-400 focus:ring-primary-400 border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                      I agree with the{' '}
                      <Link to="/terms" className="text-primary-400 hover:text-primary-500">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-primary-400 hover:text-primary-500">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  
                  <Button
                    type="submit"
                    fullWidth
                    size="lg"
                    isLoading={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : `Pay ${formatPrice(grandTotal)}`}
                  </Button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-24">
              <div className="p-6 border-b border-gray-200">
                <h2 className="font-semibold">Order Summary</h2>
              </div>
              
              <div className="p-6">
                <ul className="divide-y divide-gray-200 mb-4">
                  {items.map((item) => (
                    <li key={item.product.id} className="py-3 flex justify-between">
                      <div className="flex items-start">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium line-clamp-1">
                            {item.product.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            Qty: {item.quantity}
                          </p>
                        </div>
                      </div>
                      <div className="ml-4 text-sm font-medium">
                        {formatPrice(item.product.price * item.quantity)}
                      </div>
                    </li>
                  ))}
                </ul>
                
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;