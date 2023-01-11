import React from "react";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

const PedlarImage = (props: ImageProps) => {
  const [error, setError] = useState(false);
  return (
    <Image
      {...props}
      src={error ? "/noImage.jpeg" : props.src}
      onError={() => {
        setError(true);
      }}
    />
  );
};

export default PedlarImage;
