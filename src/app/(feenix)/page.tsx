"use client";

import { useEffect, useState } from "react";
import GridCards from "@/components/grid-cards";
import Hero from "@/components/hero";
import SwiperCards from "@/components/swiper";
import { fetchProducts } from "@/services/productService";
import { Product } from "@/types";
import { Loader } from "rizzui";
import toast from "react-hot-toast";

type FetchError = Error | unknown;

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const allProducts = await fetchProducts();
        setProducts(allProducts);
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Failed to fetch products";
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const gridProducts = products.slice(0, 8);
  const swiperProducts = products.slice(8, 12);

  if (loading) {
    return <Loader size="lg" className="mx-auto" />;
  }

  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span>No products available.</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col ">
      <Hero />
      <GridCards products={gridProducts} />
      <SwiperCards products={swiperProducts} />
      <GridCards products={gridProducts} />
      <SwiperCards products={swiperProducts} />
    </div>
  );
}
