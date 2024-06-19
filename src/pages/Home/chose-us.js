import React from "react";
import { FetureData } from "../../assect/data/carddata";
function Card() {
  return (
    <div className="my-20 max-w-[1320px] mx-auto">
      <div className="my-5 ">
        <p className="text-[16px] text-yellow-500 text-right font-bold">
          WHY CHOOSE US
        </p>
        <h1 className="md:text-[42px] text-[23px] font-semibold text-right">
          Discover Your Dream Home: Browse our
        </h1>
        <h1 className="md:text-[42px] text-[23px] font-semibold text-right">
          Wide Selection of Luxury Properties
        </h1>
        <hr className="h-[1px] opacity-90 my-5 bg-black" />
      </div>
      <div className="bg-accent/20">
        <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3 xl:grid-cols-4 lg:grid-cols-4 px-4 md:px-12">
          {FetureData.map((card, index) => (
            <div
              key={index}
              className="my-6 bg-white rounded-lg shadow-lg border border-transparent dark:border-gray-700 hover:shadow-xl flex flex-col items-center justify-center"
            >
              <div className="lg:h-[200px] h-[150px] mx-auto flex items-center justify-center">
                <img
                  src={card.image}
                  alt="card"
                  style={{ objectFit: "cover" }}
                  className="h-[110px] w-[100px]"
                />
              </div>
              <a href="#">
                <h5 className="my-2 text-[18px] mx-4 tracking-tight text-gray-700 dark:text-white text-center">
                  {card.type}
                </h5>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;