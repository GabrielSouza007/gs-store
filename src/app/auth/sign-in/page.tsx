"use client";

import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <span className="font-bold">Acesse sua conta</span>
      <Button
        variant="secondary"
        className="flex gap-2"
        onClick={() => signIn("google")}
      >
        <LogIn size={16} />
        <span className="font-semibold">Fazer login com Google</span>
      </Button>
    </div>
  );
}
