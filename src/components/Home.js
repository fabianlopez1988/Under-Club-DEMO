import React from 'react'
import Header from "../components/Header";
import ShortHistory from './ShortHistory';

const Home = () => {
  return (
    <div>{<Header />}
        {<ShortHistory />}
</div>
  )
}

export default Home
