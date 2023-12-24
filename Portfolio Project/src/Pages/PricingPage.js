import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../components/Banner/Banner";
import Pricing from "../components/Pricing/Pricing";

const PricingPage = () => {
  return (
    <>
      <Helmet>
        <title>KALAW CHERRY | PRICING PAGE</title>
      </Helmet>
      <Banner since={false} title="Pricing Page" isBtn={false} />
      <Pricing />
    </>
  );
};

export default PricingPage;
