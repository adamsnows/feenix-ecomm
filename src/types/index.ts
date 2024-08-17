export interface Product {
  color: string;
  description: string;
  id: number;
  title: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

export interface CartItem {
  name: string;
  category: string;
  price: number;
  color: string;
}
