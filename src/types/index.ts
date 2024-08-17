import { ReactNode } from "react";

export interface Product {
  color: ReactNode;
  description: any;
  id: number;
  title: string;
  name: string;
  category: string;
  price: number;
  image: string;
}
