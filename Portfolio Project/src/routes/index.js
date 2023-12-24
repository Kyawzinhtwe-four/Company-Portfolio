import React from "react";
import { useRoutes } from "react-router";
import Layout from "../Layouts";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import ServicesPage from "../Pages/ServicesPage";
import ProjectsPage from "../Pages/ProjectsPage";
import PricingPage from "../Pages/PricingPage";
import BlogPage from "../Pages/BlogPage";
import ContactPage from "../Pages/ContactPage";
import NotFound from "../Pages/NotFound";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          element: <HomePage />,
          index: true,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "service",
          element: <ServicesPage />,
        },
        {
          path: "project",
          element: <ProjectsPage />,
        },
        {
          path: "pricing",
          element: <PricingPage />,
        },
        {
          path: "blog",
          element: <BlogPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return routes;
};

export default Router;
