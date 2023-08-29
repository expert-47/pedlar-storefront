import React from "react";
import Image, { ImageProps, StaticImageData } from "next/image";
import { useState } from "react";
import { Box } from "@mui/material";
import skeletonImg from "public/skeletonImg.jpeg";
interface Props extends Omit<ImageProps, "placeholder"> {
  zIndex?: number;
  placeholder?: StaticImageData;
  renderError?: any;
  onLoad?: any;
  enableBlurDataUrl?: boolean;
}
const PedlarImage = (props: Props) => {
  const [error, setError] = useState(false);
  const { zIndex = -1, placeholder, renderError, onLoad, enableBlurDataUrl } = props;

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
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={error ? placeholder || skeletonImg : props.src}
        onError={() => {
          setError(true);
        }}
        placeholder={enableBlurDataUrl ? "blur" : undefined}
        {...(enableBlurDataUrl ? { blurDataURL: "/loaderShim.png" } : {})}
        onLoad={onLoad}
        loading="eager"
        {...props}
      />
    </Box>
  );
};

export default PedlarImage;
