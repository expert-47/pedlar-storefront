import React from "react";
import Image, { ImageProps, StaticImageData } from "next/image";
import { useState } from "react";
import { Box } from "@mui/material";
import skeletonImg from "public/skeletonImg.jpeg";
interface props extends ImageProps {
  zIndex?: number;
  placeholder: StaticImageData;
  item: any;
}
const PedlarImage = (props: props) => {
  const [error, setError] = useState(false);
  const { zIndex = -1, placeholder, item } = props;
  return (
    <Box style={{ width: "100%", height: "100%", position: "relative", zIndex: zIndex }}>
      <Image
        objectFit="cover"
        layout="fill"
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        {...props}
        src={error ? placeholder || item?.vendor : props.src}
        onError={() => {
          setError(true);
        }}
        // loading="lazy"
        placeholder="blur"
        blurDataURL="/loaderShim.png"
      />
    </Box>
  );
};

export default PedlarImage;
