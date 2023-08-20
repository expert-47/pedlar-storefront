import React, { useState } from "react";

const GalleryItem = (props: any) => {
  const { original, thumbnail, width, height } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div style={{ position: "relative", width, height }}>
      {!isLoaded && (
        <img
          src={thumbnail}
          alt=""
          style={{
            width,
            height,
            filter: "blur(10px)",
            objectFit: "contain",
          }}
        />
      )}
      <img
        src={original}
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.3s ease-out",
          width,
          height,
          objectFit: "contain",
        }}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default GalleryItem;
