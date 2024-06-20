import React from "react";
import Banner from "./banner";
import Card from "./chose-us";
import AboutUs from "./about-us";
import Question from "./question";
import FetureSection from "./feture";
import Accordion from "./accodian";
import Insights from "./Insights ";
import RecentSoldProperties from "./recentSoldProperties";
import PropertyListing from "./propertyListing";

function Index() {
  return (
    <>
      {/* banner section  */}
      <Banner />
      {/* card  */}
      <Card />
      {/* about us  */}
      <AboutUs />
      {/* question  */}
      <Question />
      {/* FetureSection */}
      <FetureSection />
      {/* PropertyListing  */}
      <PropertyListing />
      {/* RecentSoldProperties  */}
      <RecentSoldProperties />
      {/* Accordion */}
      <Accordion />
      {/* Insights  */}
      <Insights />
    </>
  );
}

export default Index;
