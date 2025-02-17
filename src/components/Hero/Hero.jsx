import React from "react";
import ArrowDownPng from "../../assets/icon-arrow-down.svg";

const Hero = () => {
  return (
    <section className="pt-10 flex justify-center items-center py-6 px-4 md:px-20">
      <div className="flex flex-col gap-7 justify-center items-center">
        <h1 className="text-4xl font-fraunces text-white font-extrabold uppercase tracking-wider pb-8 text-center">
          We are Creatives
        </h1>
        <img src={ArrowDownPng} alt="" />
      </div>
    </section>
  );
};

export default Hero;
