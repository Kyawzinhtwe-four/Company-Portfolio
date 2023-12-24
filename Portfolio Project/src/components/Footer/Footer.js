import React from "react";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import {
  BiUser,
  BiComment,
  BiMapAlt,
  BiPhone,
  BiMailSend,
  BiHeart,
} from "react-icons/bi";
import projectImg1 from "../../assets/images/project_1.webp";
import projectImg2 from "../../assets/images/project_2.webp";
import projectImg3 from "../../assets/images/project_3.webp";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <div className="h-85vh w-100 bg-zinc-800">
      <div className="py-12 px-4 md:px-8 container mx-auto md:py-28 w-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-6">
          <div className="kalawcherry">
            <h3 className="text-2xl font-bold primary-color uppercase mb-5">
              Kalaw Cherry
            </h3>
            <p className="text-gray-500 mb-3">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <div>
              <ul className="list-none flex">
                <li className="inline">
                  <a
                    href=""
                    className="p-3 primary-color mx-2 bg-gray-700 rounded-sm block"
                  >
                    <BsTwitter />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href=""
                    className="p-3 primary-color mx-2 bg-gray-700 rounded-sm block"
                  >
                    <BsFacebook />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href=""
                    className="p-3 primary-color mx-2 bg-gray-700 rounded-sm block"
                  >
                    <BsInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="services">
            <h3 className="text-xl font-bold primary-color mb-5">Services</h3>
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col md:flex-row gap-4">
                <img src={projectImg1} width={100} height={100} />
                <div className="">
                  <h4 className="font-bold text-white hover:primary-color text-md mb-3">
                    Biggest Construction in New York, USA
                  </h4>
                  <div className="flex gap-x-7">
                    <div className="flex gap-x-2 items-center">
                      <BiUser className="primary-color font-bold" />
                      <p className="primary-color uppercase text-sm">Admin</p>
                    </div>
                    <div className="flex gap-x-2 items-center">
                      <BiComment className="primary-color font-bold" />
                      <p className="primary-color uppercase text-sm">
                        3 comments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <img src={projectImg2} width={100} height={100} />
                <div className="">
                  <h4 className="font-bold text-white hover:primary-color text-md mb-3">
                    Biggest Construction in New York, USA
                  </h4>
                  <div className="flex gap-x-7">
                    <div className="flex gap-x-2 items-center">
                      <BiUser className="primary-color font-bold" />
                      <p className="primary-color uppercase text-sm">Admin</p>
                    </div>
                    <div className="flex gap-x-2 items-center">
                      <BiComment className="primary-color font-bold" />
                      <p className="primary-color uppercase text-sm">
                        3 comments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <img src={projectImg3} width={100} height={100} />
                <div className="">
                  <h4 className="font-bold text-white hover:primary-color text-md mb-3">
                    Biggest Construction in New York, USA
                  </h4>
                  <div className="flex gap-x-7">
                    <div className="flex gap-x-2 items-center">
                      <BiUser className="primary-color font-bold" />
                      <p className="primary-color uppercase text-sm">Admin</p>
                    </div>
                    <div className="flex gap-x-2 items-center">
                      <BiComment className="primary-color font-bold" />
                      <p className="primary-color uppercase text-sm">
                        3 comments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="quickLink">
            <h3 className="text-xl font-bold primary-color mb-5">
              Quick Links
            </h3>
            <div className="flex flex-col gap-y-5">
              <div>
                <a
                  href=""
                  className="text-white font-bold text-lg flex gap-x-2 items-center"
                >
                  <IoIosArrowForward /> <span>Home</span>
                </a>
                <a
                  href=""
                  className="text-white font-bold text-lg flex gap-x-2 items-center"
                >
                  <IoIosArrowForward /> <span>About</span>
                </a>
                <a
                  href=""
                  className="text-white font-bold text-lg flex gap-x-2 items-center"
                >
                  <IoIosArrowForward /> <span>Services</span>
                </a>
                <a
                  href=""
                  className="text-white font-bold text-lg flex gap-x-2 items-center"
                >
                  <IoIosArrowForward /> <span>Project</span>
                </a>
                <a
                  href=""
                  className="text-white font-bold text-lg flex gap-x-2 items-center"
                >
                  <IoIosArrowForward /> <span>Pricing</span>
                </a>
                <a
                  href=""
                  className="text-white font-bold text-lg flex gap-x-2 items-center"
                >
                  <IoIosArrowForward /> <span>Contact Us</span>
                </a>
              </div>
            </div>
          </div>
          <div className="haveaquestion">
            <h3 className="text-xl font-bold primary-color mb-5">
              Have a question?
            </h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-4 items-center">
                <BiMapAlt className="primary-color font-bold text-3xl" />
                <span className="text-gray-300">
                  No.(832), Htutparyone (15) street west <br /> Tharketa
                  Township, Yangon
                </span>
              </div>
              <div className="flex gap-x-4 items-center">
                <BiPhone className="primary-color font-bold text-3xl" />
                <span className="text-gray-300">
                  +959 894 293 724 <br /> +959 771 493 127
                </span>
              </div>
              <div className="flex gap-x-4 items-center">
                <BiMailSend className="primary-color font-bold text-3xl" />
                <span className="text-gray-300">
                  kalawcherry.consultant@gmail.com <br />
                  kyawzinhtwewundwin@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 md:py-12 text-center bg-zinc-600 text-zinc-400">
        Copyright ©2023 All rights reserved | This template is made with by
        <span className="primary-color"> Colorlib</span>
      </div>
    </div>
  );
};

export default Footer;
