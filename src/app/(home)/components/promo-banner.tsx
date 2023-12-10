import Image, { ImageProps } from "next/image";

const PromoBanner = (props: ImageProps) => {
  return (
    <Image
      height={0}
      width={0}
      className="mt-2 h-auto w-full px-5"
      sizes="100vw"
      {...props}
    />
  );
};

export default PromoBanner;
