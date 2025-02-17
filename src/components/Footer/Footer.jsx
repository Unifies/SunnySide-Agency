import { footer } from "framer-motion/client";
import React from "react";
import LogoPng from "../../assets/footerlogo.svg";
import BackgroundPng from "../../assets/footerbackground.jpg";
import FacebookPng from "../../assets/icon-facebook.svg";
import InstagramPng from "../../assets/icon-instagram.svg";
import TwitterPng from "../../assets/icon-twitter.svg";
import PinterestPng from "../../assets/icon-pinterest.svg";

const Footer = () => {
  const backgroundImage = {
    backgroundImage: `url(${BackgroundPng})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <footer>
      <div
        style={backgroundImage}
        className="py-20 flex flex-col justify-center items-center text-center"
      >
        <div>
          <img
            src={LogoPng}
            alt="SunnySide Agency"
            className="cursor-pointer pb-10"
          />
        </div>

        <div className="flex justify-center items-center gap-14 pb-18 font-barlow">
          <a
            href=""
            className="text-darkcyan-200 font-semibold border-b-2 border-transparent hover:border-darkcyan-200"
          >
            About
          </a>
          <a
            href=""
            className="text-darkcyan-200 font-semibold border-b-2 border-transparent hover:border-darkcyan-200"
          >
            Services
          </a>
          <a
            href=""
            className="text-darkcyan-200 font-semibold border-b-2 border-transparent hover:border-darkcyan-200"
          >
            Projects
          </a>
        </div>

        <div className="flex justify-center items-center gap-8">
          <img src={FacebookPng} alt="" />
          <img src={InstagramPng} alt="" />
          <img src={TwitterPng} alt="" />
          <img src={PinterestPng} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
