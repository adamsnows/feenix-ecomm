"use client";

import Image from "next/image";

interface ProductImageProps {
  image: string;
  name: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ image, name }) => {
  return (
    <div className="bg-white h-full w-full col-span-2 rounded p-4 flex items-center justify-center">
      <Image
        src={image}
        alt={name}
        width={450}
        height={400}
        className="m-auto"
      />
    </div>
  );
};

export default ProductImage;
