"use client";

import { useEffect, useState } from "react";
import { fetchProductsByCategory } from "@/services/productService";
import { Product } from "@/types";
import ProductCard from "@/components/cards/product-card";
import { Loader } from "rizzui";
import toast from "react-hot-toast";

const jewelryPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getJewelryProducts = async () => {
      try {
        const jewelryProducts = await fetchProductsByCategory("jewelry");
        setProducts(jewelryProducts);
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "Failed to fetch jewelry products";
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    getJewelryProducts();
  }, []);

  if (loading) {
    return <Loader size="lg" className="mx-auto" />;
  }

  if (products.length === 0) {
    return <span className="m-auto">No jewelry products available.</span>;
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">jewelry Products</h1>
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="col-span-1">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default jewelryPage;
