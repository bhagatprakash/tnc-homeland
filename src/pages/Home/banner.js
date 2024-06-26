import React, { useState } from "react";
import propeties from "../../assect/Images/banner.webp";
import { FaLocationArrow } from "react-icons/fa";

function Banner() {
  const [toggle, setToggle] = useState(1);

  function updatetoggle(id) {
    setToggle(id);
  }
  return (
    <div className="max-w-[1320px] mx-auto lg:my-[100px]">
      <div className="bg-accent/20">
        <div className="max-w-[1320px] relative flex flex-col-reverse lg:flex-row lg:gap-[50px] items-center sm:text-center">
          <div className="text-left p-3 my-10 lg:my-1">
            <p
              className="text-[28px] lg:text-[40px] font-bold"
              data-aos="fade-down"
            >
              "YOUR DREAM HOME AWAITS."
            </p>
            <span
              className="text-yellow-500 text-[28px] lg:text-[35px] font-semibold"
              data-aos="fade-down"
            >
              - seize the opportunity today!
            </span>

            <p
              className="font-semibold text-gray-500 text-[18px] my-10"
              data-aos="fade-up"
            >
              Welcome to TNC Real Estate, where we're dedicated to making your
              dream home a reality. Explore our range of exceptional properties
              in sought-after locations. Experience a new level of personalized
              service as we guide you through finding the perfect property.
            </p>

            <div className="flex my-10" data-aos="fade-up">
              <button
                className={`w-[80px] px-3 py-3 ${
                  toggle === 1
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-100 text-black"
                }  font-bold`}
                onClick={() => updatetoggle(1)}
              >
                Rent
              </button>
              <button
                className={`w-[80px] px-3 py-3 ${
                  toggle === 2
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-100 text-black"
                }  font-bold`}
                onClick={() => updatetoggle(2)}
              >
                Buy
              </button>
            </div>

            <div className={toggle === 1 ? "show-content" : "content"}>
              <form className="flex flex-col sm:flex-row shadow-lg p-5 gap-2">
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full sm:w-[500px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-40"
                />
                <button
                  type="submit"
                  className="px-6 py-3 w-full md:w-auto text-white font-semibold text-[18px] rounded bg-yellow-500 duration-1000 hover:bg-blue-800 hover:text-white "
                >
                  <FaLocationArrow />
                </button>
              </form>
            </div>

            <div className={toggle === 2 ? "show-content" : "content"}>
              <form className="flex flex-col sm:flex-row shadow-lg p-5 gap-2">
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full sm:w-[500px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-40"
                />
                <button
                  type="submit"
                  className="px-6 py-3 w-full md:w-auto text-white font-semibold text-[18px] rounded bg-yellow-500 duration-1000 hover:bg-blue-800 hover:text-white "
                >
                  <FaLocationArrow />
                </button>
              </form>
            </div>
          </div>
          <div
            className="p-2 rounded-lg shadow-lg mx-auto w-full max-w-[500px] h-[370px] "
            data-aos="fade-left"
          >
            <img
              src={propeties}
              alt="properties"
              className="w-full h-full object-cover object-center rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
