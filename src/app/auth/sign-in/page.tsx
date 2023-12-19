"use client";

import { GoogleIcon } from "@/components/icons/google-icon";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div>
        <Button
          variant="outline"
          className="w-[300px] gap-2 rounded-md"
          onClick={() => signIn("google")}
        >
          <GoogleIcon className="h-3.5 w-3.5" />
          <span className="text-sm">Fazer login com Google</span>
        </Button>
      </div>

      <div className="flex w-full max-w-[480px] flex-col justify-center space-y-6">
        <p className="px-8 text-center text-sm leading-relaxed">
          Ao clicar em continuar, está a concordar com os nossos Termos de
          Serviço e Política de Privacidade.
        </p>
      </div>
    </div>
  );
}
