import React from "react";
import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { Box } from "@mui/material";

interface props extends ImageProps {
  zIndex?: number;
}
const PedlarImage = (props: props) => {
  const [error, setError] = useState(false);
  const { zIndex = -1 } = props;
  return (
    <Box style={{ width: "100%", height: "100%", position: "relative", zIndex: zIndex }}>
      <Image
        objectFit="cover"
        layout="fill"
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        {...props}
        src={error ? "/noImage.jpeg" : props.src}
        onError={() => {
          setError(true);
        }}
        loading="lazy"
        placeholder="blur"
        blurDataURL="/loaderShim.png"
      />
    </Box>
  );
};

export default PedlarImage;
