import React from "react";
import Image, { ImageProps, StaticImageData } from "next/legacy/image";
import { useState } from "react";
import { Box } from "@mui/material";
import skeletonImg from "public/skeletonImg.jpeg";
import NewImage from "next/image";

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
        {...props}
        src={error ? placeholder || skeletonImg : props.src}
        onError={() => {
          setError(true);
        }}
        placeholder={enableBlurDataUrl ? "blur" : undefined}
        {...(enableBlurDataUrl ? { blurDataURL: "/loaderShim.png" } : {})}
        onLoad={onLoad}
        loading="eager"
      />
    </Box>
  );
};

export default PedlarImage;

export const NextImage = (props: Props) => {
  const [error, setError] = useState(false);
  const { zIndex = -1, placeholder, renderError, onLoad, fill = true, style } = props;

  if (error && renderError) {
    return renderError();
  }
  return (
    <Box style={{ width: "100%", height: "100%", position: "relative", zIndex: zIndex }}>
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
    </Box>
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
