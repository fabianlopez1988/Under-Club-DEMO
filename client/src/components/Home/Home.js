import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import ShortHistory from "../ShortHistory/ShortHistory";
import Footer from "../Footer/Footer";
import CarouselHome from "../CarouselHome/CarouselHome";

const Home = () => {
  return (
      <div>
        <Header />
        <ShortHistory />
        <CarouselHome />
        <Footer />
      </div>
  );
};

export default Home;
