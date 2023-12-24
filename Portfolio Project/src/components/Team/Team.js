import React from "react";
import engineerIgm1 from "../../assets/images/engineer_1.webp";
import engineerIgm2 from "../../assets/images/engineer_2.webp";
import engineerIgm3 from "../../assets/images/engineer_3.webp";
import engineerIgm4 from "../../assets/images/engineer_4.webp";
import { FaTwitter, FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import "./Team.css";
import { Roll, Slide } from "react-reveal";

const Team = () => {
  return (
    <div className="team w-100 min-h-screen grid place-items-center">
      <div className="container mx-auto px-6 md:px-24">
        <Slide right>
          <h4 className="text-lg primary-color text-center mb-4 font-bold my-4">
            Team & Staff
          </h4>
          <h1 className="text-3xl md:text-6xl font-bold text-center mb-10 my-4 md:my-6">
            Qualified Engineers
          </h1>
        </Slide>
        <Roll bottom>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="team-card bg-white shadow-md">
              <img src={engineerIgm1} alt="" className="w-100 h-auto" />
              <div className="card-content my-4">
                <h1 className="text-2xl text-center font-bold uppercase">
                  U Sein Thaung
                </h1>
                <p className="text-gray-400 text-center uppercase">
                  Senior Engineer
                </p>
              </div>
              <div className="team-social flex flex-col gap-y-2">
                <div className="team-social-icon">
                  <a href="/">
                    <FaTwitter />
                  </a>
                </div>
                <div className="team-social-icon">
                  <a href="/">
                    <FaFacebook />
                  </a>
                </div>
                <div className="team-social-icon">
                  <a href="/">
                    <FaInstagram />
                  </a>
                </div>
                <div className="team-social-icon">
                  <a href="/">
                    <FaGoogle />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-card bg-white shadow-md">
              <img src={engineerIgm2} alt="" className="w-100 h-auto" />
              <div className="card-content my-4">
                <h1 className="text-2xl text-center font-bold uppercase">
                  U Thant Zaw Myo
                </h1>
                <p className="text-gray-400 text-center uppercase">
                  Senior Engineer
                </p>
              </div>
              <div className="team-social flex flex-col gap-y-2">
                <div className="team-social-icon">
                  <a href="/">
                    <FaTwitter />
                  </a>
                </div>
                <div className="team-social-icon">
                  <a href="/">
                    <FaFacebook />
                  </a>
                </div>
                <div className="team-social-icon">
                  <a href="/">
                    <FaInstagram />
                  </a>
                </div>
                <div className="team-social-icon">
                  <a href="/">
                    <FaGoogle />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-card bg-white shadow-md">
              <img src={engineerIgm3} alt="" className="w-100 h-auto" />
              <div className="card-content my-4">
                <h1 className="text-2xl text-center font-bold uppercase">
                  Daw Yu Yu Min
                </h1>
                <p className="text-gray-400 text-center uppercase">
                  Senior Engineer
                </p>
              </div>
              <div className="team-social flex flex-col gap-y-2">
                <div className="team-social-icon">
                  <a href="/">
                    <FaTwitter />
                  </a>
                </div>
                <div className="team-social-icon">
                  <a href="/">
                    <FaFacebook />
                  </a>
                </div>
                <div className="team-social-icon">
                  <a href="/">
                    <FaInstagram />
                  </a>
                </div>
                <div className="team-social-icon">
                  <a href="/">
                    <FaGoogle />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-card bg-white shadow-md">
              <img src={engineerIgm4} alt="" className="w-100 h-auto" />
              <div className="card-content my-4">
                <h1 className="text-2xl text-center font-bold uppercase">
                  U Myint Oo
                </h1>
                <p className="text-gray-400 text-center uppercase">
                  Senior Engineer
                </p>
              </div>
              <div className="team-social flex flex-col gap-y-2">
                <div className="team-social-icon">
                  <a href="/">
                    <FaTwitter />
                  </a>
                </div>
                <div className="team-social-icon">
                  <a href="/">
                    <FaFacebook />
                  </a>
                </div>
                <div className="team-social-icon">
                  <a href="/">
                    <FaInstagram />
                  </a>
                </div>
                <div className="team-social-icon">
                  <a href="/">
                    <FaGoogle />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Roll>
      </div>
    </div>
  );
};

export default Team;
