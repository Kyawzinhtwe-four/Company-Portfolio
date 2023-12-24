import React from "react";
import "./Construction.css";
import { Slide } from "react-reveal";

const Construction = () => {
  return (
    <div className="construction">
      <div className="overlay"> </div>
      <div className="overlay-cover"> </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-x-6 container mx-auto px-6 md:px-28 absolute w-100 h-full top-0 left-0"
        style={{
          zIndex: "5 !important",
        }}
      >
        <Slide left>
          <div
            className="z-30 w-100 h-full flex flex-col justify-center items-center gap-x-15"
            style={{ lineHeight: 1.8, fontSize: 16 }}
          >
            <p className="text-white font-bold uppercase">
              You May Contact Us For Construction & Renovation Work
            </p>
            <h2 className="text-2xl font-bold md:text-4xl text-black">
              We Are Great Construction Company
            </h2>
          </div>
        </Slide>
        <Slide right>
          <div className="z-30 w-100 h-full flex flex-col justify-center items-center">
            <button className="h-[50px] text-center uppercase font-bold md:text-gray-900 construction-btn text-white rounded-sm px-3">
              Make An Appointment
            </button>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Construction;
