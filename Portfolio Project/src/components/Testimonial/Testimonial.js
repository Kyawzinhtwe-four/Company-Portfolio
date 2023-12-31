import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

import client1 from "../../assets/images/client_1.webp";
import client2 from "../../assets/images/client_2.webp";
import "./Testimonial.css";
import { Flip, Slide } from "react-reveal";

const Testimonial = () => {
  return (
    <div className="testimonial w-100 min-h-screen grid place-items-center">
      <div className="container mx-auto px-6 md:px-24">
        <Flip left>
          <h4 className="text-lg primary-color text-center mb-4 font-bold my-4">
            Testimonial
          </h4>
          <h1 className="text-3xl md:text-6xl font-bold text-center mb-10 my-4 md:my-6">
            Happy Clients
          </h1>
        </Flip>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 md:mt-12">
              <Slide left>
                <div className="testimonial-card shadow-xl p-4 bg-white md:py-12 md:px-8">
                  <div className="flex gap-x-8 gap-y-4 flex-col md:flex-row">
                    <div className="testimonial-profilo relative w-[70px] h-[70px]">
                      <img
                        src={client1}
                        alt="Test"
                        className="testimonial-img rounded-full w-100 h-100"
                      />
                      <div className="bg-primary-color w-[30px] h-[30px] rounded-full absolute bottom-0 right-0 text-white grid place-items-center font-bold text-lg p-2">
                        <FaQuoteLeft />
                      </div>
                    </div>
                    <div className="">
                      <h2 className="text-2xl font-bold uppercase">
                        Roger Scott
                      </h2>
                      <p className="primary-color uppercase">
                        Marketing Manager
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-lg mt-4">
                    Far far away, behind the word mountains,
                    <br />
                    far from the countries Vokalia and Consonantia,
                    <br /> there live the blind texts.
                  </p>
                </div>
              </Slide>
              <Slide bottom>
                <div className="testimonial-card shadow-xl p-4 bg-primary-color md:py-12 md:px-8">
                  <div className="flex gap-x-8 gap-y-4 flex-col md:flex-row">
                    <div className="testimonial-profilo relative w-[70px] h-[70px]">
                      <img
                        src={client2}
                        alt="Test"
                        className="testimonial-img rounded-full w-100 h-100"
                      />
                      <div className="bg-primary-color w-[30px] h-[30px] rounded-full absolute bottom-0 right-0 text-white grid place-items-center font-bold text-lg p-2">
                        <FaQuoteLeft />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold uppercase text-black">
                        Roger Scott
                      </h2>
                      <p className="uppercase text-white">Marketing Manager</p>
                    </div>
                  </div>
                  <p className="text-gray-900 text-lg mt-4">
                    Far far away, behind the word mountains,
                    <br />
                    far from the countries Vokalia and Consonantia,
                    <br /> there live the blind texts.
                  </p>
                </div>
              </Slide>
              <Slide right>
                <div className="testimonial-card shadow-xl p-4 bg-white md:py-12 md:px-8">
                  <div className="flex gap-x-8 gap-y-4 flex-col md:flex-row">
                    <div className="testimonial-profilo relative w-[70px] h-[70px]">
                      <img
                        src={client1}
                        alt="Test"
                        className="testimonial-img rounded-full w-100 h-100"
                      />
                      <div className="bg-primary-color w-[30px] h-[30px] rounded-full absolute bottom-0 right-0 text-white grid place-items-center font-bold text-lg p-2">
                        <FaQuoteLeft />
                      </div>
                    </div>
                    <div className="">
                      <h2 className="text-2xl font-bold uppercase">
                        Roger Scott
                      </h2>
                      <p className="primary-color uppercase">
                        Marketing Manager
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-lg mt-4">
                    Far far away, behind the word mountains,
                    <br />
                    far from the countries Vokalia and Consonantia,
                    <br /> there live the blind texts.
                  </p>
                </div>
              </Slide>
            </div>
          </div>
          <div id="item2" className="carousel-item w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 md:mt-12">
              <div className="testimonial-card shadow-xl p-4 bg-white md:py-12 md:px-8">
                <div className="flex gap-x-8 gap-y-4 flex-col md:flex-row">
                  <div className="testimonial-profilo relative w-[70px] h-[70px]">
                    <img
                      src={client1}
                      alt="Test"
                      className="testimonial-img rounded-full w-100 h-100"
                    />
                    <div className="bg-primary-color w-[30px] h-[30px] rounded-full absolute bottom-0 right-0 text-white grid place-items-center font-bold text-lg p-2">
                      <FaQuoteLeft />
                    </div>
                  </div>
                  <div className="">
                    <h2 className="text-2xl font-bold uppercase">
                      Roger Scott
                    </h2>
                    <p className="primary-color uppercase">Marketing Manager</p>
                  </div>
                </div>
                <p className="text-gray-500 text-lg mt-4">
                  Far far away, behind the word mountains,
                  <br />
                  far from the countries Vokalia and Consonantia,
                  <br /> there live the blind texts.
                </p>
              </div>
              <div className="testimonial-card shadow-xl p-4 bg-primary-color md:py-12 md:px-8">
                <div className="flex gap-x-8 gap-y-4 flex-col md:flex-row">
                  <div className="testimonial-profilo relative w-[70px] h-[70px]">
                    <img
                      src={client2}
                      alt="Test"
                      className="testimonial-img rounded-full w-100 h-100"
                    />
                    <div className="bg-primary-color w-[30px] h-[30px] rounded-full absolute bottom-0 right-0 text-white grid place-items-center font-bold text-lg p-2">
                      <FaQuoteLeft />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold uppercase text-black">
                      Roger Scott
                    </h2>
                    <p className="uppercase text-white">Marketing Manager</p>
                  </div>
                </div>
                <p className="text-gray-900 text-lg mt-4">
                  Far far away, behind the word mountains,
                  <br />
                  far from the countries Vokalia and Consonantia,
                  <br /> there live the blind texts.
                </p>
              </div>
              <div className="testimonial-card shadow-xl p-4 bg-white md:py-12 md:px-8">
                <div className="flex gap-x-8 gap-y-4 flex-col md:flex-row">
                  <div className="testimonial-profilo relative w-[70px] h-[70px]">
                    <img
                      src={client1}
                      alt="Test"
                      className="testimonial-img rounded-full w-100 h-100"
                    />
                    <div className="bg-primary-color w-[30px] h-[30px] rounded-full absolute bottom-0 right-0 text-white grid place-items-center font-bold text-lg p-2">
                      <FaQuoteLeft />
                    </div>
                  </div>
                  <div className="">
                    <h2 className="text-2xl font-bold uppercase">
                      Roger Scott
                    </h2>
                    <p className="primary-color uppercase">Marketing Manager</p>
                  </div>
                </div>
                <p className="text-gray-500 text-lg mt-4">
                  Far far away, behind the word mountains,
                  <br />
                  far from the countries Vokalia and Consonantia,
                  <br /> there live the blind texts.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2 mt-5">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
