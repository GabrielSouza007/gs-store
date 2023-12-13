import { db } from "@/lib/prisma";
import ProductImages from "./components/products-image";

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
    <div>
      <ProductImages imageUrls={products.imageUrls} name={products.name} />
    </div>
  );
};

export default ProductsDetailsPage;
