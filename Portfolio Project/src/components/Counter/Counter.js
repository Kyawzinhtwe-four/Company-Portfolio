import React from "react";
import "./Counter.css";
import engineer from "../../assets/images/engineer.png";

const Counter = () => {
  return (
    <div className="counter">
      <div className="container mx-auto px-6 md:px-20 py-6 md:py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4">
        <div className="flex gap-x-5 z-30">
          <div>
            <img src={engineer} />
          </div>
          <div>
            <h1 className="primary-color font-bold text-3xl">3,000</h1>
            <p className="text-white text-md font-bold mt-4 uppercase">
              Complete Project
            </p>
          </div>
        </div>
        <div className="flex gap-x-5 z-30">
          <div>
            <img src={engineer} />
          </div>
          <div>
            <h1 className="primary-color font-bold text-3xl">320</h1>
            <p className="text-white text-md font-bold mt-4 uppercase">
              Happy Client
            </p>
          </div>
        </div>
        <div className="flex gap-x-5 z-30">
          <div>
            <img src={engineer} />
          </div>
          <div>
            <h1 className="primary-color font-bold text-3xl">1,000</h1>
            <p className="text-white text-md font-bold mt-4 uppercase">
              Cup Of Coffee
            </p>
          </div>
        </div>
        <div className="flex gap-x-5 z-30">
          <div>
            <img src={engineer} />
          </div>
          <div>
            <h1 className="primary-color font-bold text-3xl">587</h1>
            <p className="text-white text-md font-bold mt-4 uppercase">
              Engineers & staff
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
