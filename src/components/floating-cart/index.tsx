"use client";

import { useState, useEffect } from "react";
import { FaTimes, FaTrashAlt } from "react-icons/fa";
import { Product } from "@/types";
import { CiShoppingCart } from "react-icons/ci";

const FloatingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const updateCart = () => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCartItems);
  };

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      setIsLoggedIn(true);
      updateCart();
      window.addEventListener("storage", handleStorageChange);
      window.addEventListener("cartUpdated", updateCart);
    }

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("cartUpdated", updateCart);
    };
  }, []);

  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === "cart") {
      updateCart();
    }
  };

  const handleRemoveItem = (index: number) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const toggleCartVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (!isLoggedIn) {
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
