import axiosInstance from "@/api/fakestore";
import { Product } from "@/types";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axiosInstance.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const fetchProductById = async (id: number): Promise<Product | null> => {
  try {
    const response = await axiosInstance.get<Product>(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    return null;
  }
};

export const fetchProductsByCategory = async (
  category: string
): Promise<Product[]> => {
  try {
    const response = await axiosInstance.get(`/products/category/${category}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching products for category ${category}:`, error);
    return [];
  }
};
