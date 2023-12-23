import { createCheckout } from "@/actions/checkout";
import { createOrder } from "@/actions/order";
import { computeProductTotalPrices } from "@/helpers/products";
import { CartContext } from "@/providers/cart";
import { loadStripe } from "@stripe/stripe-js";
import { ShoppingBasket, ShoppingCartIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Badge } from "./badge";
import { Button } from "./button";
import CartItem from "./cart-items";
import { ScrollArea } from "./scroll-area";
import { Separator } from "./separator";
import { SheetClose } from "./sheet";

interface CartProps {}

const Cart = () => {
  const { data } = useSession();

  const { products, subTotal, total, totalDiscount } = useContext(CartContext);

  const handleFinishPurchaseClick = async () => {
    if (!data?.user) {
      return;
    }

    const order = await createOrder(products, (data?.user as any).id);

    const checkout = await createCheckout(products, order.id);

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    });
  };

  return (
    <div className="flex h-full flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="flex h-full max-h-full flex-col gap-5 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex h-full flex-col gap-8">
            {products.length > 0 ? (
              products.map((product) => (
                <CartItem
                  key={product.id}
                  products={computeProductTotalPrices(product as any) as any}
                />
              ))
            ) : (
              <div className="mt-32 flex flex-col items-center justify-center gap-4">
                <Image
                  src="/cart.svg"
                  alt="Empty Cart"
                  width="220"
                  height="220"
                />
                <span className="mb-2 font-bold text-[#5033c3]">
                  Seu carrinho está vazio.
                </span>
                <SheetClose asChild>
                  <Link href="/deals">
                    <Button
                      variant="outline"
                      className="gap-2 rounded-full text-sm font-bold"
                    >
                      <ShoppingBasket size={18} />
                      Vá às compras
                    </Button>
                  </Link>
                </SheetClose>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>

      {products.length > 0 && (
        <div className="flex flex-col gap-3">
          <Separator />

          <div className="flex items-center justify-between text-xs">
            <p>Subtotal</p>
            <p>R$ {subTotal.toFixed(2)}</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-xs">
            <p>Entrega</p>
            <p>Grátis</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-xs">
            <p>Descontos</p>
            <p>-R${totalDiscount.toFixed(2)}</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-xs font-bold">
            <p>Total</p>
            <p>R${total.toFixed(2)}</p>
          </div>
          <Button
            className="m-7 font-bold uppercase"
            onClick={handleFinishPurchaseClick}
          >
            Finalizar compra
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
