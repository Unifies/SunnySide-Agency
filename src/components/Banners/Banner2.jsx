import React from "react";
import StandPng from "../../assets/desktop/image-stand-out.jpg";
import MobileStandPng from "../../assets/mobile/image-stand-out.jpg";

const Banner2 = () => {
  return (
    <section>
      <div className="md:grid grid-cols-2 grid-rows-1 items-center">
        <div className="h-[100%] col-start-1 col-end-2 row-start-1 row-end-2">
          <picture>
            <source srcSet={StandPng} media="(min-width: 48rem)" />
            <img
              src={MobileStandPng}
              alt="Stand Out"
              loading="lazy"
              decoding="async"
              className="w-full h-full"
            />
          </picture>
        </div>

        <div className="w-[90%] md:w-[80%] lg:w-[62%] m-auto col-start-2 col-end-3 py-12 row-start-1 row-end-2 text-center md:text-left">
          <h1 className="font-extrabold text-3xl pb-6 font-fraunces text-darkblue-400">
            Stand out to the right audience
          </h1>
          <p className="font-barlow font-bold py-3 text-darkblue-200/70 text-[1rem]">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <p className="pt-3 w-fit m-auto md:m-0 pl-1 text-base uppercase font-fraunces font-extrabold text-darkblue-400 relative before:absolute before:bottom-0 before:left-0 before:bg-softred/20 before:h-2 before:-z-1 before:rounded-xl before:w-32">
            Learn more
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
