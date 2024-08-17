"use client";

import { FaPlus } from "react-icons/fa6";
import { Tab } from "rizzui";
import { GoDot } from "react-icons/go";

const ProductViewPage = () => {
  return (
    <div className="grid grid-cols-4 my-5 w-full gap-10">
      <div className="w-full h-full">
        <Tab className="text-sm">
          <Tab.List>
            <Tab.ListItem>Description</Tab.ListItem>
            <Tab.ListItem>Features</Tab.ListItem>
            <Tab.ListItem>Size</Tab.ListItem>
            <Tab.ListItem>Warranty</Tab.ListItem>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <GoDot className="h-4 w-4" />
                <span>Lorem ipsum dolor sit amet</span>
              </div>
              <div className="flex items-center gap-2">
                <GoDot className="h-4 w-4" />
                <span>Lorem ipsum dolor sit amet</span>
              </div>{" "}
              <div className="flex items-center gap-2">
                <GoDot className="h-4 w-4" />
                <span>Lorem ipsum dolor sit amet</span>
              </div>{" "}
              <div className="flex items-center gap-2">
                <GoDot className="h-4 w-4" />
                <span>Lorem ipsum dolor sit amet</span>
              </div>{" "}
              <div className="flex items-center gap-2">
                <GoDot className="h-4 w-4" />
                <span>Lorem ipsum dolor sit amet</span>
              </div>{" "}
              <div className="flex items-center gap-2">
                <GoDot className="h-4 w-4" />
                <span>Lorem ipsum dolor sit amet</span>
              </div>
              <span className="font-bold">Material</span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </Tab.Panel>
            <Tab.Panel>Popular panel</Tab.Panel>
            <Tab.Panel>Trending panel</Tab.Panel>
            <Tab.Panel>Trending panel</Tab.Panel>
          </Tab.Panels>
        </Tab>
      </div>
      <div className="bg-white h-full w-full col-span-2 rounded">
        <img src="/default-product.png" alt="" className="mx-auto" />
      </div>
      <div className="h-full w-full flex flex-col">
        <span className="font-bold text-4xl">Product name</span>
        <span className="text-sm text-gray-600">Product category</span>
        <span className="font-bold">$ 150.0</span>
        <div className="border-t border-gray-300 my-14 " />
        <div className="flex flex-col gap-2">
          <span>Available colors:</span>
          <div className="flex gap-4">
            <div className="border p-1 rounded-full border-gray-400">
              <div className="bg-gray-900 h-[30px] w-[30px] rounded-full cursor-pointer" />
            </div>
            <div className="border p-1 rounded-full border-gray-400">
              <div className="bg-gray-500 h-[30px] w-[30px] rounded-full cursor-pointer" />
            </div>
            <div className="border p-1 rounded-full border-gray-400">
              <div className="bg-gray-100 h-[30px] w-[30px] rounded-full cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-10 p-3 px-5 bg-gray-900 rounded-full text-white items-center cursor-pointer">
          <span>Add to cart</span>
          <div className="bg-white p-3 rounded-full">
            <FaPlus className="text-black" />
          </div>
        </div>
        <span className="text-xs mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
      </div>
    </div>
  );
};

export default ProductViewPage;
