import React from "react";
import Banner from "./banner";
import Card from "./chose-us";
import AboutUs from "./about-us";
import Question from "./question";

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
    </>
  );
}

export default Index;
