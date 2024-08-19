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

  const getUniqueProducts = (allProducts: Product[]) => {
    const initialGridCount = 8;
    const initialSwiperCount = 4;
    const remainingGridCount = 8;

    const initialGridProducts = allProducts.slice(0, initialGridCount);

    const initialSwiperProducts = allProducts
      .filter(
        (product) =>
          !initialGridProducts.some(
            (gridProduct) => gridProduct.id === product.id
          )
      )
      .slice(0, initialSwiperCount);
    const remainingProducts = allProducts
      .filter(
        (product) =>
          !initialGridProducts.some(
            (gridProduct) => gridProduct.id === product.id
          )
      )
      .filter(
        (product) =>
          !initialSwiperProducts.some(
            (swiperProduct) => swiperProduct.id === product.id
          )
      );

    const remainingProductsAfterInitial = remainingProducts.slice(
      0,
      remainingGridCount
    );

    return {
      initialGridProducts,
      initialSwiperProducts,
      remainingProductsAfterInitial,
    };
  };

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

  const {
    initialGridProducts,
    initialSwiperProducts,
    remainingProductsAfterInitial,
  } = getUniqueProducts(products);

  return (
    <div className="flex flex-col ">
      <Hero />
      <GridCards
        products={initialGridProducts.sort((a, b) =>
          a.title.localeCompare(b.title)
        )}
      />
      <SwiperCards
        products={initialSwiperProducts.sort((a, b) =>
          a.title.localeCompare(b.title)
        )}
      />
      <GridCards
        products={remainingProductsAfterInitial.sort((a, b) =>
          a.title.localeCompare(b.title)
        )}
      />
    </div>
  );
}
