import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import ShortHistory from "../ShortHistory/ShortHistory";
import Footer from "../Footer/Footer";
import CarouselHome from "../CarouselHome/CarouselHome";
import Podcast from "../Podcast/Podcast";
import Episodes from "../Episodes/Episodes";

const Home = () => {
  return (
      <div>
        <Header />
        <ShortHistory />
        {/* <CarouselHome /> */}
        <Podcast />
        <Footer />
        <Episodes />
      </div>
  );
};

export default Home;
