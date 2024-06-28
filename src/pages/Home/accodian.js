import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { frequentlayAskQuestion } from "../../assect/data/accodianData";

function Accordion() {
  const [activeId, setActiveId] = useState(null);
  const togelerFunction = (index) => {
    if (activeId === index) {
      setActiveId(null);
    } else {
      setActiveId(index);
    }
  };
  return (
    <>
      <div className="max-w-[800px] mx-auto my-10 p-[10px]">
        <div className="bg-accent/20">
          <div>
            <h3 className="text-[18px] text-yellow-500 font-semibold">FAQS</h3>
            <h1 className="lg:text-[45px] text-[28px] font-semibold my-5 dark:text-white">
              Frequently asked questions
            </h1>
            <h2 className="text-[17px] text-gray-500   ">
              Unlocking Essential Information: Explore and Find Answers to
              Frequently Asked
            </h2>
            <span className="text-[17px] text-gray-500  ">
              Questions about TNC Real Estate Services.
            </span>
          </div>
          <div className="w-full my-5 flex justify-center">
            <div className="w-[1320px] rounded-lg ">
              {frequentlayAskQuestion.map((item, i) => (
                <div
                  key={i}
                  className="border-b last:border-b-0 shadow  dark:shadow-white  my-7"
                >
                  <div
                    className={`px-5 py-3 flex items-center justify-between ${
                      activeId === i ? "bg-gray-100 rounded-md " : ""
                    }`}
                    onClick={() => togelerFunction(i)}
                  >
                    <p className="flex-1 text-left text-[18px] font-normal dark:text-white">
                      {item.title}
                    </p>
                    <span className="shadow-lg w-[20px] rounded-full bg-yellow-500 h-[20px] flex items-center font-bold justify-center text-white">
                      {activeId === i ? <GoDash /> : <FaPlus />}
                    </span>
                  </div>

                  {activeId === i && (
                    <div className="px-5 py-4 flex items-center justify-between">
                      <p className="flex-1 dark:text-white">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordion;
