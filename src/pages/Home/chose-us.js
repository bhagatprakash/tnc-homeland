import React from "react";
import { FetureData } from "../../assect/data/carddata";
import { Link } from "react-router-dom";
function Card() {
  return (
    <div className="my-20 max-w-[1320px] mx-auto">
      <div className="my-5  mx-10" data-aos="fade-left">
        <p className="text-[16px] text-yellow-500 text-right font-bold dark:text-white">
          WHY CHOOSE US
        </p>
        <h1 className="md:text-[42px] text-[23px] font-semibold text-right dark:text-white">
          Discover Your Dream Home: Browse our
        </h1>
        <h1 className="md:text-[42px] text-[23px] font-semibold text-right dark:text-white">
          Wide Selection of Luxury Properties
        </h1>
        <hr className="border-black dark:border-white my-5" />
      </div>
      <div className="bg-accent/20">
        <div
          className="grid md:grid-cols-3 grid-cols-2 gap-6 text-center  lg:grid-cols-4 px-4 md:px-12"
          data-aos="fade-up"
        >
          {FetureData.map((card, index) => (
            <div
              key={index}
              className="my-6 bg-white rounded-lg shadow-lg border border-transparent dark:border-gray-700 hover:shadow-xl flex flex-col items-center justify-center"
            >
              <div className="lg:h-[200px] h-[150px] mx-auto flex items-center justify-center">
                <img
                  src={card.image}
                  alt="card"
                  className="h-[110px] w-[100px] object-cover object-fit"
                />
              </div>
              <Link>
                <h5 className="my-2 text-[18px] mx-4 tracking-tight text-gray-700 dark:text-black  text-center">
                  {card.type}
                </h5>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
