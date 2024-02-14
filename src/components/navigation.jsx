import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// import homeLogo from "../assets/image/logo.png";
import { useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { useContext } from "react";
import { Transition } from "@headlessui/react";
import useAuth from "../hooks/useAuth";

const Navigation = () => {
  const { user } = useAuth();

  const [isClicked, setIsClicked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  function handlClick() {
    setIsClicked(!isClicked);
  }
  const { isMobileMenuOpen, handleToggleMenu } = useContext(AppContext);

  useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowWidth(this.innerWidth);
    });
  });

  return (
    <div className="bg-gradient-to-r from-[#be62be] from-25% to-[#7b45d3]">
      <nav className="py-5 px-8 md:px-16 text-white flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/">
          <h1 className="text-lg">HushHive</h1>
        </Link>

        {windowWidth <= 640 ? (
          <div className="w-5 h-5">
            <Transition
              show={!isMobileMenuOpen}
              enter="transition-opacity duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <a className="absolute" onClick={handleToggleMenu}>
                <FaBars className="hover:-translate-x-3 sm:hidden " />
              </a>
            </Transition>

            <Transition
              show={isMobileMenuOpen}
              enter="transition-opacity duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <a className="absolute" onClick={handleToggleMenu}>
                <FaTimes className="hover:-translate-x-3 sm:hidden transform transition-opacity ease-in duration-1000" />
              </a>
            </Transition>
          </div>
        ) : (
          <ul className="sm:flex  hidden gap-12 text-sm font-bold relative">
            <li>
              <Link to="/">HOME</Link>
            </li>
            {!user && (
              <li onClick={handlClick}>
                <a href="#">GET STARTED</a>

                <div
                  className={`bg-white ${
                    !isClicked ? "hidden" : ""
                  } text-black absolute top-14 right-32`}
                >
                  <ul>
                    <li className="hover:bg-gradient-to-r from-[#be62be] from-25% to-[#7b45d3] border-b-2 py-4 ps-10 pe-24 hover:text-white">
                      <Link to="/login">LOG IN</Link>
                    </li>
                    <li className="py-4 hover:bg-gradient-to-r from-[#be62be] from-25% to-[#7b45d3] ps-10 pe-24 hover:text-white">
                      <Link to="/register">REGISTER</Link>
                    </li>
                  </ul>
                </div>
              </li>
            )}
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        )}
      </nav>

      {isMobileMenuOpen && (
        <ul className="flex flex-col gap-2 text-sm px-16 text-white">
          <li className=" border-b border-gray-200 pb-2">
            <Link to="/">HOME</Link>
          </li>
          <li onClick={handlClick} className="pb-2 border-b border-grey-100">
            <a href="#">GET STARTED</a>

            <div
              className={`bg-white ps-2 text-black ${
                !isClicked ? "hidden" : ""
              } text-black top-14 right-32`}
            >
              <ul className="flex flex-col gap-2 text-sm">
                <li className="border-b border-grey-100 pb-2">
                  <Link to="/login">LOG IN</Link>
                </li>
                <li className="">
                  <Link to="/register">REGISTER</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navigation;
