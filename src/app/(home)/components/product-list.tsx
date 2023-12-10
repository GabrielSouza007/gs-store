import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrices } from "@/helpers/products";
import { Product } from "@prisma/client";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={computeProductTotalPrices(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;