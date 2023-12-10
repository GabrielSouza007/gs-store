import { db } from "@/lib/prisma";
import CategoryItem from "./category-item";

const Categories = async () => {
  const categories = await db.category.findMany({});
  return (
    <div className="grid grid-cols-2 gap-4 gap-x-4 gap-y-2">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
