import React from "react";
import { FetureData } from "../../assect/data/InsightsData";
import { Link } from "react-router-dom";

function Insights() {
  return (
    <div className="max-w-[1320px] mx-auto  my-10">
      <div className="my-5">
        <h3 className="text-[18px] text-yellow-500 font-bold">LATEST NEWS</h3>
        <h1 className="md:text-[36px] text-[23px] font-semibold text-center">
          Insights and Tips for Buying and Selling
        </h1>
        <h1 className="md:text-[36px] text-[23px] font-semibold text-center">
          Property - TNC Homeland Blog
        </h1>
      </div>
      <div className="bg-accent/20">
        <div className="max-w-[1320px] grid grid-cols-1 gap-[50px] content-center sm:text-center sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-12">
          {FetureData.map((card, index) => (
            <div
              key={index}
              className="my-6 bg-white shadow-lg w-full sm:w-auto transform transition-transform hover:scale-105 duration-1000"
            >
              <div className="h-[250px] overflow-hidden ">
                <Link to={"/news_deatils"}>
                  <img
                    src={card.image}
                    alt="card"
                    className="w-full h-full object-cover object-center hover:scale-125 duration-1000"
                  />
                </Link>
              </div>
              <Link>
                <h5 className="my-3 text-[20px] mx-4 font-semibold tracking-tight text-gray-900 dark:text-white text-left">
                  {card.contant}
                </h5>
              </Link>
              <div className="flex justify-between items-center p-4">
                <p className="my-2 text-[18px] text-yellow-500 font-semibold dark:text-gray-400">
                  {card.heading}
                </p>
                <h1 className="text-gray-500">{card.road}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Insights;
