import { Badge } from "@/components/ui/badge";
import { db } from "@/lib/prisma";
import { AlignJustify } from "lucide-react";
import CategoryItem from "./components/category-items";

const CatalogPage = async () => {
  const categories = await db.category.findMany({});
  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        <AlignJustify size={16} />
        Catálogo
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
