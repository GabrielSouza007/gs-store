import { computeProductTotalPrices } from "@/helpers/products";
import { db } from "@/lib/prisma";
import ProductImages from "./components/products-image";
import ProductsInfo from "./components/products-info";

interface ProductsDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProductsDetailsPage = async ({
  params: { slug },
}: ProductsDetailsPageProps) => {
  const products = await db.product.findFirst({
    where: {
      slug: slug,
    },
  });

  if (!products) return null;

  return (
    <div className="flex flex-col gap-8">
      <ProductImages imageUrls={products.imageUrls} name={products.name} />
      <ProductsInfo product={computeProductTotalPrices(products)} />
    </div>
  );
};

export default ProductsDetailsPage;
