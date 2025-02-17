import { section } from "framer-motion/client";
import React from "react";
import TransformPng from "../../assets/desktop/image-transform.jpg";
import MobileTransformPng from "../../assets/mobile/image-transform.jpg";

const Banner1 = () => {
  return (
    <section>
      <div className="md:grid grid-cols-2 grid-rows-1 items-center">
        <div className="col-start-2 col-end-3 row-start-1 row-end-2">
          <picture>
            <source srcSet={TransformPng} media="(min-width: 48rem)" />
            <img
              src={MobileTransformPng}
              alt="Tranform your brand"
              width="100%"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>

        <div className="w-[90%] md:w-[80%] lg:w-[62%] m-auto col-start-1 col-end-2 py-12 row-start-1 row-end-2 text-center md:text-left">
          <h1 className="font-extrabold text-3xl pb-6 font-fraunces text-darkblue-400">
            Transform your brand
          </h1>
          <p className="font-barlow font-bold py-3 text-darkblue-200/70 text-[1rem]">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <p className="pt-3 w-fit m-auto md:m-0 pl-1 text-base uppercase font-fraunces font-extrabold text-darkblue-400 relative before:absolute before:bottom-0 before:left-0 before:bg-yellow/20 before:h-2 before:-z-1 before:rounded-xl before:w-32">
            Learn more
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner1;
