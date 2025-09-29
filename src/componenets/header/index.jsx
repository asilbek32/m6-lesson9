
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const data = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex items-center justify-between px-10 h-[70px] text-white max-w-[1280px] mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide hover:scale-105 transition-transform">
          <Link to={"/"}>LOGO</Link>
        </div>

        {/* Navigation */}
        <div className="flex gap-8 text-lg font-medium">
          <Link
            to={"/"}
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        {/* User / Login */}
        <div>
          {data ? (
            <Link
              to={"/user"}
              className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 hover:text-black transition-all duration-200"
            >
              {data.name}
            </Link>
          ) : (
            <Link
              to={"/login"}
              className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 hover:text-black transition-all duration-200"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;

