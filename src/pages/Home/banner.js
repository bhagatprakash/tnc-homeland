import React from "react";
import propeties from "../../assect/Images/banner.webp";

function Banner() {
  return (
    <div className="max-w-[1320px] mx-auto my-[100px]">
      <div className="bg-accent/20">
        <div className="max-w-[1320px] relative grid grid-cols-1 lg:gap-[50px] content-center sm:text-center lg:grid-cols-2">
          <div className="text-left p-3 my-10 lg:my-1">
            <p className="text-[40px] font-bold">"YOUR DREAM HOME AWAITS."</p>
            <span className="text-yellow-500 text-[35px] font-semibold">
              - seize the opportunity today!
            </span>

            <p className="font-semibold text-gray-500 text-[18px] my-10">
              Welcome to TNC Real Estate, where we're dedicated to making your
              dream home a reality. Explore our range of exceptional properties
              in sought-after locations. Experience a new level of personalized
              service as we guide you through finding the perfect property.
            </p>

            <div className="flex flex-col md:flex-row rounded-md overflow-hidden my-10">
              <button className="px-4 py-3 md:py-5 w-full md:w-[180px] rounded-lg bg-primary text-white font-semibold hover:bg-black">
                To Catalog
              </button>
            </div>
          </div>
          <div className="p-2 rounded-lg shadow-lg mx-auto w-full max-w-[500px] h-[370px]">
            <img
              src={propeties}
              alt="properties"
              className="w-full h-full object-cover object-center rounded-lg"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
