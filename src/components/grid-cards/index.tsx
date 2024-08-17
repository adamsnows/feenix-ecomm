import { useEffect, useState } from "react";
import ProductCard from "../cards/product-card";
import { Product } from "@/types";

interface GridCardsProps {
  products: Product[];
}

const GridCards: React.FC<GridCardsProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-4 my-10 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default GridCards;
