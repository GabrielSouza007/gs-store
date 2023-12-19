import Link from "next/link";
import { ComponentProps } from "react";

interface SectionTitleProps extends ComponentProps<"span"> {
  url: string;
}

const SectionTitle = ({ children, url, ...props }: SectionTitleProps) => {
  return (
    <div className="flex justify-between px-5">
      <span className="mb-3 text-sm font-bold uppercase" {...props}>
        {children}
      </span>
      <Link href={url} className="text-xs font-semibold uppercase">
        Ver mais
      </Link>
    </div>
  );
};

export default SectionTitle;
