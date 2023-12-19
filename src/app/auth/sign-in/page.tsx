"use client";

import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <svg
        width="45"
        height="45"
        viewBox="0 0 24 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.004 4.36C8.776 3.94 8.446 3.622 8.014 3.406C7.594 3.178 7.096 3.064 6.52 3.064C5.524 3.064 4.726 3.394 4.126 4.054C3.526 4.702 3.226 5.572 3.226 6.664C3.226 7.828 3.538 8.74 4.162 9.4C4.798 10.048 5.668 10.372 6.772 10.372C7.528 10.372 8.164 10.18 8.68 9.796C9.208 9.412 9.592 8.86 9.832 8.14H5.926V5.872H12.622V8.734C12.394 9.502 12.004 10.216 11.452 10.876C10.912 11.536 10.222 12.07 9.382 12.478C8.542 12.886 7.594 13.09 6.538 13.09C5.29 13.09 4.174 12.82 3.19 12.28C2.218 11.728 1.456 10.966 0.904 9.994C0.364 9.022 0.094 7.912 0.094 6.664C0.094 5.416 0.364 4.306 0.904 3.334C1.456 2.35 2.218 1.588 3.19 1.048C4.162 0.495999 5.272 0.219999 6.52 0.219999C8.032 0.219999 9.304 0.585999 10.336 1.318C11.38 2.05 12.07 3.064 12.406 4.36H9.004ZM18.8989 13.126C17.9749 13.126 17.1469 12.976 16.4149 12.676C15.6829 12.376 15.0949 11.932 14.6509 11.344C14.2189 10.756 13.9909 10.048 13.9669 9.22H17.2429C17.2909 9.688 17.4529 10.048 17.7289 10.3C18.0049 10.54 18.3649 10.66 18.8089 10.66C19.2649 10.66 19.6249 10.558 19.8889 10.354C20.1529 10.138 20.2849 9.844 20.2849 9.472C20.2849 9.16 20.1769 8.902 19.9609 8.698C19.7569 8.494 19.4989 8.326 19.1869 8.194C18.8869 8.062 18.4549 7.912 17.8909 7.744C17.0749 7.492 16.4089 7.24 15.8929 6.988C15.3769 6.736 14.9329 6.364 14.5609 5.872C14.1889 5.38 14.0029 4.738 14.0029 3.946C14.0029 2.77 14.4289 1.852 15.2809 1.192C16.1329 0.52 17.2429 0.184 18.6109 0.184C20.0029 0.184 21.1249 0.52 21.9769 1.192C22.8289 1.852 23.2849 2.776 23.3449 3.964H20.0149C19.9909 3.556 19.8409 3.238 19.5649 3.01C19.2889 2.77 18.9349 2.65 18.5029 2.65C18.1309 2.65 17.8309 2.752 17.6029 2.956C17.3749 3.148 17.2609 3.43 17.2609 3.802C17.2609 4.21 17.4529 4.528 17.8369 4.756C18.2209 4.984 18.8209 5.23 19.6369 5.494C20.4529 5.77 21.1129 6.034 21.6169 6.286C22.1329 6.538 22.5769 6.904 22.9489 7.384C23.3209 7.864 23.5069 8.482 23.5069 9.238C23.5069 9.958 23.3209 10.612 22.9489 11.2C22.5889 11.788 22.0609 12.256 21.3649 12.604C20.6689 12.952 19.8469 13.126 18.8989 13.126Z"
          fill="url(#paint0_linear_817_443)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_817_443"
            x1="-0.5"
            y1="6.5"
            x2="9.27823"
            y2="6.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#5033C3" />
            <stop offset="1" stop-color="#8162FF" />
          </linearGradient>
        </defs>
      </svg>

      <div>
        <Button
          variant="outline"
          className="w-[300px] gap-2 rounded-md"
          onClick={() => signIn("google")}
        >
          <LogIn size={16} />
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
