import React from "react";
import Header from "../Header/Header";
import ShortHistory from "../ShortHistory/ShortHistory";
import Footer from "../Footer/Footer";
import CarouselHome from "../CarouselHome/CarouselHome";
import Podcast from "../Podcast/Podcast";
import Episodes from "../Episodes/Episodes";
import Loader from "../Loader/Loader";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <ShortHistory />
          <CarouselHome />
          <Podcast />
          <Episodes />
          <Footer />
        </div>
      )}
    </motion.div>
  );
};

export default Home;