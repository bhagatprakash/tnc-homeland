import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const frequentlayAskQuestion = [
  {
    title: "What is the process of buying a house in a country?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title:
      "How can I calculate the potential return on investment for a rental property?",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    title:
      "What are the common closing costs associated with purchasing a property?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title:
      "How does the rental market in different cities compare within a country?",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    title:
      "What are the current trends in the real estate market, and how do they impact property prices?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title:
      "What are the common closing costs associated with purchasing a property?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

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
            <h1 className="lg:text-[45px] text-[35px] font-semibold my-5 ">
              Frequently asked questions
            </h1>
            <h2 className="text-[18px] text-gray-500   ">
              Unlocking Essential Information: Explore and Find Answers to
              Frequently Asked
            </h2>
            <span className="text-[18px] text-gray-500  ">
              Questions about TNC Real Estate Services.
            </span>
          </div>
          <div className="w-full my-5 flex justify-center">
            <div className="w-[1320px] rounded-lg ">
              {frequentlayAskQuestion.map((item, i) => (
                <div
                  key={i}
                  className="border-b last:border-b-0 shadow-lg p-4 my-2"
                >
                  <div
                    className={`px-5 py-3 flex items-center justify-between ${
                      activeId === i ? "bg-gray-100 rounded-md " : ""
                    }`}
                    onClick={() => togelerFunction(i)}
                  >
                    <p className="flex-1 text-left text-[18px] font-semibold">
                      {item.title}
                    </p>
                    <span className="bg-gray-100 w-[50px] h-[50px] flex items-center font-bold justify-center text-blue-600">
                      {activeId === i ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                  </div>

                  {activeId === i && (
                    <div className="px-5 py-4 flex items-center justify-between">
                      <p className="flex-1">{item.description}</p>
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
