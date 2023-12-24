import React from "react";
import "./Pricing.css";
import Jump from "react-reveal/Jump";
import { Zoom } from "react-reveal";

const Pricing = () => {
  return (
    <div className="pricing w-100 min-h-screen grid place-items-center">
      <div className="container mx-auto px-6 md:px-24">
        <Zoom bottom>
          <h4 className="text-lg primary-color text-center mb-4 font-bold my-4">
            Our Pricing
          </h4>
          <h1 className="text-3xl md:text-6xl font-bold text-center mb-10 my-4 md:my-6">
            Pricing & Packages
          </h1>
        </Zoom>
      </div>
      <Jump>
        <div className="px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="shadow-xl rounded-lg flex flex-col gap-y-3 md:gap-y-12 bg-white px-4 md:px-6 py-6 md:py-8 w-100 items-center">
            <h4 className="text-md font-bold uppercase">Basic Plan</h4>
            <div className="flex">
              <h5 className="text-gray-400 text-xl">$</h5>
              <h1 className="text-3xl md:text-5xl font-bold primary-color">
                49K
              </h1>
            </div>
            <p className="text-gray-400 text-center tex-lg">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <button className="bg-primary-color px-4 py-2 md:px-12 md:py-3 text-gray-900 border-0">
              Get Start
            </button>
          </div>
          <div className="shadow-xl rounded-lg flex flex-col gap-y-3 md:gap-y-12 bg-white px-4 md:px-6 py-6 md:py-8 w-100 items-center">
            <h4 className="text-md font-bold uppercase"> Beginner Plan</h4>
            <div className="flex">
              <h5 className="text-gray-400 text-xl">$</h5>
              <h1 className="text-3xl md:text-5xl font-bold primary-color">
                79K
              </h1>
            </div>
            <p className="text-gray-400 text-center tex-lg">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <button className="bg-primary-color px-4 py-2 md:px-12 md:py-3 text-gray-900 border-0">
              Get Start
            </button>
          </div>
          <div className="shadow-xl rounded-lg flex flex-col gap-y-3 md:gap-y-12 bg-white px-4 md:px-6 py-6 md:py-8 w-100 items-center">
            <h4 className="text-md font-bold uppercase">Premium Plan</h4>
            <div className="flex">
              <h5 className="text-gray-400 text-xl">$</h5>
              <h1 className="text-3xl md:text-5xl font-bold primary-color">
                109K
              </h1>
            </div>
            <p className="text-gray-400 text-center tex-lg">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <button className="bg-primary-color px-4 py-2 md:px-12 md:py-3 text-gray-900 border-0">
              Get Start
            </button>
          </div>
          <div className="shadow-xl rounded-lg flex flex-col gap-y-3 md:gap-y-12 bg-white px-4 md:px-6 py-6 md:py-8 w-100 items-center">
            <h4 className="text-md font-bold uppercase">Ultimate Plan</h4>
            <div className="flex">
              <h5 className="text-gray-400 text-xl">$</h5>
              <h1 className="text-3xl md:text-5xl font-bold primary-color">
                149K
              </h1>
            </div>
            <p className="text-gray-400 text-center tex-lg">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <button className="bg-primary-color px-4 py-2 md:px-12 md:py-3 text-gray-900 border-0">
              Get Start
            </button>
          </div>
        </div>
      </Jump>
    </div>
  );
};

export default Pricing;
