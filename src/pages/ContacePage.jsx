import React from "react";
import Layout from "../Layout/Layout";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";

const ContacePage = () => {
  return (
    <div>
      <Layout />
      <Contacts />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default ContacePage;
