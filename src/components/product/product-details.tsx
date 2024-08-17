"use client";

import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import toast from "react-hot-toast";

interface ProductDetailsProps {
  name: string;
  category: string;
  price: number;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  name,
  category,
  price,
}) => {
  const [selectedColor, setSelectedColor] = useState<string>("");

  const handleAddToCart = () => {
    if (!selectedColor) {
      toast.error("Please select a color.");
      return;
    }

    const item = {
      name,
      category,
      price,
      color: selectedColor,
    };

    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    cartItems.push(item);
    localStorage.setItem("cart", JSON.stringify(cartItems));

    // Emite um evento customizado para notificar a atualização
    window.dispatchEvent(new Event("cartUpdated"));

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
          {/* Exemplo de cores */}
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
      <span className="text-xs mt-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </span>
    </div>
  );
};

export default ProductDetails;
