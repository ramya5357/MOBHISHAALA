// Product Types
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPrice?: number;
  images: string[];
  thumbnail: string;
  category: string;
  tags: string[];
  featured?: boolean;
  bestseller?: boolean;
  rating: number;
  reviews: number;
  stock: number;
  options?: ProductOption[];
  specifications?: Record<string, string>;
  customizable: boolean;
  minQuantity?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductOption {
  id: string;
  name: string;
  required: boolean;
  type: 'select' | 'radio' | 'checkbox' | 'color' | 'text' | 'number' | 'file';
  choices?: OptionChoice[];
  min?: number;
  max?: number;
  fileTypes?: string[];
  maxFileSize?: number;
}

export interface OptionChoice {
  id: string;
  label: string;
  value: string;
  price?: number;
  image?: string;
  default?: boolean;
}

// Category Types
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image: string;
  parentId?: string;
  children?: Category[];
  productCount: number;
  featured?: boolean;
}

// User Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: 'user' | 'admin';
  phone?: string;
  addresses: Address[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  id: string;
  type: 'billing' | 'shipping';
  default: boolean;
  firstName: string;
  lastName: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone?: string;
}

// Cart Types
export interface CartItem {
  id: string;
  productId: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  options?: Record<string, string | number | boolean | File>;
  customFile?: string;
}

export interface Cart {
  id: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
  couponCode?: string;
}

// Order Types
export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  billingAddress: Address;
  shippingAddress: Address;
  payment: PaymentInfo;
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  trackingNumber?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  productId: string;
  title: string;
  price: number;
  quantity: number;
  options?: Record<string, string>;
  customFile?: string;
}

export interface PaymentInfo {
  method: 'credit_card' | 'paypal' | 'razorpay' | 'cod';
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  transactionId?: string;
  amount: number;
  currency: string;
  cardLast4?: string;
}

// Review Types
export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  images?: string[];
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
  helpful: number;
  unhelpful: number;
}

// API Response Types
export interface ApiResponse<T> {
  status: 'success' | 'error';
  data?: T;
  error?: string;
  message?: string;
  pagination?: PaginationInfo;
}

export interface PaginationInfo {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}