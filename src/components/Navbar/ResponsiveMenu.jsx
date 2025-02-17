import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <div className="flex justify-end items-end md:hidden fixed right-0">
          <h2 className="sr-only">Warding off HTML Report Errors</h2>

          <div className=" py-9 mt-3 mr-6 rounded-xl justify-end items-center text-center flex flex-col gap-8 w-[250px] bg-white">
            <a
              href=""
              className="text-grayishblue font-semibold border-b-2 border-transparent hover:border-grayishblue"
            >
              About
            </a>
            <a
              href=""
              className="text-grayishblue font-semibold border-b-2 border-transparent hover:border-grayishblue"
            >
              Services
            </a>
            <a
              href=""
              className="text-grayishblue font-semibold border-b-2 border-transparent hover:border-grayishblue"
            >
              Projects
            </a>
            <a
              href=""
              className="bg-yellow font-fraunces text-sm py-3 px-6 uppercase rounded-[30px] font-bold text-darkblue-400 hover:bg-grayishblue"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
