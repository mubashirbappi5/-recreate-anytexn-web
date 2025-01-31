import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <nav className="relative px-5 dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:grid lg:items-center lg:grid-cols-6">
            <div className="flex lg:col-span-2 items-center justify-between">
              <h2 className="flex gap-2 items-center">
                <span className="text-lg font-semibold">ANYTECH</span>
              </h2>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
                  aria-label="toggle menu"
                >
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`absolute inset-x-0 z-20 px-6 py-4 transition-all duration-300 ease-in-out bg-blue-400 dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between lg:col-span-4  ${
                isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
              }`}
            >
              <div className="flex flex-col -mx-6 md:flex-row  md:items-center  md:gap-10 ">
                
                {/* Dropdown Menu */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Link
                    className="px-6 py-2 mt-2 text-gray-700 dark:text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-between w-11/12 mx-auto  lg:w-auto gap-4"
                  >
                    Solutions
                    <span>{isDropdownOpen ? <IoIosArrowUp />: <IoIosArrowDown />}</span>
                  </Link>

                  {/* Dropdown Content (Visible on hover) */}
                  {isDropdownOpen && (
                    <ul className="md:absolute md:left-0 md:top-12 md:bg-white text-gray-700 md:rounded-md md:shadow-md p-2 md:w-44 w-full z-50 ml-10">
                      <li>
                        <Link to="/anycaas" className="block px-4 py-2 hover:bg-gray-200">
                          AnyCaaS
                        </Link>
                      </li>
                      <li>
                        <Link to="/anybaas" className="block px-4 py-2 hover:bg-gray-200">
                          AnyBaaS
                        </Link>
                      </li>
                      <li>
                        <Link to="/anypaas" className="block px-4 py-2 hover:bg-gray-200">
                          AnyPaaS
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>

                {/* Other Links with Adjusted Margin */}
                <Link
                  to="/appointment"
                  className={`px-6  py-2 w-11/12 md:w-full mx-auto lg:mt-0 text-gray-700 dark:text-gray-200 transition-colors duration-300  transform rounded-md hover:bg-gray-100 dark:hover:bg-gray-700`}
                >
                Services
                </Link>
                <Link
                  to="/about"
                  className={`px-6 md:px-0 py-2 w-11/12 md:w-full mx-auto lg:mt-0 text-gray-700 dark:text-gray-200 transition-colors duration-300 transform rounded-md hover:bg-gray-100 dark:hover:bg-gray-700`}
                >
                About
                </Link>
                <button
                  to="/about"
                  className={`px-6 md:px-0 py-2 w-11/12 md:w-full mx-auto lg:mt-0 text-gray-700 dark:text-gray-200 transition-colors duration-300 transform rounded-md hover:bg-gray-100 dark:hover:bg-gray-700`}
                >
               <div className="dropdown dropdown-center">
  <div tabIndex={0} role="button" className="btn m-1">Click  ⬇️</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
                </button>
              </div>

              {/* Sign In Button */}
              <div className="flex items-center mt-4 lg:mt-0 gap-4">
                <button className=" btn btn-outline p-3 rounded-lg ">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
