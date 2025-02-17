import React from "react";
import ArrowDownPng from "../../assets/icon-arrow-down.svg";
import NavBar from "../Navbar/NavBar";

const Hero = () => {
  return (
    <header className="h-[35rem] md:h-[45rem] bg-[url('/assets/mobile/image-header.jpg')] md:bg-[url('/assets/desktop/image-header.jpg')] bg-no-repeat bg-center bg-cover md:bg-no-repeat md:bg-center]">
      <NavBar />

      <section className="pt-15 md:pt-25 flex justify-center items-center px-4 md:px-20">
        <div className="flex flex-col gap-20 justify-center items-center">
          <h1 className="text-4xl font-fraunces text-white font-extrabold uppercase tracking-[0.4rem] text-center">
            We are Creatives
          </h1>
          <img src={ArrowDownPng} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Hero;
