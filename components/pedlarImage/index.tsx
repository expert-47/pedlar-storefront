import React from "react";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

const PedlarImage = (props: ImageProps) => {
  const [error, setError] = useState(false);
  return (
    <Image
      {...props}
      src={!error ? props.src : "/noImage.jpeg"}
      onError={() => {
        setError(true);
      }}
      loading="lazy"
      placeholder="blur"
      blurDataURL="/noImage.jpeg"
    />
  );
};

export default PedlarImage;
