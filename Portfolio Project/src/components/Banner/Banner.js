import React from "react";
import "./Banner.css";
import { BiArrowBack } from "react-icons/bi";
import { Fade, Zoom } from "react-reveal";

const Banner = ({ title, since, isBtn }) => {
  return (
    <div id="banner">
      <div className="overlay">
        <div className="banner-content">
          {since ? (
            <Fade right>
              <h4 className="since">SINCE 1982</h4>{" "}
            </Fade>
          ) : (
            ""
          )}
          <Zoom right>
            <h1 className="uppercase main-header mb-6">{title}</h1>
          </Zoom>
          <div className="flex mt-6 gap-x-6 banner-btn">
            {isBtn ? (
              <Fade right>
                <button className="contact-btn uppercase rounded-sm flex justify-center items-center gap-x-4">
                  Contact Us <BiArrowBack className="text-lg rotate-180" />
                </button>
                <button className="request-btn uppercase rounded-sm flex justify-center items-center gap-x-4">
                  Request A Quote <BiArrowBack className="text-lg rotate-180" />
                </button>
              </Fade>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
