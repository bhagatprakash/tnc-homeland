import React from "react";

export default function ToggleButton({ onClick }) {
  return (
    <>
      <div onClick={onClick} className="relative cursor-pointer">
        <input type="checkbox" id="toggleB" className="sr-only" />
        <div className="block bg-gulf-blue dark:bg-white w-14 h-7 rounded-full mt-3"></div>
        <div className="dark:translate-x-full dot absolute left-1 top-1 bg-white mt-3 dark:bg-gulf-blue w-6 h-5 rounded-full transition"></div>
      </div>
    </>
  );
}
