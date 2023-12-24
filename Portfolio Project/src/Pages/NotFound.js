import React from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>KALAW CHERRY | PAGE NOT FOUND</title>
      </Helmet>
      <div className="w-100 min-h-screen grid place-items-center">
        <h1 className="text-3xl text-center primary-color mb-6">
          Page Not Found
        </h1>
        <link>
          <button to="/">Go Back Home</button>
        </link>
      </div>
    </>
  );
};

export default NotFound;
