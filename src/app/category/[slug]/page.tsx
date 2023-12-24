import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { CategoryIcon } from "@/constants/category-icon";
import { computeProductTotalPrices } from "@/helpers/products";
import { db } from "@/lib/prisma";

const CategoryProducts = async ({ params }: any) => {
  const category = await db.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  });

  if (!category) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge variant="heading">
        {CategoryIcon[params.slug as keyof typeof CategoryIcon]}
        {category.name}
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {category.products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrices(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
