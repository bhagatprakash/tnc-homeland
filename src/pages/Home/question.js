import React from "react";

function Question() {
  return (
    <div className="max-w-[1320px] mx-auto my-[100px] px-4 sm:px-6 lg:px-8">
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
  );
}

export default Question;
