import React, { useEffect } from "react";
import WebFont from "webfontloader";

const FontLoader = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter:400,500,600,700&display=swap"],
      },
    });
  }, []);

  return <></>; // An empty fragment, as this component doesn't render anything
};

export default FontLoader;
