import React from "react";
import about from "../../assect/Images/cardtwo-2.png";
import { LuScale3D } from "react-icons/lu";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa6";

function FetureSection() {
  return (
    <div className="max-w-[1320px] mx-auto lg:my-[100px] ">
      <div className="bg-accent/20">
        <div className="max-w-[1320px] relative grid grid-cols-1 sm:text-center lg:grid-cols-2">
          <div className="text-left p-3 my-10 lg:my-1" data-aos="fade-right">
            <h2 className="text-[16px] text-yellow-500 font-semibold">
              FEATURED OF MONTH
            </h2>
            <p className="text-[30px] sm:text-[40px] font-semibold">
              Stunning Three-Bedroom
            </p>
            <h2 className="text-[30px] sm:text-[40px] font-semibold">
              Home with Spacious
            </h2>
            <h3 className="text-[30px] sm:text-[40px] font-semibold">
              Backyard
            </h3>
            <p className="  text-[15px] sm:text-[18px] my-5">
              Explore Our Handpicked Selection of Premier Properties Across
              Various Budgets and Locations. Whether you're looking for a cozy
              apartment or a luxurious estate, TNC Real Estate has something for
              everyone.
            </p>
            <div className=" border-gray-300">
              <div className="flex flex-wrap  lg:justify-start space-x-2">
                <span className="py-1 text-[14px] px-5 bg-gray-200 mb-2 flex items-center">
                  <LuScale3D className="mr-2 text-red-500 text-xl" />
                  <span className="font-semibold text-gray-600">960 SqFt</span>
                </span>
                <span className="py-2 text-[14px] px-5 bg-gray-200 mb-2 flex items-center">
                  <FaBed className="mr-2 text-red-500 text-xl" />
                  <span className="font-semibold text-gray-600">3 Beds</span>
                </span>
                <span className="py-1 text-[14px] px-5 bg-gray-200 mb-2 flex items-center">
                  <FaBath className="mr-2 text-red-500 text-xl" />
                  <span className="font-semibold text-gray-600">3 Baths</span>
                </span>
              </div>
            </div>

            <button className="bg-yellow-500 font-semibold text-white px-4 py-1 my-5 md:px-6 md:py-3 lg:px-8 lg:py-4 hover:bg-yellow-600 transition duration-300">
              Contact for Buying
            </button>
          </div>

          <div
            className="relative flex items-center justify-center p-2 rounded-lg shadow-lg w-full h-[370px] lg:w-[500px] ml-0 lg:ml-10"
            data-aos="fade-left"
          >
            <img
              src={about}
              alt="properties"
              className=" h-full  object-cover object-center"
            />
            <span className="absolute bottom-2 lg:left-10  left-22 bg-white p-3 rounded-xl">
              <h1 className="text-4xl sm:text-5xl text-red-500 font-bold">5</h1>
              <p className="text-[16px] sm:text-[18px] text-gray-500">
                Global Top Awards
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FetureSection;
