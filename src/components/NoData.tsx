import React from "react";

const NoData = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        width="200px"
        height="200px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 20.5V4.25C14 3.52169 13.9984 3.05091 13.9518 2.70403C13.908 2.37872 13.8374 2.27676 13.7803 2.21967C13.7232 2.16258 13.6213 2.09197 13.296 2.04823C12.9491 2.00159 12.4783 2 11.75 2C11.0217 2 10.5509 2.00159 10.204 2.04823C9.87872 2.09197 9.77676 2.16258 9.71967 2.21967C9.66258 2.27676 9.59197 2.37872 9.54823 2.70403C9.50159 3.05091 9.5 3.52169 9.5 4.25V20.5H14Z"
            fill="#1C274C"
          ></path>{" "}
          <path
            opacity="0.7"
            d="M8 8.75C8 8.33579 7.66421 8 7.25 8H4.25C3.83579 8 3.5 8.33579 3.5 8.75V20.5H8V8.75Z"
            fill="#1C274C"
          ></path>{" "}
          <path
            opacity="0.7"
            d="M20 13.75C20 13.3358 19.6642 13 19.25 13H16.25C15.8358 13 15.5 13.3358 15.5 13.75V20.5H20V13.75Z"
            fill="#1C274C"
          ></path>{" "}
          <path
            opacity="0.5"
            d="M1.75 20.5C1.33579 20.5 1 20.8358 1 21.25C1 21.6642 1.33579 22 1.75 22H21.75C22.1642 22 22.5 21.6642 22.5 21.25C22.5 20.8358 22.1642 20.5 21.75 20.5H21.5H20H15.5H14H9.5H8H3.5H2H1.75Z"
            fill="#1C274C"
          ></path>{" "}
        </g>
      </svg>
      <h1 className="text-2xl text-center text-gray-800">No data available</h1>
      <h3 className="text-base text-center text-gray-600">
        Refresh or check your internet connection if no data appears on the
        screen
      </h3>
    </div>
  );
};

export default NoData;
