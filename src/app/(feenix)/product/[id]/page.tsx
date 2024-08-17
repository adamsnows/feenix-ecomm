"use client";

import { useEffect, useState } from "react";
import { Loader } from "rizzui";
import { useParams } from "next/navigation";
import { fetchProductById } from "@/services/productService";
import { Product } from "@/types";
import ProductTabs from "@/components/product/product-tabs";
import ProductImage from "@/components/product/product-image";
import ProductDetails from "@/components/product/product-details";

const ProductViewPage: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      if (id) {
        const productData = await fetchProductById(Number(id));
        setProduct(productData);
      }
    };

    getProduct();
  }, [id]);

  if (!product) {
    return <Loader size="xl" className="mx-auto" />;
  }

  return (
    <div className="grid grid-cols-4 my-5 w-full gap-10">
      <ProductTabs description={product.description} />
      <ProductImage image={product.image} name={product.name} />
      <ProductDetails
        name={product.name}
        category={product.category}
        price={product.price}
      />
    </div>
  );
};

export default ProductViewPage;
