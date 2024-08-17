"use client";

import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import toast from "react-hot-toast";
import { useCart } from "@/context/cart-context";
import { useUser } from "@/context/user-context";
import { Product } from "@/types";

interface ProductDetailsProps {
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  name,
  category,
  price,
  description,
  image,
}) => {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const { addToCart } = useCart();
  const { isLoggedIn } = useUser();

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      toast.error("Please log in to add items to the cart.");
      return;
    }

    if (!selectedColor) {
      toast.error("Please select a color.");
      return;
    }

    const item: Product = {
      id: Date.now(),
      title: name,
      name,
      category,
      price,
      color: selectedColor,
      description,
      image,
    };

    addToCart(item);
    toast.success("Item added to cart!");
  };

  return (
    <div className="h-full w-full flex flex-col">
      <span className="font-bold text-4xl">{name}</span>
      <span className="text-sm text-gray-600">{category}</span>
      <span className="font-bold">${price.toFixed(2)}</span>
      <div className="border-t border-gray-300 my-14 " />
      <div className="flex flex-col gap-2">
        <span>Available colors:</span>
        <div className="flex gap-4">
          <div
            className={`border p-1 rounded-full border-gray-400 ${
              selectedColor === "gray-900" ? "ring-2 ring-gray-900" : ""
            }`}
            onClick={() => setSelectedColor("gray-900")}
          >
            <div className="bg-gray-900 h-[30px] w-[30px] rounded-full cursor-pointer" />
          </div>
          <div
            className={`border p-1 rounded-full border-gray-400 ${
              selectedColor === "gray-500" ? "ring-2 ring-gray-500" : ""
            }`}
            onClick={() => setSelectedColor("gray-500")}
          >
            <div className="bg-gray-500 h-[30px] w-[30px] rounded-full cursor-pointer" />
          </div>
          <div
            className={`border p-1 rounded-full border-gray-400 ${
              selectedColor === "gray-100" ? "ring-2 ring-gray-100" : ""
            }`}
            onClick={() => setSelectedColor("gray-100")}
          >
            <div className="bg-gray-100 h-[30px] w-[30px] rounded-full cursor-pointer" />
          </div>
        </div>
      </div>
      <div
        className="flex justify-between mt-10 p-3 px-5 bg-gray-900 rounded-full text-white items-center cursor-pointer"
        onClick={handleAddToCart}
      >
        <span>Add to cart</span>
        <div className="bg-white p-3 rounded-full">
          <FaPlus className="text-black" />
        </div>
      </div>
      <span className="text-xs mt-10">{description}</span>
      <img src={image} alt={name} className="w-full mt-4" />
    </div>
  );
};

export default ProductDetails;
