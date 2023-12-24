import React from "react";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

const Header = () => {
  return (
    <div className="bg-secondary-color items-center">
      <div className="flex w-100  container mx-auto py-2 items-center gap-x-5">
        <div className="flex-1">
          <div className="w-100 flex justify-between flex-col md:flex-row">
            <div>
              <span className="primary-color">Free Call : </span>
              <span className="text-white">
                <a href="tel: +959894293724">+959 894 293 724</a>
              </span>
            </div>
            <div>
              <span className="primary-color">Email Address : </span>
              <span className="text-white">
                kalawcherry.consultant@gmail.com
              </span>
            </div>
          </div>
        </div>
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
    </div>
  );
};

export default Header;
