import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import SlideProducts from "../components/SlideProducts";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <SlideProducts />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
