import React, { useEffect } from "react";
import HeaderImage from "../assect/Images/header image.webp";
import { Link } from "react-router-dom";

function Header() {
  useEffect(() => {
    document.getElementById("hamburger").onclick = function toggleMenu() {
      const navToggle = document.getElementsByClassName("toggle");
      for (let i = 0; i < navToggle.length; i++) {
        navToggle.item(i).classList.toggle("hidden");
      }
    };
  }, []);

  return (
    <>
      <header className="bg-gray-100 p-5 sticky top-0 z-50">
        <nav className="flex flex-wrap items-end justify-between lg:px-20">
          <div>
            <img
              src={HeaderImage}
              className="h-[40px] object-cover object-fit"
              alt="header-image"
            />
          </div>
          <div className="flex lg:hidden">
            <button id="hamburger">
              <img
                className="toggle block"
                src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                width="40"
                height="40"
              />
              <img
                className="toggle hidden"
                src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                width="40"
                height="40"
              />
            </button>
          </div>
          <div className="toggle w-full lg:w-auto lg:flex row-gap-25 text-bold mt-5 md:mt-0 md:border-none hidden">
            <a className="block text-[18px] text-gray-600 px-3 py-3 text-center">
              About
            </a>
            <a
              href="#"
              className="block text-[18px] text-gray-600 px-3 py-3 text-center"
            >
              Featured
            </a>
            <a
              href="#"
              className="block text-gray-600 px-3 py-3 text-[17px] text-center"
            >
              Properties
            </a>
            <a
              href="#"
              className="block text-gray-600 px-3 py-3 text-[17px] text-center"
            >
              Testimonials
            </a>
            <a
              href="#"
              className="block text-gray-600 px-3 py-3 text-[17px] text-center"
            >
              News
            </a>
            <button className="sm:text-center text-center bg-red-500 text-[17px] px-8 py-2 rounded-lg text-white font-semibold border">
              Contact us
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
