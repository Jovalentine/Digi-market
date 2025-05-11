import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Loader } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useAuth } from '../context/AuthContext';

const SignupPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const { signup, isLoading, error } = useAuth();
  const navigate = useNavigate();
  
  const validateForm = () => {
    let isValid = true;
    
    // Reset errors
    setNameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
    
    // Validate name
    if (!name) {
      setNameError('Name is required');
      isValid = false;
    }
    
    // Validate email
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }
    
    // Validate password
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    }
    
    // Validate confirm password
    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password');
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }
    
    return isValid;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    try {
      await signup(name, email, password);
      navigate('/'); // Redirect to home page on successful signup
    } catch (err) {
      // Error handling is done in the AuthContext
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold mb-2">Create an Account</h1>
                <p className="text-gray-600">
                  Join our community and get access to premium digital products
                </p>
              </div>
              
              {error && (
                <div className="mb-6 p-3 bg-red-50 text-error-400 rounded-md text-sm">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <Input
                    label="Full Name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={nameError}
                    leftIcon={<User size={18} />}
                    fullWidth
                  />
                  
                  <Input
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={emailError}
                    leftIcon={<Mail size={18} />}
                    fullWidth
                  />
                  
                  <Input
                    label="Password"
                    type="password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={passwordError}
                    leftIcon={<Lock size={18} />}
                    fullWidth
                  />
                  
                  <Input
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    error={confirmPasswordError}
                    leftIcon={<Lock size={18} />}
                    fullWidth
                  />
                  
                  <div className="flex items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 text-primary-400 focus:ring-primary-400 border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                      I agree to the{' '}
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
                    isLoading={isLoading}
                  >
                    {isLoading ? 'Creating account...' : 'Create Account'}
                  </Button>
                </div>
              </form>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 text-sm">
                  Already have an account?{' '}
                  <Link to="/login" className="font-medium text-primary-400 hover:text-primary-500">
                    Sign in
                  </Link>
                </p>
              </div>
              
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button variant="outline" fullWidth>
                    Google
                  </Button>
                  <Button variant="outline" fullWidth>
                    Facebook
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;