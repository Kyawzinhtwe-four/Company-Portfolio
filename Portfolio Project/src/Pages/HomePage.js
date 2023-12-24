import React from "react";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import Construction from "../components/Construction/Construction";
import Services from "../components/Services/Services";
import Counter from "../components/Counter/Counter";
import Team from "../components/Team/Team";
import Projects from "../components/Projects/Projects";
import Pricing from "../components/Pricing/Pricing";
import Testimonial from "../components/Testimonial/Testimonial";
import Blogs from "../components/Blogs/Blogs";
import Faq from "../components/Faq/Faq";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>KALAW CHERRY | HOME</title>
      </Helmet>
      <Banner
        title="We Will Be Happy To Take Care Of Your Work"
        since={true}
        isBtn={true}
      />
      <About />
      <Construction />
      <Services />
      <Counter />
      <Team />
      <Projects />
      <Pricing />
      <Testimonial />
      <Blogs />
      <Faq />
    </>
  );
};

export default HomePage;
