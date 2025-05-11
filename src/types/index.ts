export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  imageUrl: string;
  category: string;
  subcategory?: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isOnSale?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  text: string;
  date: string;
}