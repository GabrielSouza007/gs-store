import { db } from "@/lib/prisma";
import Link from "next/link";
import ProductList from "../../components/ui/product-list";
import SectionTitle from "../../components/ui/section-title";
import Categories from "./components/categories";
import PromoBanner from "./components/promo-banner";

export default async function Home() {
  const deals = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await db.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await db.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <div className="mx-auto flex flex-col gap-8 py-8 lg:container">
      <Link href="/deals">
        <PromoBanner src="/banner-home-01.svg" alt="" />
      </Link>

      <div className="px-5 lg:mt-2">
        <Categories />
      </div>

      <div className="flex flex-col gap-3 lg:gap-5">
        <SectionTitle url="/deals">Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <div>
        <Link href="/category/mouses">
          <PromoBanner src="/banner-home-02.svg" alt="" />
        </Link>
      </div>

      <div>
        <SectionTitle url="/category/keyboards">Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <div>
        <Link href="/category/headphones">
          <PromoBanner src="/banner-home-03.svg" alt="" />
        </Link>
      </div>

      <div>
        <SectionTitle url="/category/mouses">Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  );
}
