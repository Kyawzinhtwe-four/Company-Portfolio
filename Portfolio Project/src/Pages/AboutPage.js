import React from "react";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import { Helmet } from "react-helmet";
import Testimonial from "../components/Testimonial/Testimonial";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>KALAW CHERRY | ABOUT</title>
      </Helmet>
      <Banner title="About Page" since={false} isBtn={false} />
      <About />
      <Testimonial />
    </>
  );
};

export default AboutPage;
