import React from "react";
import img from "../../assect/Images/propety-1.png";
import img1 from "../../assect/Images/propety-3.png";
import img2 from "../../assect/Images/propety.png";
import img3 from "../../assect/Images/cardtwo-3.png";
import img4 from "../../assect/Images/cardtwo-1.png";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa6";
import { LuScale3D } from "react-icons/lu";

function PropertyDetails() {
  const details = [
    { label: "Building Age", value: "2 Years" },
    { label: "Property Type", value: "2 Years" },
    { label: "Property Status", value: "2 Years" },
    { label: "Gas", value: "2 Years" },
    { label: "Heating", value: "2 Years" },
    { label: "Storage", value: "2 Years" },
  ];

  const amenities = [
    "Air Conditioning",
    "Basement",
    "Deck",
    "Fireplace",
    "Fixer Upper",
    "Foreclosure",
    "Furnished",
    "Garage",
    "Golf",
    "Horse",
    "Lease To Own",
    "New Construction",
    "No HOA Fees",
    "Pool",
    "Short Sale",
    "Views",
  ];
  return (
    <>
      <div className="max-w-[800px] mx-auto my-10 p-[10px]">
        <div className="bg-accent/20">
          <div className="w-full my-5 flex justify-center">
            <div className="w-[1320px] rounded-lg ">
              <div className="grid grid-cols-2 justify-between">
                <div>
                  <h2 className="font-bold text-3xl  text-left">My Seattle</h2>
                  <p className="text-gray-500 text-[18px] text-left my-3">
                    1901 Thornridge Cir. Shiloh, Hawaii 81063
                  </p>
                </div>

                <div>
                  <span className="text-3xl text-orange-400 font-semibold my-5">
                    {" "}
                    $12000.00
                  </span>
                </div>
              </div>
              <img src={img} alt="image" className="object-cover" />
              <div className="flex  space-x-3 my-5">
                <img
                  src={img1}
                  alt="image2"
                  className="object-cover h-[100px] w-[133px]"
                />

                <img
                  src={img2}
                  alt="image1"
                  className="object-cover h-[100px] w-[133px]"
                />

                <img
                  src={img3}
                  alt="imag3"
                  className="object-cover h-[100px] w-[133px]"
                />

                <img
                  src={img4}
                  alt="image4"
                  className="object-cover h-[100px] w-[133px]"
                />

                <img
                  src={img}
                  alt="image5"
                  className="object-cover h-[100px] w-[133px]"
                />
              </div>
              <div className=" border-gray-300 my-4 ">
                <div className="flex flex-wrap  lg:justify-start space-x-5">
                  <span className="py-1 text-[14px] px-5  mb-2 flex items-center bg-gray-200">
                    <LuScale3D className="mr-2 text-red-500 text-2xl" />
                    <span className="font-semibold text-gray-600">
                      960 SqFt
                    </span>
                  </span>
                  <span className="py-2 text-[14px] px-5 mb-2 flex items-center bg-gray-200">
                    <FaBed className="mr-2 text-red-500 text-2xl" />
                    <span className="font-semibold text-gray-600">3 Beds</span>
                  </span>
                  <span className="py-1 text-[14px] px-5  mb-2 flex items-center bg-gray-200">
                    <FaBath className="mr-2 text-red-500 text-2xl" />
                    <span className="font-semibold text-gray-600">3 Baths</span>
                  </span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl text-left font-bold">
                  PROPERTY DESCRIPTION
                </h2>
                <hr className="h-0.5 bg-gray-400 w-[285px] my-2" />
                <h3 className="my-3 text-gray-600">
                  Indulge in a unique blend of contemporary design and artistic
                  inspiration in this 3-bedroom loft. This space effortlessly
                  aligns modern living with creative allure, inviting you to
                  connect with its vibrant energy.
                </h3>
                <h4 className="text-left text-gray-600">
                  As you step inside, an inviting connection forms between the
                  open layout and the surrounding cityscape. Each design element
                  invites you to explore further - from the subtle stroke of
                  lines enhancing the architecture to the carefully selected
                  objects that embody a harmonious balance of form and function.
                </h4>
              </div>

              <div className="container mx-auto my-10 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="font-bold text-lg text-left">
                      ADDITIONAL DETAILS
                    </h2>
                    <hr className="h-0.5 bg-gray-400 w-[205px] my-5" />
                    <div className="space-y-2">
                      {details.map((detail) => (
                        <div
                          key={detail.label}
                          className="flex justify-between"
                        >
                          <span className="font-semibold">{detail.label}</span>
                          <span>{detail.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="font-bold text-lg my-10"></h2>
                    <div className="space-y-2 my-[70px]">
                      {details.map((detail) => (
                        <div
                          key={detail.label}
                          className="flex justify-between"
                        >
                          <span className="font-semibold">{detail.label}</span>
                          <span>{detail.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h2 className="font-bold text-lg text-left mb-4">
                    AMENITIES
                  </h2>
                  <hr className="h-0.5 bg-gray-400 w-[100px] my-5" />
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {amenities.map((amenity) => (
                      <div
                        key={amenity}
                        className="flex items-center space-x-2"
                      >
                        <span className="text-red-500">✔</span>
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 py-5 px-5 sm:px-12 gap-5">
        <h1 className="font-bold text-4xl mt-10">
          "Stunning Three-Bedroom Home with
        </h1>
        <h2 className="font-bold text-4xl"> Spacious Backyard</h2>
        <div className="flex justify-center items-center mt-5">
          <iframe
            className="embedly-embed"
            src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F4LaQFbfgvBI%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D4LaQFbfgvBI&amp;image=https%3A%2Fi.ytimg.com%2Fvi%2F4LaQFbfgvBI%2Fhqdefault.jpg&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=youtube"
            width="1154"
            height="480"
            scrolling="no"
            title="YouTube embed"
            frameborder="0"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture;"
            allowfullscreen="true"
          ></iframe>
        </div>
      </div>

      <div className="max-w-[1220px] mx-auto lg:my-[100px] px-4 sm:px-6 lg:px-8">
        <div className="bg-accent/20">
          <div className="relative grid grid-cols-1 content-center bg-red-500 rounded-xl p-10  sm:text-center">
            <h1 className="text-white text-5xl my-3 font-bold sm:text-5xl text-center sm:text-left">
              Do you have questions?
            </h1>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-10 mt-5 sm:mt-0">
              <h2 className="text-white text-3xl text-center sm:text-left">
                Call or text today, we are here to help!
              </h2>
              <button className="p-5 w-[150px] bg-yellow-500 text-white font-semibold rounded-full mt-4 sm:mt-0">
                Contact us
              </button>
            </div>
            <p className="text-white text-3xl mt-5 sm:mt-0 text-center sm:text-left">
              555-222-34XX
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1320px]   mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 py-5 px-5 sm:px-12 gap-5 my-10">
        <section className="section ">
          <div className="secondary-container middle-allign">
            <span className="text-Bold text-orange-500">PROPERTY LOCATION</span>
            <h2 className="font-bold text-4xl ">
              "Prime Location: Your Gateway to
            </h2>
            <h2 className="font-bold text-4xl">Desirable Living"</h2>
            <div className="full-width-block">
              <div className="map w-embed w-iframe my-10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14600.706555443365!2d90.42407563126513!3d23.81231704045232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c798efc8d88f%3A0x6e226eca564760c5!2sZeroGround!5e0!3m2!1sen!2sbd!4v1697095943077!5m2!1sen!2sbd"
                  width="100%"
                  height="490"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-[800px] mx-auto my-10 p-[10px]">
        <div>
          <span className="text-Bold text-orange-500 my-2">CONTACT US</span>
          <h2 className="font-semibold text-4xl ">"Get In Touch With Us</h2>
          <h3 className="font-semibold text-4xl">
            Contact TNC Homeland Today!"
          </h3>
          <p className="my-5">
            Align inspect link stroke thumbnail. Draft main group team overflow
            hand follower duplicate ipsum undo. Ellipse scrolling select
            follower subtract underline create. Component undo underline list
            subtract vector. Frame outline project editor layout.
          </p>
        </div>

        <div>
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 text-left"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border  w-full py-2 px-3 text-gray-900 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 text-left"
                  htmlFor="phone"
                >
                  Phone No
                </label>
                <input
                  className="shadow appearance-none border  w-full py-2 px-3 text-gray-900 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="tel"
                  placeholder="+123 456 789 000"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 text-left"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border  w-full py-2 px-3 text-gray-900 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 text-left"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border w-full py-2 px-3 text-gray-900  bg-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Write message"
                  rows="4"
                />
              </div>
              <div className="flex ">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyDetails;
