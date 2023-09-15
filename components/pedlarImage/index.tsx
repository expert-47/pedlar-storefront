import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import { isMobile } from "react-device-detect";
const maxWidthProductImage = isMobile ? 150 : 290;
const maxHeightProductImage = isMobile ? 187 : 290;
import NewImage, { ImageProps } from "next/image";

interface Props extends ImageProps {
  zIndex?: number;
  renderError?: any;
  onLoad?: any;
  enableBlurDataUrl?: boolean;
  fill?: boolean;
  layout?: "default" | "";
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
      src={props.src}
      onError={() => {
        setError(true);
      }}
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(style?.width || 340, style?.height || 400))}`}
      // placeholder={
      //   placeholder || `data:image/svg+xml;base64,${toBase64(shimmer(style?.width || 340, style?.height || 400))}`
      // }
      // {...(placeholder
      //   ? { blurDataURL: `data:image/svg+xml;base64,${toBase64(shimmer(style?.width || 340, style?.height || 400))}` }
      //   : {})}
      onLoad={onLoad}
      loading={props.priority ? "eager" : "lazy"}
    />
  );
};
const toBase64 = (str: string) =>
  typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);

const shimmer = (w = maxWidthProductImage, h = maxHeightProductImage) => `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="blur" x="-100%" y="0" width="300%" height="100%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="100">
        <animate attributeName="x" from="-100%" to="100%" dur="1s" repeatCount="indefinite" />
      </feGaussianBlur>
    </filter>
  </defs>
  <rect width="${w}" height="${h}" fill="rgba(200, 200, 200, 0.5)" filter="url(#blur)" />
</svg>`;
