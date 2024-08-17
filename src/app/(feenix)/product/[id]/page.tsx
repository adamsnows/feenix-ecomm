"use client";

import { FaPlus } from "react-icons/fa6";
import { Tab } from "rizzui";
import { GoDot } from "react-icons/go";
import { Loader } from "rizzui";
import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { fetchProductById } from "@/services/productService";
import { useParams } from "next/navigation";
import { Product } from "@/types";

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
              {product.description
                .split("\n")
                .map(
                  (
                    line:
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | Promise<AwaitedReactNode>
                      | null
                      | undefined,
                    index: Key | null | undefined
                  ) => (
                    <div key={index} className="flex items-center gap-2">
                      <GoDot className="h-4 w-4" />
                      <span>{line}</span>
                    </div>
                  )
                )}
            </Tab.Panel>
            <Tab.Panel>Features panel</Tab.Panel>
            <Tab.Panel>Size panel</Tab.Panel>
            <Tab.Panel>Warranty panel</Tab.Panel>
          </Tab.Panels>
        </Tab>
      </div>
      <div className="bg-white h-full w-full col-span-2 rounded">
        <img src={product.image} alt={product.name} className="mx-auto" />
      </div>
      <div className="h-full w-full flex flex-col">
        <span className="font-bold text-4xl">{product.name}</span>
        <span className="text-sm text-gray-600">{product.category}</span>
        <span className="font-bold">${product.price.toFixed(2)}</span>
        <div className="border-t border-gray-300 my-14 " />
        <div className="flex flex-col gap-2">
          <span>Available colors:</span>
          <div className="flex gap-4">
            {/* Exemplo de cores */}
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
