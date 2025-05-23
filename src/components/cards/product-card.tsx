import { Product } from "@/types";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link className="h-[400px] w-full" href={`/product/${product.id}`}>
      <div className="bg-white w-full p-10">
        <img
          src={product.image}
          alt={product.title}
          className="mx-auto h-[250px] object-contain"
        />
      </div>
      <div className="flex flex-col mt-2 px-2">
        <span className="font-bold text-base overflow-hidden overflow-ellipsis whitespace-nowrap">
          {product.title}
        </span>
        <span className="text-sm text-gray-600 capitalize">
          {product.category}
        </span>
        <span className="font-bold">${product.price.toFixed(2)}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
