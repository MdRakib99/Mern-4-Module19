import React from "react";
import Layout from "../Layout/Layout";
import Banner from "../components/Banner";
import Slide from "../components/Slide";

import Card from "../components/Card";
import FeatureProject from "../components/FeatureProject";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import Search from "../components/Search";
import Feedback from "../components/Feedback";

const HomePage = () => {
  return (
    <div className=''>
      <div>
        <Search />
      </div>
      <div className=' '>
        <Layout />
      </div>
      <div className=''>
        <Banner />
      </div>
      <div className=' '>
        <Slide />
      </div>

      <div className=''>
        <Card />
      </div>
      <div className=''>
        <FeatureProject />
      </div>
      <div>
        <Feedback />
      </div>
      <div>
        <Subscribe />
      </div>
      <div className='bg-[#000000]'>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
