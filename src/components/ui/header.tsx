"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { CartContext } from "@/providers/cart";
import {
  AlignJustify,
  HomeIcon,
  LogInIcon,
  LogOut,
  LogOutIcon,
  MenuIcon,
  Package,
  PercentIcon,
  ShoppingCartIcon,
  User,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useContext } from "react";
import { RenderOnClient } from "../render-on-client";
import { Badge } from "./badge";
import { Button } from "./button";
import { Card } from "./card";
import Cart from "./cart";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";

const Header = () => {
  const { status, data } = useSession();

  const { products } = useContext(CartContext);

  const cartQuantityItems = products.length;

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden" size="icon" variant={"outline"}>
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent className="lg-w-[21.875rem] w-full" side={"left"}>
          <SheetHeader className="text-lg font-bold">Menu</SheetHeader>

          {status === "authenticated" && data?.user && (
            <div className="flex flex-col">
              <div className="flex items-center gap-2 py-4">
                <Avatar>
                  <AvatarFallback>
                    {data.user.name?.[0].toUpperCase()}
                  </AvatarFallback>
                  {data.user.image && (
                    <AvatarImage
                      className="h-14 w-14 rounded-full"
                      src={data.user.image}
                    />
                  )}
                </Avatar>
                <div className="flex flex-col">
                  <p className="font-medium">{data.user.name}</p>
                  <p className="text-sm opacity-60">Boas compras!</p>
                </div>
              </div>
              <Separator />
            </div>
          )}

          <div className="mt-4 flex flex-col gap-2">
            {status === "unauthenticated" && (
              <Button
                onClick={handleLoginClick}
                variant={"outline"}
                className="w-full justify-start gap-2"
              >
                <LogInIcon size={16} />
                Fazer Login
              </Button>
            )}
            {status === "authenticated" && (
              <Button
                onClick={handleLogoutClick}
                variant={"outline"}
                className="w-full justify-start gap-2"
              >
                <LogOutIcon size={16} />
                Fazer Logout
              </Button>
            )}

            <SheetClose asChild>
              <Link href="/">
                <Button
                  variant={"outline"}
                  className="w-full justify-start gap-2"
                >
                  <HomeIcon size={16} />
                  Início
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/orders">
                <Button
                  variant={"outline"}
                  className="w-full justify-start gap-2"
                >
                  <Package size={16} />
                  Meus Pedidos
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/deals">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <PercentIcon size={16} />
                  Ofertas
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/catalog">
                <Button
                  variant={"outline"}
                  className="w-full justify-start gap-2"
                >
                  <AlignJustify size={16} />
                  Catálogo
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>

      <Link href="/">
        <h1 className="text-lg font-semibold ">
          <span className="text-primary">GS</span> Store
        </h1>
      </Link>

      <div className="hidden md:block ">
        <div className="flex h-5 items-center space-x-6 text-sm">
          <div>
            <Link className="text-sm font-semibold" href="/">
              Início
            </Link>
          </div>

          <Separator orientation="vertical" />

          <div>
            <Link className="text-sm font-bold" href="/catalog">
              Catálogo
            </Link>
          </div>

          <Separator className="text-sm font-bold" orientation="vertical" />

          <div>
            <Link className="text-sm font-bold" href="/deals">
              Ofertas
            </Link>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="hidden md:flex">
          {!data || !data.user ? (
            <Button size="icon" variant="outline" onClick={handleLoginClick}>
              <User />
            </Button>
          ) : (
            <Button size="icon" variant="outline" onClick={handleLogoutClick}>
              <LogOut />
            </Button>
          )}
        </div>

        <RenderOnClient>
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="relative">
                {cartQuantityItems > 0 && (
                  <Badge className="absolute right-[calc(-1.25rem/2)] top-[calc(-1.25rem/2)] flex h-6 w-6 items-center justify-center rounded-lg bg-primary text-sm font-bold">
                    {cartQuantityItems}
                  </Badge>
                )}
                <ShoppingCartIcon />
              </Button>
            </SheetTrigger>

            <SheetContent className="w-full lg:w-[21.875rem]">
              <Cart />
            </SheetContent>
          </Sheet>
        </RenderOnClient>
      </div>
    </Card>
  );
};

export default Header;
