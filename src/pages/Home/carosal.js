import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "../../assect/data/carosalData.js";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <button className="slick-prev bg-black text-white p-2 rounded-full shadow-md">
        ←
      </button>
    ),
    nextArrow: (
      <button className="slick-next bg-black text-white p-2 rounded-full shadow-md">
        →
      </button>
    ),
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center space-x-2 mt-4">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></div>
    ),
  };

  return (
    <>
      <div className="bg-gray-100 dark:bg-gulf-blue">
        <div
          className="max-w-[1320px] mx-auto flex flex-col md:flex-row  md:bg-newBanner bg-no-repeat  relative bg-right-bottom bg-none bg-contain"
          data-aos="fade-up"
        >
          <div className="my-20">
            <div
              className="bg-accent/20 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1"
              data-aos="fade-right"
            >
              <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="px-2 sm:px-4">
                    <div className="p-4 sm:p-6  text-center">
                      <div className="flex text-left mb-2 sm:mb-4"></div>
                      <p className="text-base sm:text-lg text-left italic text-gray-500 dark:text-gray-200 mb-2 sm:mb-4">
                        "{testimonial.text}"
                      </p>
                      <h3 className="text-lg sm:text-[20px] text-left font-semibold my-1 dark:text-white">
                        {testimonial.author}
                      </h3>
                      <p className="text-gray-600 text-[15px] text-left dark:text-gray-50">
                        {testimonial.position}
                      </p>
                      <div className="flex text-left mb-2 sm:mb-4 my-5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.275 3.94a1 1 0 00.95.69h4.166c.969 0 1.371 1.24.588 1.81l-3.375 2.45a1 1 0 00-.364 1.118l1.275 3.94c.3.921-.755 1.688-1.538 1.118l-3.375-2.45a1 1 0 00-1.175 0l-3.375 2.45c-.783.57-1.838-.197-1.538-1.118l1.275-3.94a1 1 0 00-.364-1.118l-3.375-2.45c-.783-.57-.38-1.81.588-1.81h4.166a1 1 0 00.95-.69l1.275-3.94z" />
                          </svg>
                        ))}
                      </div>
                      <hr className="border-black  my-5 dark:border-white" />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
