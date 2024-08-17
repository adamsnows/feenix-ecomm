import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const ProductCard = () => {
  return (
    <Link className="h-[400px] w-full" href="/product/1">
      <div className="bg-white w-full h-[300px]">
        <img src="/default-product.png" alt="" className="mx-auto h-[300px]" />
      </div>
      <div className="flex flex-col mt-2">
        <span className="font-bold">Product name</span>
        <span className="text-sm text-gray-600">Product category</span>
        <span className="font-bold">$ 150.0</span>
      </div>
    </Link>
  );
};

export default ProductCard;
