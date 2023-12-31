import { CartContext, CartProduct } from "@/providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";
import { Button } from "./button";

interface CartItemProps {
  products: CartProduct;
}

const CartItem = ({ products }: CartItemProps) => {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductsFromCart,
  } = useContext(CartContext);

  const handleDecreaseProductQuantityClick = () => {
    decreaseProductQuantity(products.id);
  };

  const handleIncreaseProductQuantityClick = () => {
    increaseProductQuantity(products.id);
  };

  const handleRemoveProductsFromCartClick = () => {
    removeProductsFromCart(products.id);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent">
          <Image
            src={products.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            alt={products.name}
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-xs">{products.name}</p>

          <div className="flex items-center gap-2">
            <p className="text-sm font-bold">
              R${products.totalPrice.toFixed(2)}
            </p>
            {products.discountPercentage > 0 && (
              <p className="text-xs line-through opacity-75">
                R${Number(products.basePrice).toFixed(2)}
              </p>
            )}
          </div>

          <div className="flex items-center gap-1">
            <Button
              size="icon"
              variant={"outline"}
              className="h-8 w-8"
              onClick={handleDecreaseProductQuantityClick}
            >
              <ArrowLeftIcon size={16} className="h-4 w-4" />
            </Button>

            <span className="text-xs">{products.quantity}</span>

            <Button
              size="icon"
              variant={"outline"}
              className="h-8 w-8"
              onClick={handleIncreaseProductQuantityClick}
            >
              <ArrowRightIcon size={16} className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Button
        size={"icon"}
        variant={"outline"}
        onClick={handleRemoveProductsFromCartClick}
        className="h-8 w-8"
      >
        <TrashIcon size={16} className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CartItem;
