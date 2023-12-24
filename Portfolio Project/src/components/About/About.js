import React from "react";
import buildings from "../../assets/images/buildings.png";
import consultant from "../../assets/images/consultant.png";
import mechnicial from "../../assets/images/mechnicial.png";
import architecture from "../../assets/images/architecture.png";
import aboutImg from "../../assets/images/home_page_2.jpg";
import engineer from "../../assets/images/engineer.png";
import "./About.css";
import { Bounce, Flip, Zoom } from "react-reveal";

const About = () => {
  return (
    <div className="bg-gray-100 w-full py-6 md:py-24">
      <div className="container mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
          <div className="relative w-full h-full p-0 md:p-6">
            <Flip left>
              <img src={aboutImg} alt="About Image" className="w-100 h-full" />
            </Flip>
            <div className="absolute about-img-card flex px-3 py-5 justify-start items-center w-full gap-x-4  md:w-[300px] bottom-0 right-0 about-info-card">
              <div>
                <img src={engineer} />
              </div>
              <div>
                <span
                  className="text-xl"
                  style={{
                    color: "#22c55e",
                  }}
                >
                  38
                </span>
                <p className="text-2xl font-bold">Years Of Experience</p>
              </div>
            </div>
          </div>

          <div className="p-6 flex flex-col gap-y-6">
            <Zoom right>
              <p className="primary-color font-bold text-lg">
                Welcome to Buildream
              </p>
            </Zoom>
            <h1 className="text-6xl leading-72 font-semibold">
              Quality and Affordable Constructor
            </h1>
            <p className="text-gray-400">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <h2 className="text-gray-900">We Can Help You</h2>
            <Bounce bottom>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="px-4 py-6 flex gap-x-4 shadow-lg hover:bg-gray-900 transition duration-500 about-card">
                  <div>
                    <img src={buildings} />
                  </div>
                  <div>
                    <h2 className="text-xl transition duration-500 text-gray-700">
                      Construction
                    </h2>
                    <p className="text-gray-400 transition duration-500">
                      Far far away, behind the word mountains.
                    </p>
                  </div>
                </div>
                <div className="px-4 py-6 flex gap-x-4 shadow-lg hover:bg-gray-900 transition duration-500 about-card">
                  <div>
                    <img src={architecture} />
                  </div>
                  <div>
                    <h2 className="text-xl transition duration-500 text-gray-700">
                      Architecture
                    </h2>
                    <p className="text-gray-400 transition duration-500">
                      Far far away, behind the word mountains.
                    </p>
                  </div>
                </div>
                <div className="px-4 py-6 flex gap-x-4 shadow-lg hover:bg-gray-900 transition duration-500 about-card">
                  <div>
                    <img src={consultant} />
                  </div>
                  <div>
                    <h2 className="text-xl transition duration-500 text-gray-700">
                      Consultant
                    </h2>
                    <p className="text-gray-400 transition duration-500">
                      Far far away, behind the word mountains.
                    </p>
                  </div>
                </div>
                <div className="px-4 py-6 flex gap-x-4 shadow-lg hover:bg-gray-900 transition duration-500 about-card">
                  <div>
                    <img src={mechnicial} />
                  </div>
                  <div>
                    <h2 className="text-xl transition duration-500 text-gray-700">
                      Mechanical
                    </h2>
                    <p className="text-gray-400 transition duration-500">
                      Far far away, behind the word mountains.
                    </p>
                  </div>
                </div>
              </div>
            </Bounce>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
