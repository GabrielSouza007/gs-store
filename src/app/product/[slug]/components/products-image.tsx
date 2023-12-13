"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  name: string;
  imageUrls: string[];
}

const ProductImages = ({ imageUrls, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  const handleImageClick = (imageUrls: string) => {
    setCurrentImage(imageUrls);
  };

  return (
    <div className="flex flex-col">
      <div className="flex h-[380px] w-full items-center justify-center bg-accent">
        <Image
          src={currentImage}
          alt={name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <div className="mt-8 grid grid-cols-4 gap-4 px-5">
        {imageUrls.map((imageUrls) => (
          <button
            key={imageUrls}
            className={`flex h-[100px] w-full items-center justify-center rounded-lg bg-accent
            ${
              imageUrls === currentImage &&
              "border-2 border-solid border-primary"
            }
            `}
            onClick={() => handleImageClick(imageUrls)}
          >
            <Image
              src={imageUrls}
              alt={name}
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
