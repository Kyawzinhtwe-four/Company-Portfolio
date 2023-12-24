import React, { useState } from "react";
import "./Header.css";
import { BiMenu } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  let activeClassName = "activeClassName";

  return (
    <div className="bg-gray-900 overflow-hidden">
      <div className="container flex justify-between mx-auto items-center">
        <div>
          <h1 className="uppercase text-xl py-6 px-3 font-bold text-gray-700 logo">
            KALAW CHERRY QUALITY CONTROL TEAM
          </h1>
        </div>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="bg-transparent mr-2 border-0 flex text-white text-lg items-center ml-4 md:hidden"
        >
          <BiMenu />
          <span className="ml-1">MENU</span>
        </button>
        <div
          className={`fixed md:static ${
            showMenu ? "" : "hidden md:block"
          } bg-gray-700 md:bg-transparent w-full overflow-hidden z-50 top-[140px] md:top-0 md:w-auto`}
        >
          <ul className="flex items-start md:items-center flex-col md:flex-row">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${activeClassName} px-3 mx-4 py-6 block text-white uppercase`
                    : "px-3 mx-4 py-6 block text-gray-500 uppercase"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? `${activeClassName} px-3 mx-4 py-6 block text-white uppercase`
                    : "px-3 mx-4 py-6 block text-gray-500 uppercase"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive
                    ? `${activeClassName} px-3 mx-4 py-6 block text-white uppercase`
                    : "px-3 mx-4 py-6 block text-gray-500 uppercase"
                }
              >
                Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/project"
                className={({ isActive }) =>
                  isActive
                    ? `${activeClassName} px-3 mx-4 py-6 block text-white uppercase`
                    : "px-3 mx-4 py-6 block text-gray-500 uppercase"
                }
              >
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive
                    ? `${activeClassName} px-3 mx-4 py-6 block text-white uppercase`
                    : "px-3 mx-4 py-6 block text-gray-500 uppercase"
                }
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? `${activeClassName} px-3 mx-4 py-6 block text-white uppercase`
                    : "px-3 mx-4 py-6 block text-gray-500 uppercase"
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? `${activeClassName} px-3 mx-4 py-6 block text-white uppercase`
                    : "px-3 mx-4 py-6 block text-gray-500 uppercase"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
