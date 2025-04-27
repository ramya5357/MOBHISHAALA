import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null
};

// Action types
type AuthAction = 
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGIN_FAILURE'; payload: string }
  | { type: 'REGISTER_SUCCESS'; payload: User }
  | { type: 'REGISTER_FAILURE'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'UPDATE_USER'; payload: Partial<User> }
  | { type: 'CLEAR_ERROR' }
  | { type: 'SET_LOADING'; payload: boolean };

// Reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null
      };
    
    case 'LOGIN_FAILURE':
    case 'REGISTER_FAILURE':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload
      };
    
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null
      };
    
    case 'UPDATE_USER':
      return {
        ...state,
        user: state.user ? { ...state.user, ...action.payload } : null
      };
    
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null
      };
    
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      };
    
    default:
      return state;
  }
};

// Creating the Auth Context
interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Partial<User> & { email: string; password: string }) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock API functions (replace with real API calls in production)
const mockLogin = async (email: string, password: string): Promise<User> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Check credentials (replace with real authentication)
  if (email === 'demo@example.com' && password === 'password123') {
    const user: User = {
      id: '1',
      email: 'demo@example.com',
      firstName: 'Demo',
      lastName: 'User',
      role: 'user',
      addresses: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    return user;
  }
  
  throw new Error('Invalid email or password');
};

const mockRegister = async (userData: Partial<User> & { email: string; password: string }): Promise<User> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate a registration
  const newUser: User = {
    id: Math.random().toString(36).substring(7),
    email: userData.email,
    firstName: userData.firstName || '',
    lastName: userData.lastName || '',
    role: 'user',
    addresses: userData.addresses || [],
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  return newUser;
};

// Provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState, (initial) => {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('user');
    
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        return {
          ...initial,
          user,
          isAuthenticated: true,
          isLoading: false
        };
      } catch (error) {
        localStorage.removeItem('user');
      }
    }
    
    return {
      ...initial,
      isLoading: false
    };
  });
  
  useEffect(() => {
    // Save user to localStorage when authentication state changes
    if (state.isAuthenticated && state.user) {
      localStorage.setItem('user', JSON.stringify(state.user));
    } else if (!state.isAuthenticated) {
      localStorage.removeItem('user');
    }
  }, [state.isAuthenticated, state.user]);
  
  const login = async (email: string, password: string) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    try {
      const user = await mockLogin(email, password);
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    } catch (error) {
      dispatch({ 
        type: 'LOGIN_FAILURE', 
        payload: error instanceof Error ? error.message : 'An unknown error occurred'
      });
    }
  };
  
  const register = async (userData: Partial<User> & { email: string; password: string }) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    try {
      const user = await mockRegister(userData);
      dispatch({ type: 'REGISTER_SUCCESS', payload: user });
    } catch (error) {
      dispatch({ 
        type: 'REGISTER_FAILURE', 
        payload: error instanceof Error ? error.message : 'An unknown error occurred'
      });
    }
  };
  
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };
  
  const updateUser = (userData: Partial<User>) => {
    dispatch({ type: 'UPDATE_USER', payload: userData });
  };
  
  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };
  
  return (
    <AuthContext.Provider 
      value={{
        ...state,
        login,
        register,
        logout,
        updateUser,
        clearError
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};