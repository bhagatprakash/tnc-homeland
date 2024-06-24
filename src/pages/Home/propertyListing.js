import React, { useState } from "react";
import PropertyCard from "../../components/property-card";
import Tabs from "../../components/tabs";
import { properties } from "../../assect/data/tabData";

const PropertyListing = () => {
  const [activeTab, setActiveTab] = useState("All");
  const handleTabClick = (tab) => {
    console.log("tab", tab);
    setActiveTab(tab);
  };

  const filteredProperties =
    activeTab === "All"
      ? properties.slice(0, 3)
      : properties.filter((property) => property.type === activeTab);

  return (
    <div className="max-w-[1320px] mx-auto relative mt-[60px] p-4">
      <div>
        <h3 className="text-[18px] text-yellow-500 font-semibold">
          PROPERTY LISTINGS FOR SALE
        </h3>

        <h1 className="md:text-[36px] text-[23px] font-semibold text-center">
          Discover Your Perfect Home - TNC
        </h1>

        <h1 className="md:text-[36px] text-[23px] font-semibold text-center">
          HomeLand Sales and Listings
        </h1>
      </div>
      <Tabs activeTab={activeTab} onTabClick={handleTabClick} />
      <div className="max-w-[1320px] grid grid-cols-1 gap-[50px] content-center sm:text-center sm:grid-cols-2 lg:grid-cols-3  my-10 sm:px-12">
        {filteredProperties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyListing;
