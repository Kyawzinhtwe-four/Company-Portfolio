import React from "react";
import Banner from "../components/Banner/Banner";
import Faq from "../components/Faq/Faq";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>KALAW CHERRY | CONTACT PAGE</title>
      </Helmet>
      <Banner title="Contact Page" since={false} isBtn={false} />
      <Faq />
    </>
  );
};

export default ContactPage;
