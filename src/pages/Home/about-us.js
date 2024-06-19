import React from "react";
import about from "../../assect/Images/about us.webp";

function AboutUs() {
  return (
    <div className="max-w-[1320px] mx-auto my-[100px]">
      <div className="bg-accent/20">
        <div className="max-w-[1320px] relative grid grid-cols-1 sm:text-center lg:grid-cols-2">
          <div className="relative flex items-center justify-center p-2 rounded-lg shadow-lg w-full h-[370px] lg:w-[500px] ml-0 lg:ml-10">
            <img
              src={about}
              alt="properties"
              className="w-full h-full object-cover object-center"
            />
            <span className="absolute bottom-2 left-10 bg-white p-3 rounded-xl">
              <h1 className="text-5xl text-red-500 font-bold">5</h1>
              <p className="text-[18px] text-gray-500">Global Top Awards</p>
            </span>
          </div>
          <div className="text-left p-3 my-10 lg:my-1">
            <h2 className="text-[16px] text-yellow-500 font-bold">ABOUT US</h2>
            <p className="text-[40px] font-bold">
              Browse our Wide Selection of Luxury Properties
            </p>
            <p className="font-semibold text-gray-500 text-[18px] my-10">
              Discover Your Dream Home with TNC Real Estate. Our deep market
              insights and commitment to excellence ensure a seamless and
              enjoyable real estate journey.
            </p>
            <div className="grid grid-cols-3">
              <div>
                <h1 className="text-red-500 text-4xl font-bold">15</h1>
                <p className="text-[18px] text-gray-500">Years of Experience</p>
              </div>
              <div className="text-left">
                <h1 className="text-red-500 text-4xl font-bold">100+</h1>
                <p className="text-[18px] text-gray-500">
                  Total Sold Properties
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
