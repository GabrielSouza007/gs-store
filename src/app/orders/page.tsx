import { Badge } from "@/components/ui/badge";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { Package } from "lucide-react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import OrderItem from "./components/order-item";

async function OrderPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <Image
          src="/warning.svg"
          alt="Warning alert"
          width="192"
          height="192"
        />
        <span className="text-xl font-semibold text-[#5033c3]">
          Acesso Negado
        </span>
      </div>
    );
  }

  const orders = await db.order.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });

  return (
    <div className="p-5 lg:container lg:mx-auto lg:py-10">
      <Badge variant="heading">
        <Package size={16} />
        Meus Pedidos
      </Badge>

      <div className="mt-5 flex flex-col gap-5">
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default OrderPage;
