import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../components/Banner/Banner";
import Projects from "../components/Projects/Projects";

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>KALAW CHERRY | PROJECT PAGE</title>
      </Helmet>
      <Banner title="Project Page" since={false} isBtn={false} />
      <Projects />
    </>
  );
};

export default ProjectsPage;
