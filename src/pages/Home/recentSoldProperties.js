import React from "react";
import { FetureData } from "../../assect/data/recentSoldData";
import { LuScale3D } from "react-icons/lu";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function RecentSoldProperties() {
  return (
    <div className="max-w-[1320px] mx-auto  my-10">
      <div className="my-10">
        <h3 className="text-[18px] text-yellow-500 font-semibold">
          RECENT SOLD PROPERTIES
        </h3>
        <h1 className="md:text-[36px] text-[23px] font-semibold text-center dark:text-white">
          Recent Sales Success - These Properties
        </h1>
        <h2 className="md:text-[36px] text-[23px] font-semibold text-center dark:text-white">
          Sold by TNC Homeland
        </h2>
      </div>
      <hr className="border-black mx-10 my-5 dark:border-white" />
      <div className="bg-accent/20">
        <div className="max-w-[1320px] grid grid-cols-1 gap-[50px] content-center sm:text-center sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-12">
          {FetureData.map((card, index) => (
            <div
              key={index}
              className="border my-6 bg-white shadow-lg w-full sm:w-auto transform  transition-transform hover:scale-105 duration-1000 dark:bg-gulf-blue"
            >
              <div className="h-[225px] overflow-hidden relative">
                <Link to={"/proptype_card"}>
                  <img
                    src={card.image}
                    alt="card"
                    className="w-full h-full object-cover object-center hover:scale-125 duration-1000"
                  />
                </Link>

                <span className="absolute top-0 left-0 bg-red-500 mt-3 w-[55px] p-2 text-[15px] font-semibold text-white">
                  Sold
                </span>

                <div className="absolute bottom-0 left-0 mb-3 ml-3">
                  <span className=" text-yellow-500 hover:bg-red-500 hover:text-white text-2xl sm:text-base md:text-lg">
                    <FaLocationDot />
                  </span>
                </div>
              </div>

              <div className=" border-gray-300 my-4 ">
                <div className="flex flex-wrap  lg:justify-start space-x-2">
                  <span className="py-1 text-[14px] px-5  mb-2 flex items-center">
                    <LuScale3D className="mr-2 text-red-500 text-xl" />
                    <span className="font-semibold text-gray-600 dark:text-white">
                      {card.squre}
                    </span>
                  </span>
                  <span className="py-2 text-[14px] px-5 mb-2 flex items-center ">
                    <FaBed className="mr-2 text-red-500 text-xl" />
                    <span className="font-semibold text-gray-600 dark:text-white">
                      {card.bedrooms}
                    </span>
                  </span>
                  <span className="py-1 text-[14px] px-5  mb-2 flex items-center">
                    <FaBath className="mr-2 text-red-500 text-xl" />
                    <span className="font-semibold text-gray-600 dark:text-white">
                      {card.bathrooms}
                    </span>
                  </span>
                </div>
              </div>

              <Link>
                <h5 className="my-3 text-[20px] mx-4 font-semibold tracking-tight text-gray-900 dark:text-white text-left">
                  {card.type}
                </h5>
              </Link>

              <p className="mb-3 text-[15px] mx-4 text-gray-500  text-left dark:text-white">
                {card.location}
              </p>

              <div className="flex justify-between items-center p-4">
                <p className="my-2 text-[20px] text-red-500 font-bold  dark:text-white">
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

export default RecentSoldProperties;
