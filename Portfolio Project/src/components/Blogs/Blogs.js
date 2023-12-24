import React from "react";
import blog1 from "../../assets/images/blog_1.webp";
import blog2 from "../../assets/images/blog_2.webp";
import blog3 from "../../assets/images/blog_3.webp";
import "./Blogs.css";
import { BiComment, BiUser } from "react-icons/bi";
import { Roll, Zoom } from "react-reveal";

const Blogs = () => {
  return (
    <div className="blogs w-100 min-h-screen grid place-items-center">
      <div className="container mx-auto px-6 md:px-24">
        <Zoom bottom>
          <h4 className="text-lg primary-color text-center mb-4 font-bold my-4">
            Our Blogs
          </h4>
          <h1 className="text-3xl md:text-6xl font-bold text-center mb-10 my-4 md:my-6">
            Recent Blog
          </h1>
        </Zoom>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 mt-6 md:mt-12">
          <Roll left>
            <div className="blog-card w-100 shadow-xl rounded-md">
              <div className="blog-image relative w-100 overflow-hidden">
                <img src={blog1} className="object-cover w-100 h-[270px]" />
                <div className="p-4 bg-gray-800 absolute bottom-0 left-6 z-10 text-white font-bold text-2xl">
                  16 <br />
                  JAN
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-x-4 my-4">
                  <div className="flex gap-x-3 items-center">
                    <BiUser className="primary-color font-bold" />
                    <p className="font-bold uppercase text-md">Admin</p>
                  </div>
                  <div className="flex gap-x-3 items-center">
                    <BiComment className="primary-color font-bold" />
                    <p className="primary-color uppercase text-md">
                      3 commments
                    </p>
                  </div>
                </div>
                <h1 className="text-2xl md:text-3xl transition duration-500 blog-header">
                  Biggest Construction in New York, USA
                </h1>
                <p className="text-lg text-gray-500 mt-4">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </Roll>
          <Roll bottom>
            <div className="blog-card w-100 shadow-xl rounded-md">
              <div className="blog-image relative w-100 overflow-hidden">
                <img src={blog2} className="object-cover w-100 h-[270px]" />
                <div className="p-4 bg-gray-800 absolute bottom-0 left-6 z-10 text-white font-bold text-2xl">
                  16 <br />
                  JAN
                </div>
              </div>
              <div className="p-4">
                <div className="flex gap-x-4 my-4">
                  <div className="flex gap-x-3 items-center">
                    <BiUser className="primary-color font-bold" />
                    <p className="font-bold uppercase text-md">Admin</p>
                  </div>
                  <div className="flex gap-x-3 items-center">
                    <BiComment className="primary-color font-bold" />
                    <p className="primary-color uppercase text-md">
                      3 commments
                    </p>
                  </div>
                </div>
                <h1 className="text-2xl md:text-3xl transition duration-500 blog-header">
                  Biggest Construction in New York, USA
                </h1>
                <p className="text-lg text-gray-500 mt-4">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </Roll>
          <Roll right>
            <div className="blog-card w-100 shadow-xl rounded-md">
              <div className="blog-image relative w-100 overflow-hidden">
                <img src={blog3} className="object-cover w-100 h-[270px]" />
                <div className="p-4 bg-gray-800 absolute bottom-0 left-6 z-10 text-white font-bold text-2xl">
                  16 <br />
                  JAN
                </div>
              </div>
              <div className="p-4">
                <div className="flex gap-x-4 my-4">
                  <div className="flex gap-x-3 items-center">
                    <BiUser className="primary-color font-bold" />
                    <p className="font-bold uppercase text-md">Admin</p>
                  </div>
                  <div className="flex gap-x-3 items-center">
                    <BiComment className="primary-color font-bold" />
                    <p className="uppercase text-md primary-color">
                      3 commments
                    </p>
                  </div>
                </div>
                <h1 className="text-2xl md:text-3xl transition duration-500 blog-header">
                  Biggest Construction in New York, USA
                </h1>
                <p className="text-lg text-gray-500 mt-4">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </Roll>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
