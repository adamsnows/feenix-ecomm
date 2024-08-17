"use client";

import Image from "next/image";

interface ProductImageProps {
  image: string;
  name: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ image, name }) => {
  return (
    <div className="bg-white h-full w-full col-span-2 rounded">
      <Image
        src={image}
        alt={name}
        width={600}
        height={400}
        className="mx-auto"
      />
    </div>
  );
};

export default ProductImage;
