import React from "react";
import headerImage from "../assect/Images/header image.webp";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gulf-blue">
        <div className="flex flex-col max-w-[1320px] mx-auto sm:flex-row">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center md:text-left my-10 px-5 gap-6">
            <div className="cursor-pointer text-white p-4">
              <div>
                <img
                  src={headerImage}
                  className="h-[40px]"
                  alt="header-image"
                />
              </div>
              <p className="text-[17px] my-3 text-gray-600 text-center md:text-left dark:text-gray-200 ">
                Discover your dream home with TNC Homeland Real Estate.
              </p>
              <div className="flex flex-col md:flex-row md:items-center my-3 text-gray-600 dark:text-gray-200 ">
                <FaHome className="mr-2 text-3xl" />
                <span>4XX7 Washington Ave. Manchester, Kentucky 394XX.</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center my-3 text-gray-600 dark:text-gray-200 ">
                <FaPhoneAlt className="mr-2" />
                <span>(406) 55X-01XX</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center my-3 text-gray-600 dark:text-gray-200 ">
                <CgMail className="mr-2 text-2xl" />
                <span>tnchomel@gmail.com</span>
              </div>
            </div>
            <div className="cursor-pointer">
              <h1 className="text-[20px] font-semibold my-5 dark:text-white">
                Useful Link
              </h1>
              <p className="text-[17px] text-gray-600 dark:text-gray-200 py-1">
                Feature
              </p>
              <p className="text-[17px] text-gray-600  dark:text-gray-200 py-1">
                About Us
              </p>
              <p className="text-[17px] text-gray-600  dark:text-gray-200 py-1">
                FAQ
              </p>
              <p className="text-[17px] text-gray-600  dark:text-gray-200 py-1">
                License
              </p>
              <p className="text-[17px] text-gray-600  dark:text-gray-200 py-1">
                Style-Guide
              </p>
              <p className="text-[17px] text-gray-600 dark:text-gray-200  py-1">
                Change-Log
              </p>
            </div>
            <div className="cursor-pointer">
              <h1 className="text-[20px] font-semibold my-5 dark:text-white">
                Main Menu
              </h1>
              <p className="text-[17px] text-gray-600 py-1 dark:text-gray-200 ">
                Property For Sale
              </p>
              <p className="text-[17px] text-gray-600 py-1 dark:text-gray-200 ">
                Property For Rent
              </p>
              <p className="text-[17px] text-gray-600  dark:text-gray-200 py-1">
                Featured
              </p>
              <p className="text-[17px] text-gray-600  dark:text-gray-200 py-1">
                News Listing
              </p>
              <p className="text-[17px] text-gray-600  dark:text-gray-200 py-1">
                Testimonial
              </p>
              <p className="text-[17px] text-gray-600 dark:text-gray-200  py-1">
                Blog
              </p>
            </div>
            <div className="cursor-pointer">
              <h1 className="text-[20px] font-semibold my-5 dark:text-white">
                Newsletter
              </h1>
              <p className="text-[17px] py-1 text-gray-600 dark:text-gray-200 ">
                Stay informed about the latest real estate trends and offerings.
                Subscribe to the TNC Homeland newsletter for valuable insights.
              </p>
              <form className="flex flex-col md:flex-row items-center my-3 md:space-x-1 ">
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="block w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-40"
                />
                <div className="w-full md:w-auto mt-2 md:mt-0">
                  <button
                    type="submit"
                    className="px-6 py-3 w-full md:w-auto text-white font-semibold text-[18px] rounded bg-yellow-500 duration-1000 hover:bg-blue-800 hover:text-white "
                  >
                    <FaLocationArrow />
                  </button>
                </div>
              </form>
              <div className="flex flex-wrap justify-center lg:justify-start  gap-3 my-3">
                <span className="p-1.5 border rounded-full bg-blue-900 text-white hover:bg-red-500 hover:text-white text-sm sm:text-base md:text-lg">
                  <FaFacebook />
                </span>
                <span className="p-1.5 border rounded-full shadow bg-white-900 text-red-500 hover:bg-red-500 hover:text-white text-sm sm:text-base md:text-lg">
                  <FaYoutube />
                </span>
                <span className="p-1.5 border rounded-full shadow  text-blue-500 hover:bg-red-500 hover:text-white text-sm sm:text-base md:text-lg">
                  <FaTwitter />
                </span>
                <span className="p-1.5 border rounded-full shadow  text-red-500 hover:bg-red-500 hover:text-white text-sm sm:text-base md:text-lg">
                  <FaInstagram />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="h-[1px] bg-gray-500 border-0 w-[100%] max-w-[1250px]" />
        </div>
        <div className="flex flex-col md:flex-row justify-center   ">
          <h1 className="text-[16px] p-5 md:mx-20 text-gray-600 dark:text-white">
            Copyright © 2024 TNC Resida | Designed by prakashkumar - Powered by
            Simbanic
          </h1>
          <p className="text-[16px] p-5 md:mx-20 text-gray-600 dark:text-white">
            All Rights Reserved | Licensing
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
