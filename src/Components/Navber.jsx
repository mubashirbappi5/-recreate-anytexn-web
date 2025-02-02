import { MdLanguage } from "react-icons/md";
import navlogo from "../../public/navlogo.svg";
import navbarlogoBlue from "../../public/navbarLogoBlue.svg";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import { useEffect } from "react";
import clsx from "clsx";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuBar, setMenuBar] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={clsx(
        "w-full fixed top-0 left-0 z-50 px-6 py-4 md:px-12 transition-all overflow-hidden",
        scrolling ? "bg-white shadow-md" : "bg-transparent "
      )}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <div>
            {scrolling ? (
              <>
                <img className="w-32" src={navbarlogoBlue} alt="Logo" />
              </>
            ) : (
              <>
                <img className="w-32" src={navlogo} alt="Logo" />
              </>
            )}
          </div>
        </Link>

        {/* Center Items - Desktop */}
        <div className="hidden lg:flex gap-10 items-center">
          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className={` m-1 flex items-center ${
                scrolling ? "text-blue-500" : "text-white"
              }`}
            >
              Solutions <FiChevronDown className="text-lg" />
            </div>
            <ul className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow-sm">
              <li className="border-b border-b-gray-100">
                <a>AnyCaaS</a>
              </li>
              <li className="border-b border-b-gray-100">
                <a>AnyCaaS</a>
              </li>
              <li className="border-b border-b-gray-100">
                <a>AnyCaaS</a>
              </li>
            </ul>
          </div>
          <Link to="/service">
            <span className={`${scrolling ? "text-blue-500" : "text-white"}`}>
              Service
            </span>
          </Link>
          <Link to="/about">
            <span className={`${scrolling ? "text-blue-500" : "text-white"}`}>
              About Us
            </span>
          </Link>
          <div className="dropdown dropdown-hover z-20">
            <button
              className={`flex items-center gap-2 border px-4 py-2 rounded-full ${
                scrolling
                  ? "border-blue text-blue-500 "
                  : " border-white text-white"
              }`}
            >
              <MdLanguage className="text-xl" />
              <span className={`${scrolling ? "text-blue-500" : "text-white"}`}>
                EN
              </span>
              <FiChevronDown className="text-lg" />
            </button>
            <ul className=" dropdown-content menu bg-white text-blue-500 rounded-md shadow-md w-32 p-2">
              <li>
                <a>Hindi</a>
              </li>
              <li>
                <a>Arabic</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Us Button - Desktop */}
        <button
          className={`hidden lg:flex items-center gap-2 font-semibold border  px-6 py-2  transition-all hover:bg-white hover:text-blue-500 ${
            scrolling ? "bg-orange-500 text-white" : "border-white text-white"
          }`}
        >
          Contact Us <FiChevronRight />
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuBar(true)}
          className={`lg:hidden  text-3xl  cursor-pointer ${
            scrolling ? "text-blue-500" : "text-white"
          }`}
        >
          <IoMenu />
        </button>
      </div>

      {/* Sidebar Menu for Mobile */}
      <div
        className={clsx(
          "fixed h-full w-screen bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all z-50",
          menuBar && "translate-x-0"
        )}
      >
        <section className="text-white bg-blue-500 flex flex-col absolute left-0 top-0 h-screen p-8 gap-8 w-64">
          <IoClose
            onClick={() => setMenuBar(false)}
            className="text-4xl cursor-pointer"
          />
          <ul className="flex flex-col gap-6">
            <Link to="/">
              <li className="text-white hover:text-orange-500 font-semibold">
                Home
              </li>
            </Link>
            <li className="text-white hover:text-orange-500 font-semibold">
              Solutions
            </li>
            <Link to="/service">
              <li className="text-white hover:text-orange-500 font-semibold">
                Service
              </li>
            </Link>
            <li className="text-white hover:text-orange-500 font-semibold">
              About Us
            </li>
          </ul>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;