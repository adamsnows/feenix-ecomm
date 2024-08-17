import ProductDetails from "@/components/product/product-details";
import { fetchProductById } from "@/services/productService";
import ProductTabs from "@/components/product/product-tabs";
import ProductImage from "@/components/product/product-image";

interface ProductPageProps {
  params: { id: number };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await fetchProductById(params.id);

  if (!product || !product.description || !product.image) {
    return <p>Product not found or missing details.</p>;
  }

  return (
    <div className="flex gap-4">
      <ProductTabs description={product.description} />
      <ProductImage image={product.image} name={product.name} />
      <ProductDetails
        name={product.name}
        category={product.category}
        price={product.price}
        description={product.description}
        image={product.image}
      />
    </div>
  );
};

export default ProductPage;
