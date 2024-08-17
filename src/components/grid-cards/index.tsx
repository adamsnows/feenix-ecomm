import ProductCard from "../cards/product-card";

const GridCards = () => {
  return (
    <div className="grid grid-cols-4 my-10 gap-6">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default GridCards;
