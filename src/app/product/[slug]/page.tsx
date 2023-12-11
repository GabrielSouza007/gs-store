import { db } from "@/lib/prisma";

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

  return <h1>{products.name}</h1>;
};

export default ProductsDetailsPage;
