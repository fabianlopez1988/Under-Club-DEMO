import React, { useState, useEffect } from "react";
import axios from "axios";

const IntroCulture = () => {
  const [introCulture, setIntroCulture] = useState([]);

  useEffect(() => {
    axios.get("/api/introculture").then((res) => setIntroCulture(res.data));
  }, []);

  return (
    <section className="intro-culture">
      {!introCulture
        ? null
        : introCulture.map((intro) => <div>{intro.paragraph}</div>)}
    </section>
  );
};

export default IntroCulture;
