import React from "react";
import Layout from "../Layout/Layout";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";

const BlogPage = () => {
  return (
    <div>
      <Layout />
      <Blogs />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default BlogPage;
