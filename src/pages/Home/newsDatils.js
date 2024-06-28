import React from "react";
import img from "../../assect/Images/propety-1.png";
import { Link } from "react-router-dom";
import { FetureData } from "../../assect/data/news_DetailsData";

function NewsDetails() {
  return (
    <>
      <div className="max-w-[800px] mx-auto my-10 p-[10px]">
        <div className="bg-accent/20">
          <div className="w-full my-5 flex justify-center">
            <div className="w-[1320px] rounded-lg ">
              <div className="grid grid-cols-1 justify-between">
                <h2 className="font-bold text-3xl  text-left dark:text-white">
                  5 Simple Tips for Enhancing
                </h2>
                <p className="text-gray-500 text-[18px] text-left my-3">
                  Your Property's Curb Appeal
                </p>
                <span class="font-semibold text-red-600 hover:underline hover:text-red-600 text-left my-5">
                  Real Estate
                </span>
              </div>
              <img src={img} alt="image" className="object-cover rounded-lg" />

              <div className="my-5">
                <h2 className="text-3xl text-left font-bold dark:text-white">
                  Tips from a Real Estate Expert
                </h2>

                <h3 className="my-3 text-gray-500 text-left">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </h3>
                <h4 className=" text-gray-500 text-left">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </h4>

                <p className="text-gray-900  dark:text-gray-200 text-left my-5">
                  | Contrary to popular belief, Lorem Ipsum is not simply random
                  text.
                </p>
              </div>

              <hr class="h-0.5 w-full border-0 bg-current dark:text-white" />

              <div className="grid grid-cols-1 gap-[50px] content-center sm:text-center sm:grid-cols-1 lg:grid-cols-2 ">
                {FetureData.map((card, index) => (
                  <div
                    key={index}
                    className="dark:border my-6 bg-white shadow-lg w-full sm:w-auto transform transition-transform hover:scale-105 duration-1000 dark:bg-gulf-blue"
                  >
                    <div className="h-[250px] overflow-hidden ">
                      <img
                        src={card.image}
                        alt="card"
                        className="w-full h-full object-cover object-center hover:scale-125 duration-1000"
                      />
                    </div>
                    <Link>
                      <h5 className="my-3 text-[20px] mx-4 font-semibold tracking-tight text-gray-900 dark:text-white text-left">
                        {card.contant}
                      </h5>
                    </Link>
                    <div className="flex justify-between items-center p-4">
                      <p className="my-2 text-[18px] text-yellow-500 font-semibold dark:text-gray-400">
                        {card.heading}
                      </p>
                      <h1 className="text-gray-500">{card.road}</h1>
                    </div>
                  </div>
                ))}
              </div>

              <div className="max-w-xl mt-10 p-6  ">
                <h2 className="text-2xl font-bold mb-6 text-left dark:text-white">
                  Leave A Comment
                </h2>
                <form>
                  <div className="flex space-x-20">
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-left dark:text-white"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-left dark:text-white"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 text-left dark:text-white"
                      htmlFor="comment"
                    >
                      Comment
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                      id="comment"
                      rows="4"
                      placeholder="Your comment"
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4  focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsDetails;
