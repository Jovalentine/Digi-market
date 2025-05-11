import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { CartItem, Product } from '../types';

// Define the shape of the cart state
interface CartState {
  items: CartItem[];
  itemCount: number;
  total: number;
}

// Define actions for the reducer
type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' };

// Define the context value shape
interface CartContextValue extends CartState {
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

// Create the context
const CartContext = createContext<CartContextValue | undefined>(undefined);

// Reducer function to handle cart state updates
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === action.payload.id
      );

      let updatedItems: CartItem[];

      if (existingItemIndex >= 0) {
        // Item already exists in cart, update quantity
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
      } else {
        // New item, add to cart
        updatedItems = [...state.items, { product: action.payload, quantity: 1 }];
      }

      // Calculate new totals
      const newTotal = updatedItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );

      const newItemCount = updatedItems.reduce(
        (count, item) => count + item.quantity,
        0
      );

      return {
        ...state,
        items: updatedItems,
        total: newTotal,
        itemCount: newItemCount,
      };
    }

    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(
        (item) => item.product.id !== action.payload
      );

      // Calculate new totals
      const newTotal = updatedItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );

      const newItemCount = updatedItems.reduce(
        (count, item) => count + item.quantity,
        0
      );

      return {
        ...state,
        items: updatedItems,
        total: newTotal,
        itemCount: newItemCount,
      };
    }

    case 'UPDATE_QUANTITY': {
      const { productId, quantity } = action.payload;

      // Don't allow negative quantities
      if (quantity <= 0) {
        return state;
      }

      const updatedItems = state.items.map((item) =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      );

      // Calculate new totals
      const newTotal = updatedItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );

      const newItemCount = updatedItems.reduce(
        (count, item) => count + item.quantity,
        0
      );

      return {
        ...state,
        items: updatedItems,
        total: newTotal,
        itemCount: newItemCount,
      };
    }

    case 'CLEAR_CART':
      return {
        items: [],
        total: 0,
        itemCount: 0,
      };

    default:
      return state;
  }
};

// Create the provider component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state, potentially from localStorage
  const initialState: CartState = {
    items: [],
    total: 0,
    itemCount: 0,
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Add action dispatchers
  const addItem = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const removeItem = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { productId, quantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // Combine state and actions to create context value
  const contextValue: CartContextValue = {
    ...state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = (): CartContextValue => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};