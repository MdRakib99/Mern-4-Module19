import React from "react";
import About from "../components/About";
import Layout from "../Layout/Layout";

import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";

const AboutPage = () => {
  return (
    <div>
      <Layout />
      <About />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default AboutPage;
