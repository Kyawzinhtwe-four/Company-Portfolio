import React from "react";
import { Helmet } from "react-helmet";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>KALAW CHERRY | SERVICES PAGE</title>
      </Helmet>
      <Banner title="Services Page" isBtn={false} since={false} />
      <Services />
    </>
  );
};

export default ServicesPage;
