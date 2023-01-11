import React from "react";
import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { Box } from "@mui/material";

const PedlarImage = (props: ImageProps) => {
  const [error, setError] = useState(false);
  return (
    <Box style={{ width: "100%", height: "100%", position: "relative", zIndex: -1 }}>
      <Image
        {...props}
        src={error ? "/noImage.jpeg" : props.src}
        onError={() => {
          setError(true);
        }}
        objectFit="cover"
        layout="fill"
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
      />
    </Box>
  );
};

export default PedlarImage;
