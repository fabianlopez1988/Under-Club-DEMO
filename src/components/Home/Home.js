import React from "react";
import Header from "../Header/Header";
import ShortHistory from "../ShortHistory/ShortHistory";
import Footer from "../Footer/Footer";

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
