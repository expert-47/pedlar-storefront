import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import skeletonImg from "public/skeletonImg.jpeg";
import NewImage, { ImageProps, StaticImageData } from "next/image";

interface Props extends Omit<ImageProps, "placeholder"> {
  zIndex?: number;
  placeholder?: StaticImageData;
  renderError?: any;
  onLoad?: any;
  enableBlurDataUrl?: boolean;
  fill?: boolean;
  layout?: "default" | "";
}

export const NextImage = (props: Props) => {
  const { zIndex = -1, layout } = props;

  if (layout == "default") {
    return <CustomImage {...props} />;
  }
  return (
    <Box style={{ width: "100%", height: "100%", position: "relative", zIndex: zIndex }}>
      <CustomImage {...props} />
    </Box>
  );
};

const CustomImage = (props) => {
  const [error, setError] = useState(false);

  const { zIndex = -1, placeholder, renderError, onLoad, fill = true, style } = props;
  if (error && renderError) {
    return renderError();
  }
  return (
    <NewImage
      sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
      fill={fill}
      {...props}
      style={{
        ...style,
        objectFit: style?.objectFit ? style?.objectFit : "cover",
      }}
      src={error ? placeholder || skeletonImg : props.src}
      onError={() => {
        setError(true);
      }}
      placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
      onLoad={onLoad}
      loading={props.priority ? "eager" : "lazy"}
    />
  );
};
const toBase64 = (str: string) =>
  typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);

const shimmer = (w = 200, h = 200) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;
