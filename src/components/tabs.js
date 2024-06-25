import React from "react";

const Tabs = ({ activeTab, onTabClick }) => {
  const tabs = [
    "All",
    "newListing",
    "forSale",
    "forRent",
    "smallProperty",
    "bigProperty",
  ];

  return (
    <div className="flex flex-wrap space-x-4 border-b">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`py-2 px-4 font-semibold text-sm sm:text-base ${
            activeTab === tab ? "border-b-2 border-yellow-500" : "text-gray-500"
          }`}
          onClick={() => onTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
