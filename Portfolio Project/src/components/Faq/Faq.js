import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="faq">
      <div className="container mx-auto py-6 md:py-12 px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div>
            <h4 className="primary-color font-bold text-lg mb-2 uppercase">
              Drop A Message
            </h4>
            <h2 className="text-3xl mb-2 font-bold">Request A Quote</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 spacing-4 my-4">
              <div className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text font-medium uppercase">
                    Fullname
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered rounded-md w-full max-w-xs focus:outline-none"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text font-medium uppercase ">
                    email address
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Enter Your Email Address"
                  className="input input-bordered rounded-md w-full max-w-xs focus:outline-none"
                />
              </div>
            </div>
            <div className="form-control w-full my-4">
              <div className="label">
                <span className="label-text font-medium uppercase">
                  Select Subject
                </span>
              </div>
              <select className="rounded-md w-full border border-gray-300 select focus:outline-none">
                <option disabled selected>
                  Pick one
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>
            <div className="form-control my-5">
              <div className="label">
                <span className="label-text font-medium uppercase">
                  Message
                </span>
              </div>
              <textarea
                className="textarea textarea-bordered h-60 focus:outline-none"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="bg-primary-color text-white uppercase transition duration-500 px-6 py-3 rounded-md hover:bg-amber-700">
              send message
            </button>
          </div>
          <div className="">
            <h4 className="primary-color font-bold text-lg">
              Frequently Ask Question
            </h4>
            <h1 className="text-3xl md:text-6xl font-bold my-4">
              You Want To Ask Something From Us?
            </h1>
            <p className="text-gray-400 text-left mb-8">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What harsh truths do you prefer to ignore?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Is free will real or just an illusion?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur ea in
                    ut nostrud velit in irure cillum tempor laboris sed
                    adipisicing eu esse duis nulla non.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What harsh truths do you prefer to ignore?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Is free will real or just an illusion?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur ea in
                    ut nostrud velit in irure cillum tempor laboris sed
                    adipisicing eu esse duis nulla non.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
