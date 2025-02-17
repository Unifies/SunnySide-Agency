import { section } from "framer-motion/client";
import React from "react";
import MilkBootlesPng from "../../assets/desktop/image-gallery-milkbottles.jpg";
import MobileMilkBootlesPng from "../../assets/mobile/image-gallery-milkbottles.jpg";
import OrangePng from "../../assets/desktop/image-gallery-orange.jpg";
import MobileOrangePng from "../../assets/mobile/image-gallery-orange.jpg";
import ConePng from "../../assets/desktop/image-gallery-cone.jpg";
import MobileConePng from "../../assets/mobile/image-gallery-cone.jpg";
import SugarCubesPng from "../../assets/desktop/image-gallery-sugar-cubes.jpg";
import MobileSugarCubesPng from "../../assets/mobile/image-gallery-sugar-cubes.jpg";

const FooterBanner = () => {
  return (
    <section>
      <div className="flex flex-wrap md:flex-nowrap gap-0">
        <picture className="w-[50%] md:w-[100%]">
          <source srcSet={MilkBootlesPng} media="(min-width: 48rem)" />
          <img
            src={MobileMilkBootlesPng}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </picture>

        <picture className="w-[50%] md:w-[100%]">
          <source srcSet={OrangePng} media="(min-width: 48rem)" />
          <img src={MobileOrangePng} alt="" loading="lazy" decoding="async" />
        </picture>

        <picture className="w-[50%] md:w-[100%]">
          <source srcSet={ConePng} media="(min-width: 48rem)" />
          <img src={MobileConePng} alt="" loading="lazy" decoding="async" />
        </picture>

        <picture className="w-[50%] md:w-[100%]">
          <source srcSet={SugarCubesPng} media="(min-width: 48rem)" />
          <img
            src={MobileSugarCubesPng}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
    </section>
  );
};

export default FooterBanner;
