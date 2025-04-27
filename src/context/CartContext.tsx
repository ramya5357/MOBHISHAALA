import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Cart, CartItem } from '../types';

// Initial state
const initialCart: Cart = {
  id: 'local-cart',
  items: [],
  subtotal: 0,
  tax: 0,
  shipping: 0,
  discount: 0,
  total: 0,
};

// Action types
type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'APPLY_COUPON'; payload: string }
  | { type: 'REMOVE_COUPON' }
  | { type: 'CLEAR_CART' };

// Reducer
const cartReducer = (state: Cart, action: CartAction): Cart => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(item => 
        item.productId === action.payload.productId && 
        JSON.stringify(item.options) === JSON.stringify(action.payload.options)
      );

      let newItems;
      
      if (existingItemIndex >= 0) {
        // If item exists, increase quantity
        newItems = state.items.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity
            };
          }
          return item;
        });
      } else {
        // If item doesn't exist, add it
        newItems = [...state.items, action.payload];
      }
      
      return recalculateCart({
        ...state,
        items: newItems
      });
    }
    
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload);
      return recalculateCart({
        ...state,
        items: newItems
      });
    }
    
    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: action.payload.quantity
          };
        }
        return item;
      });
      
      return recalculateCart({
        ...state,
        items: newItems
      });
    }
    
    case 'APPLY_COUPON': {
      // In a real app, this would validate the coupon with an API
      // For now, we'll just apply a 10% discount
      return recalculateCart({
        ...state,
        couponCode: action.payload,
        discount: state.subtotal * 0.1
      });
    }
    
    case 'REMOVE_COUPON': {
      return recalculateCart({
        ...state,
        couponCode: undefined,
        discount: 0
      });
    }
    
    case 'CLEAR_CART': {
      return {
        ...initialCart,
        id: state.id
      };
    }
    
    default:
      return state;
  }
};

// Helper to recalculate cart totals
const recalculateCart = (cart: Cart): Cart => {
  const subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // Assuming 8% tax rate
  const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
  const total = subtotal + tax + shipping - cart.discount;
  
  return {
    ...cart,
    subtotal,
    tax,
    shipping,
    total
  };
};

// Create context
interface CartContextType {
  cart: Cart;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  applyCoupon: (code: string) => void;
  removeCoupon: () => void;
  clearCart: () => void;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart, (initial) => {
    // Load from localStorage on initialization
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : initial;
  });
  
  useEffect(() => {
    // Save to localStorage whenever cart changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
  const itemCount = cart.items.reduce((count, item) => count + item.quantity, 0);
  
  const addItem = (item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };
  
  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };
  
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };
  
  const applyCoupon = (code: string) => {
    dispatch({ type: 'APPLY_COUPON', payload: code });
  };
  
  const removeCoupon = () => {
    dispatch({ type: 'REMOVE_COUPON' });
  };
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  
  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      removeItem,
      updateQuantity,
      applyCoupon,
      removeCoupon,
      clearCart,
      itemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook for using the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};