import React, { useEffect } from "react";
import HeaderImage from "../assect/Images/header image.webp";
import ToggleButton from "./toggleButton";

function Header() {
  useEffect(() => {
    document.getElementById("hamburger").onclick = function toggleMenu() {
      const navToggle = document.getElementsByClassName("toggle");
      for (let i = 0; i < navToggle.length; i++) {
        navToggle.item(i).classList.toggle("hidden");
      }
    };
  }, []);

  const toggleDarkMode = () => {
    let htmlClasses = document.querySelector("html").classList;

    if (localStorage.theme === "dark") {
      htmlClasses.remove("dark");
      localStorage.removeItem("theme");
    } else {
      htmlClasses.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <>
      <header className=" dark:bg-gulf-blue  bg-gray-100 p-5 sticky top-0 z-50">
        <nav className="flex flex-wrap items-end justify-between lg:px-20">
          <div>
            <img
              src={HeaderImage}
              className="h-[40px] object-cover object-fit"
              alt="header-image"
            />
          </div>
          <div className="flex lg:hidden dark:bg-white">
            <button id="hamburger">
              <img
                className="toggle block "
                src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                width="40"
                height="40"
              />
              <img
                className="toggle hidden "
                src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                width="40"
                height="40"
              />
            </button>
          </div>
          <div className="toggle w-full lg:w-auto lg:flex row-gap-25 text-bold mt-5 md:mt-0 md:border-none hidden">
            <ToggleButton onClick={toggleDarkMode} />
            {[
              {
                text: "About",
                href: "#",
                additionalClasses: "dark:text-white text-[18px]",
              },
              {
                text: "Featured",
                href: "#",
                additionalClasses: "text-[18px] dark:text-white",
              },
              {
                text: "Properties",
                href: "#",
                additionalClasses: "text-[17px] dark:text-white",
              },
              {
                text: "Testimonials",
                href: "#",
                additionalClasses: "text-[17px] dark:text-white",
              },
              {
                text: "News",
                href: "#",
                additionalClasses: "text-[17px] dark:text-white",
              },
            ].map(({ text, href, additionalClasses }, index) => (
              <a
                key={index}
                href={href}
                className={`block text-gray-600 px-3 py-3 text-center ${additionalClasses}`}
              >
                {text}
              </a>
            ))}
            <button className="sm:text-center text-center !bg-red-500 text-[17px] px-8 py-2 rounded-lg text-white font-semibold border">
              Contact us
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
