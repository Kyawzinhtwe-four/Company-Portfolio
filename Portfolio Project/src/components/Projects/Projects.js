import React from "react";
import "./Projects.css";
import projectImg1 from "../../assets/images/project_1.webp";
import projectImg2 from "../../assets/images/project_2.webp";
import projectImg3 from "../../assets/images/project_3.webp";
import projectImg4 from "../../assets/images/project_4.webp";
import projectImg5 from "../../assets/images/project_5.webp";
import projectImg6 from "../../assets/images/project_6.webp";
import { BiSearch } from "react-icons/bi";
import { Rotate, Zoom } from "react-reveal";

const Projects = () => {
  return (
    <div className="projects w-100 min-h-screen grid place-items-center">
      <div className="container mx-auto px-6 md:px-24">
        <Zoom bottom>
          <h4 className="text-lg primary-color text-center mb-4 font-bold my-4">
            Protfolio
          </h4>
          <h1 className="text-3xl md:text-6xl font-bold text-center mb-10 my-4 md:my-6">
            Projects
          </h1>
        </Zoom>
      </div>
      <Rotate bottom left>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="project-card rounded-md">
            <img src={projectImg1} className="project-img" />
            <div className="project-content">
              <h4 className="text-white uppercase font-bold">buildings</h4>
              <h1 className="text-white text-3xl uppercase font-bold">
                Hight Tower Works
              </h1>
            </div>
            <div className="project-search">
              <BiSearch />
            </div>
          </div>
          <div className="project-card rounded-md">
            <img src={projectImg2} className="project-img" />
            <div className="project-content">
              <h4 className="text-white uppercase font-bold">buildings</h4>
              <h1 className="text-white text-3xl uppercase font-bold">
                Hight Tower Works
              </h1>
            </div>
            <div className="project-search">
              <BiSearch />
            </div>
          </div>
          <div className="project-card rounded-md">
            <img src={projectImg3} className="project-img" />
            <div className="project-content">
              <h4 className="text-white uppercase font-bold">buildings</h4>
              <h1 className="text-white text-3xl uppercase font-bold">
                Hight Tower Works
              </h1>
            </div>
            <div className="project-search">
              <BiSearch />
            </div>
          </div>
          <div className="project-card rounded-md">
            <img src={projectImg4} className="project-img" />
            <div className="project-content">
              <h4 className="text-white uppercase font-bold">buildings</h4>
              <h1 className="text-white text-3xl uppercase font-bold">
                Hight Tower Works
              </h1>
            </div>
            <div className="project-search">
              <BiSearch />
            </div>
          </div>
          <div className="project-card rounded-md">
            <img src={projectImg5} className="project-img" />
            <div className="project-content">
              <h4 className="text-white uppercase font-bold">buildings</h4>
              <h1 className="text-white text-3xl uppercase font-bold">
                Hight Tower Works
              </h1>
            </div>
            <div className="project-search">
              <BiSearch />
            </div>
          </div>
          <div className="project-card rounded-md">
            <img src={projectImg6} className="project-img" />
            <div className="project-content">
              <h4 className="text-white uppercase font-bold">buildings</h4>
              <h1 className="text-white text-3xl uppercase font-bold">
                Hight Tower Works
              </h1>
            </div>
            <div className="project-search">
              <BiSearch />
            </div>
          </div>
        </div>
      </Rotate>
    </div>
  );
};

export default Projects;
