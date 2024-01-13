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
    <>
      <div className="mx-auto max-w-[1920px]">
        <Link href="/deals">
          <PromoBanner
            src="/deals-banner.svg"
            priority={true}
            className="hidden h-auto w-full lg:block"
            alt={"Até 55% de desconto esse mês!"}
          />
        </Link>
      </div>

      <div className="mx-auto flex flex-col gap-8 py-2 lg:container lg:gap-8">
        <Link href="/deals">
          <PromoBanner
            src="/banner-home-01.svg"
            className="px-5 lg:hidden"
            alt="Até 55% de desconto esse mês"
          />
        </Link>

        <div className="px-5 lg:mt-2">
          <Categories />
        </div>

        <div className="flex flex-col gap-3 lg:gap-5">
          <SectionTitle url="/deals">Ofertas</SectionTitle>
          <ProductList products={deals} />
        </div>

        <div className="flex flex-col lg:flex-row">
          <Link href="/category/mouses" className="flex flex-1">
            <PromoBanner
              src={"/banner-home-02.svg"}
              alt={"Até 55% de desconto em mouses"}
              className="w-0 flex-1 px-5"
            />
          </Link>

          <Link href="/category/headphones" className="flex flex-1">
            <PromoBanner
              src={"/banner-home-03.svg"}
              alt={"Até 55% de desconto em fones"}
              className="hidden w-0 flex-1 lg:block"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-3 lg:gap-5">
          <SectionTitle url="/category/keyboards">Teclados</SectionTitle>
          <ProductList products={keyboards} />
        </div>

        <div>
          <Link href="/category/headphones">
            <PromoBanner
              src="/banner-home-03.svg"
              alt="Até 55% de desconto em fones"
              className="px-5 lg:hidden"
            />
          </Link>

          <Link href="/catalog">
            <PromoBanner
              src="/free-shipping-banner.svg"
              alt="Frete grátis"
              className="hidden px-5 lg:block"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-3 lg:gap-5">
          <SectionTitle url="/category/mouses">Mouses</SectionTitle>
          <ProductList products={mouses} />
        </div>
      </div>
    </>
  );
}
