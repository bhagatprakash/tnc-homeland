import React from "react";
import { FetureData } from "../../assect/data/fetureData";
import { LuScale3D } from "react-icons/lu";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa6";

function PropertyListing() {
  return (
    <div className="max-w-[1320px] mx-auto relative">
      <div>
        <h3 className="text-[18px] text-yellow-500 font-semibold">
          PROPERTY LISTINGS FOR SALE
        </h3>
        <h1 className="md:text-[36px] text-[23px] font-semibold text-center">
          Discover Your Perfect Home - TNC
        </h1>
        <h1 className="md:text-[36px] text-[23px] font-semibold text-center">
          HomeLand Sales and Listings
        </h1>
      </div>
      <div className="bg-accent/20">
        <div className="max-w-[1320px] grid grid-cols-1 gap-[50px] content-center sm:text-center sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-12">
          {FetureData.map((card, index) => (
            <div
              key={index}
              className="my-6 bg-white shadow-lg w-full sm:w-auto transform transition-transform hover:scale-105 duration-1000"
            >
              <div className="h-[225px] overflow-hidden relative">
                <img
                  src={card.image}
                  alt="card"
                  className="w-full h-full object-cover object-center hover:scale-125 duration-1000"
                />

                <span className="absolute top-0 left-0 bg-red-500 mt-3 w-[55px] p-2 text-[15px] font-semibold text-white">
                  Sale
                </span>
              </div>

              <div className=" border-gray-300 my-4 ">
                <div className="flex flex-wrap justify-center lg:justify-start space-x-2">
                  <span className="py-1 text-[14px] px-5  mb-2 flex items-center">
                    <LuScale3D className="mr-2 text-red-500 text-xl" />
                    <span className="font-semibold text-gray-600">
                      {card.squre}
                    </span>
                  </span>
                  <span className="py-2 text-[14px] px-5 mb-2 flex items-center">
                    <FaBed className="mr-2 text-red-500 text-xl" />
                    <span className="font-semibold text-gray-600">
                      {card.bedrooms}
                    </span>
                  </span>
                  <span className="py-1 text-[14px] px-5  mb-2 flex items-center">
                    <FaBath className="mr-2 text-red-500 text-xl" />
                    <span className="font-semibold text-gray-600">
                      {card.bathrooms}
                    </span>
                  </span>
                </div>
              </div>

              <a href="#">
                <h5 className="my-3 text-[20px] mx-4 font-semibold tracking-tight text-gray-900 dark:text-white text-left">
                  {card.type}
                </h5>
              </a>

              <p className="mb-3 text-[15px] mx-4 text-gray-500 dark:text-gray-400 text-left">
                {card.location}
              </p>

              <div className="flex justify-between items-center p-4">
                <p className="my-2 text-[20px] text-red-500 font-bold dark:text-gray-400">
                  {card.price}
                </p>
                <button className="bg-yellow-500 text-white font-semibold py-2 px-4 sm:py-2 sm:px-4 md:py-3 md:px-5 lg:py-2 lg:px-5">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PropertyListing;
