import React, { useEffect } from "react";
import { useState } from "react";
import { Box } from "@mui/material";

import NewImage, { ImageProps } from "next/image";
import { isMobile } from "react-device-detect";
const maxWidthProductImage = isMobile ? 600 : 800;
const maxHeightProductImage = isMobile ? 700 : 900;
interface Props extends ImageProps {
  zIndex?: number;
  renderError?: any;
  onLoad?: any;
  enableBlurDataUrl?: boolean;
  fill?: boolean;
  layout?: "default" | "";
  showPlaceHolder: boolean;
}

export const NextImage = (props: Props) => {
  const { zIndex = -1, layout } = props;
  const imageProps = { ...props };
  delete imageProps.layout;
  if (layout == "default") {
    return <CustomImage {...imageProps} />;
  }
  return (
    <Box style={{ width: "100%", height: "100%", position: "relative", zIndex: zIndex }}>
      <CustomImage {...props} />
    </Box>
  );
};

const CustomImage = (props) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Show the image after a delay (3 seconds in this case)

    const timeoutId = setTimeout(() => {
      setFade(true);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  const { placeholder, renderError, onLoad, fill = true, style, showPlaceHolder } = props;
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
      className={`fade-in ${fade ? "image-loaded" : ""}`}
      style={{
        ...style,
        objectFit: style?.objectFit ? style?.objectFit : "cover",
        backgroundColor: error ? "#eae9e7ff" : "transparent",
      }}
      src={props.src}
      onError={() => {
        setError(true);
      }}
      placeholder={
        placeholder || `data:image/svg+xml;base64,${toBase64(shimmer(maxWidthProductImage, maxHeightProductImage))}`
      }
      onLoad={() => {
        setLoaded(true);
        if (onLoad) onLoad();
      }}
      loading={props.priority ? "eager" : "lazy"}
    />
  );
};

const toBase64 = (str: string) =>
  typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);

const shimmer = (w = maxWidthProductImage, h = maxHeightProductImage) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color=" #E8E8E8" offset="20%" />
      <stop stop-color=" #E8E8E8" offset="50%" />
      <stop stop-color=" #E8E8E8" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill=" #E8E8E8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;
