import React from "react";
import LogoPng from "../../assets/logo.svg";
import { LuMenu } from "react-icons/lu";
import ResponsiveMenu from "./ResponsiveMenu";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <section>
      <nav>
        <div className="flex justify-between items-center py-6 px-4 md:px-20">
          <div>
            <img
              src={LogoPng}
              alt="SunnySide Agency"
              className="cursor-pointer"
            />
          </div>

          <div className="flex justify-between items-center">
            <ul className="gap-10 text-white font-barlow font-medium justify-between items-center text-base hidden md:flex">
              <a href="#">
                <li className="border-b-2 border-transparent hover:border-white">
                  About
                </li>
              </a>
              <a href="#">
                <li className="border-b-2 border-transparent hover:border-white">
                  Services
                </li>
              </a>
              <a href="#">
                <li className="border-b-2 border-transparent hover:border-white">
                  Projects
                </li>
              </a>
              <a href="#">
                <li className="bg-white font-fraunces text-sm py-3 px-6 uppercase rounded-[30px] font-bold text-darkblue-400 hover:bg-active hover:text-white">
                  Contact
                </li>
              </a>
            </ul>

            <div
              className="cursor-pointer md:hidden"
              onClick={() => setOpen(!open)}
            >
              <LuMenu className="text-2xl text-white" />
            </div>
          </div>
        </div>
      </nav>

      <ResponsiveMenu open={open} />
    </section>
  );
};

export default NavBar;
