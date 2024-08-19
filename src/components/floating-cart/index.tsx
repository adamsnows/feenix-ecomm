"use client";

import React, { useState } from "react";
import { FaTimes, FaTrashAlt } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { useCart } from "@/context/cart-context";
import { useUser } from "@/context/user-context";

const FloatingCart: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();
  const { isLoggedIn } = useUser();
  const [isVisible, setIsVisible] = useState(false);

  const handleRemoveItem = (index: number) => {
    removeFromCart(index);
  };

  const toggleCartVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (!isLoggedIn || cartItems.length === 0) {
    return null;
  }

  return (
    <>
      <div
        className={`fixed right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 cursor-pointer shadow-lg z-50 rounded-l-lg ${
          isVisible ? "opacity-0" : "opacity-100"
        }`}
        onClick={toggleCartVisibility}
      >
        <CiShoppingCart className="text-[#ff6347] animate__animated animate__bounce animate__slower animate__repeat-2 text-2xl" />
      </div>

      <div
        className={`fixed right-0 top-0 w-80 h-full bg-white shadow-lg transition-transform ${
          isVisible ? "translate-x-0" : "translate-x-full"
        } flex flex-col z-40`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <h2 className="text-lg font-bold">Cart</h2>
          <FaTimes
            className="text-xl cursor-pointer"
            onClick={toggleCartVisibility}
          />
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b border-gray-300 py-2"
              >
                <div className="flex flex-col">
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-sm text-gray-600">{item.category}</span>
                  <span className="font-bold">${item.price.toFixed(2)}</span>
                  <span className="text-sm text-gray-600">
                    Color: {item.color}
                  </span>
                </div>
                <FaTrashAlt
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleRemoveItem(index)}
                />
              </div>
            ))
          )}
        </div>
        <div className="p-4 border-t border-gray-300">
          <button className="w-full bg-gray-900 text-white py-2 rounded-full">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingCart;
