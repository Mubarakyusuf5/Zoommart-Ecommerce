import React, { useState } from "react";
import { Link } from "react-router-dom";
import Headroom from "react-headroom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faQuestionCircle,
  faAngleDown,
  faSearch,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const categories = [
    "Electronics",
    "Fashion",
    "Home & Garden",
    "Sports",
    "Toys",
    "Books",
  ];
  const role = "admin";

  return (
    <div>
      {/* Header Strip */}
      {/* <div className="px-10">
        <Link
          to="/sell-on-zoommart"
          className="flex gap-3 items-center w-48 text-gray-800 py-1 text-sm hover:text-blue-600 transition duration-300"
        >
          <FontAwesomeIcon icon={faUser} />
          <span>Sell on Zoommart</span>
        </Link>
      </div> */}

      <Headroom>
        {/* Main Navbar */}
        <nav className="bg-white px-10 py-3 flex justify-between border-b items-center gap-4">
          <div className="cursor-pointer block sm:hidden"><FontAwesomeIcon icon={faBars} size="xl" /></div>
          {/* Brand Logo */}
          <div className="text-3xl font-extrabold text-blue-600">
            <Link to="/" className="hover:text-blue-500">
              Zoommart
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex flex-1 mx-6">
            <div className="flex rounded overflow-hidden w-full max-w-md bg-gray-100">
              <input
                type="text"
                placeholder="Search for products..."
                className="py-1.5 px-4 outline-none border focus:border-blue-600 w-full text-gray-700"
              />
              <button className="py-1.5 px-3 text-white bg-blue-600 hover:bg-blue-700">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6 text-gray-800">
            {/* Dashboard Link for either admin or seller */}
            {role === "admin" ? (
              <Link
                to="/admin/dashboard"
                className="py-1.5 px-4 bg-blue-600 text-white text-base duration-300 hover:bg-blue-500 rounded"
              >
                Dashboard
              </Link>
            ) : role === "seller" ? (
              <Link
                to="/seller/dashboard"
                className="py-1.5 px-4 bg-blue-600 text-white text-base duration-300 hover:bg-blue-500 rounded"
              >
                Dashboard
              </Link>
            ) : (
              ""
            )}

            {/* User Account */}
            <Link
              to="/login"
              className="text-base flex gap-2 items-center hover:text-blue-600 py-1.5 px-2 rounded transition duration-300 cursor-pointer"
            >
              <FontAwesomeIcon icon={faUser} className="text-xl" />
              <span className="sm-hidden block">Login / Register</span>
              <FontAwesomeIcon icon={faAngleDown} className="text-sm sm-hidden block" />
            </Link>

            {/* Help Section */}
            <div className="text-base flex gap-2 items-center hover:text-blue-600 py-1.5 px-2 rounded transition duration-300 cursor-pointer">
              <FontAwesomeIcon icon={faQuestionCircle} className="text-xl" />
              <span className="sm-hidden block">Help</span>
              <FontAwesomeIcon icon={faAngleDown} className="text-sm sm-hidden block" />
            </div>

            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative text-gray-800 hover:text-blue-600"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
              <span className="absolute -top-2 left-5 bg-red-500 text-xs text-white rounded-full px-1.5 py-0.5">
                0
              </span>
            </Link>
          </div>
        </nav>

        {/* Categories Section */}
        <div className="h-10 px-10 bg-white text-gray-800 border-b flex gap-1 items-center">
          <div
            className="flex gap-3 items-center py-2 px-3 text-lg w-60 cursor-pointer hover:bg-gray-200 hover:text-gray-800 transition duration-300 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FontAwesomeIcon icon={faBars} />
            <span className="text-base">All Categories</span>

            {/* Dropdown Menu */}
            {isHovered && (
              <div className="bg-white w-60 py-2 absolute left-0 top-10 shadow-lg text-gray-800 text-base overflow-y-auto border-gray-200">
                <ul>
                  {categories.map((category, index) => (
                    <li
                      key={index}
                      className="hover:bg-gray-200 py-1.5 px-3 text-sm"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <ul className="flex">
            {/* <li className="px-5 cursor-pointer py-2 transition duration-300 hover:bg-gray-200 hover:text-gray-800">
              <Link to="sell-on-zoommart" className="block"><FontAwesomeIcon icon={faUser} />
              <span>Sell on Zoommart</span></Link>
            </li> */}
            
          </ul>
        </div>
      </Headroom>
    </div>
  );
};
