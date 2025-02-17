import { section } from "framer-motion/client";
import React from "react";
import EmilyPng from "../../assets/image-emily.jpg";
import ThomasPng from "../../assets/image-thomas.jpg";
import JenniePng from "../../assets/image-jennie.jpg";

const Testimonials = () => {
  return (
    <section>
      <div className="py-[90px] px-[7%] sm:px-[10%] flex flex-col justify-center items-center text-center">
        <h1 className="text-grayishblue font-fraunces uppercase font-extrabold text-xl pb-15 sm:tracking-[0.3rem]">
          Client Testimonials
        </h1>
        <div className="flex flex-col md:flex-row gap-7 justify-between items-start">
          <div className="flex justify-center items-center flex-col gap-12">
            <img src={EmilyPng} alt="" className="rounded-[50%] w-[70px] " />
            <p className="font-barlow text-darkblue-200 font-bold">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <div className="flex flex-col gap-2 justify-center items-center">
              <h1 className="text-darkblue-400 font-fraunces font-extrabold">
                Emily R.
              </h1>
              <p className="font-barlow text-grayishblue text-sm font-bold">
                Marketing Director
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center flex-col gap-12">
            <img src={ThomasPng} alt="" className="rounded-[50%] w-[70px] " />
            <p className="font-barlow text-darkblue-200 font-bold">
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <div className="flex flex-col gap-2 justify-center items-center">
              <h1 className="text-darkblue-400 font-fraunces font-extrabold">
                Thomas S.
              </h1>
              <p className="font-barlow text-grayishblue text-sm font-bold">
                Chief Operating Officer
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center flex-col gap-12">
            <img src={JenniePng} alt="" className="rounded-[50%] w-[70px] " />
            <p className="font-barlow text-darkblue-200 font-bold">
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <div className="flex flex-col gap-2 justify-center items-center">
              <h1 className="text-darkblue-400 font-fraunces font-extrabold">
                Jennie F.
              </h1>
              <p className="font-barlow text-grayishblue text-sm font-bold">
                Business Owner
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
