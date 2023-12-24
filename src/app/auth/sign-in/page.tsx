"use client";

import { GoogleIcon } from "@/components/icons/google-icon";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="flex h-full items-center justify-center gap-6">
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
    </div>
  );
}
