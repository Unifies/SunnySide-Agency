import { div } from "framer-motion/client";
import React from "react";
import BannerPng from "../../assets/desktop/image-header.jpg";

const BackgroundImage = ({ children }) => {
  const backgroundImage = {
    backgroundImage: `url(${BannerPng})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={backgroundImage} className="h-[100vh]">
      {children}
    </div>
  );
};

export default BackgroundImage;
