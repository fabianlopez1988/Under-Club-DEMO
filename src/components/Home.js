import React from "react";
import Header from "../components/Header";
import ShortHistory from "./ShortHistory";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      {<Header />}
      {<ShortHistory />}
      {<Footer />}
    </div>
  );
};

export default Home;
