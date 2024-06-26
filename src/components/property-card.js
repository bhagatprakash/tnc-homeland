import React from "react";
import { LuScale3D } from "react-icons/lu";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const PropertyCard = ({
  sqft,
  beds,
  baths,
  title,
  description,
  price,
  image,
  stats,
}) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-1000">
      <div className="h-[225px] overflow-hidden relative">
        <img
          src={image}
          alt="card"
          className="w-full h-full object-cover object-center hover:scale-125 duration-1000"
        />
        <span className="absolute top-0 left-0 bg-red-500 mt-3 w-[55px] p-2 text-[15px] font-semibold text-white">
          {stats}
        </span>
        <div className="absolute bottom-0 left-0 mb-3 ml-3">
          <span className=" text-yellow-500 hover:bg-red-500 hover:text-white text-2xl sm:text-base md:text-lg">
            <FaLocationDot />
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className=" border-gray-300 my-4 ">
          <div className="flex flex-wrap  lg:justify-start ">
            <span className="py-1 text-[12px] px-5  mb-2 flex items-center">
              <LuScale3D className="mr-2 text-red-500 text-xl" />

              <span className="font-semibold text-gray-600"> {sqft} SqFt </span>
            </span>
            <span className="py-2 text-[12px] px-5 mb-2 flex items-center">
              <FaBed className="mr-2 text-red-500 text-xl" />
              <span className="font-semibold text-gray-600">{beds} Beds</span>
            </span>
            <span className="py-1 text-[12px] px-5  mb-2 flex items-center">
              <FaBath className="mr-2 text-red-500 text-xl" />
              <span className="font-semibold text-gray-600">{baths} Baths</span>
            </span>
          </div>
        </div>
        <div className="my-3 text-[20px] mx-4 font-semibold tracking-tight text-gray-900 dark:text-white text-left">
          {title}
        </div>

        <div className="mb-3 text-[15px] mx-4 text-gray-500 dark:text-gray-400 text-left">
          {description}
        </div>

        <div className="flex justify-between items-center p-4">
          <div className="my-2 text-[20px] text-red-500 font-bold dark:text-gray-400">
            ${price}
          </div>
          <button className="bg-yellow-500 text-white font-semibold py-2 px-4 sm:py-2 sm:px-4 md:py-3 md:px-5 lg:py-2 lg:px-5">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
