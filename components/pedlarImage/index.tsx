import React from "react";
import Image, { ImageProps, StaticImageData } from "next/image";
import { useState } from "react";
import { Box } from "@mui/material";
import skeletonImg from "public/skeletonImg.jpeg";
interface props extends ImageProps {
  zIndex?: number;
  placeholder: StaticImageData;
  item: any;
  renderError: any;
  onLoad: any;
}
const PedlarImage = (props: props) => {
  const [error, setError] = useState(false);
  const { zIndex = -1, placeholder, renderError, onLoad } = props;

  if (error && renderError) {
    return renderError();
  }

  return (
    <Box style={{ width: "100%", height: "100%", position: "relative", zIndex: zIndex }}>
      <Image
        objectFit="cover"
        layout="fill"
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        {...props}
        src={error ? placeholder || skeletonImg : props.src}
        onError={() => {
          setError(true);
        }}
        onLoad={onLoad}
        loading="eager"
      />
    </Box>
  );
};

export default PedlarImage;
