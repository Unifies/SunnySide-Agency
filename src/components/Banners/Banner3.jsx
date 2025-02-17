import { section } from "framer-motion/client";
import React from "react";
import GraphicPng from "../../assets/desktop/image-graphic-design.jpg";
import PhotographyPng from "../../assets/desktop/image-photography.jpg";

const Banner3 = () => {
  const backgroundImage = {
    backgroundImage: `url(${GraphicPng})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const backgroundImage2 = {
    backgroundImage: `url(${PhotographyPng})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section>
      <div className="md:grid grid-cols-2 grid-rows-1 items-center">
        <div
          style={backgroundImage}
          className="col-start-1 col-end-2 row-start-1 row-end-2 pt-[400px] pb-[50px]"
        >
          <div className="w-[80%] md:w-[58%] m-auto text-darkcyan-100">
            <h1 className="font-extrabold text-3xl py-6 font-fraunces text-center">
              Graphic design
            </h1>
            <p className="font-barlow font-bold py-3 text-[1rem] text-center">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>
        <div
          style={backgroundImage2}
          className="col-start-2 col-end-3 row-start-1 row-end-2 pt-[400px] pb-[50px] h-[100%]"
        >
          <div className="w-[80%] md:w-[58%] m-auto text-darkblue-100">
            <h1 className="font-extrabold text-3xl py-6 font-fraunces  text-center">
              Photography
            </h1>
            <p className="font-barlow font-bold py-3 text-[1rem] text-center">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;
