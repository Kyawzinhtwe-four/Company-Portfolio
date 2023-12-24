import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../components/Banner/Banner";
import Blogs from "../components/Blogs/Blogs";

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>KALAW CHERRY | BLOG</title>
      </Helmet>
      <Banner title="Blog Page" since={false} isBtn={false} />
      <Blogs />
    </>
  );
};

export default BlogPage;
