"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchProducts } from "@/services/productService";
import ProductCard from "@/components/cards/product-card";
import { Product } from "@/types";
import { Loader } from "rizzui";

const SearchResultsPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true); // Start loading
      const allProducts = await fetchProducts();
      const filteredProducts = allProducts.filter((product: Product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setProducts(filteredProducts);
      setLoading(false); // End loading
    };

    if (query) {
      getProducts();
    } else {
      setLoading(false); // Stop loading if no query
    }
  }, [query]);

  if (loading) {
    return <Loader size="xl" className="mx-auto" />;
  }

  return (
    <div className="grid grid-cols-4 my-10 gap-6">
      {products.length > 0 ? (
        products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="col-span-4 text-center text-gray-600">
          No products found.
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;
