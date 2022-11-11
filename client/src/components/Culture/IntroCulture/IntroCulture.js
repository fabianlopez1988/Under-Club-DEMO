// import React, { useState, useEffect } from "react";
// import axios from "axios";

const IntroCulture = () => {
  // const [introCulture, setIntroCulture] = useState([]);

  // useEffect(() => {
  //   axios.get("/api/introculture").then((res) => setIntroCulture(res.data));
  // }, []);

  return (
    <section>
      <p>
        Durante 10 años, nos esforzamos en apoyar, contribuir, y desarrollar la
        cultura techno desde nuestro lugar. Abrirnos a un camino de aprendizaje,
        nos llevó a comprender que hay ciertos valores que son esenciales para
        el crecimiento y el cuidado de dicha cultura:<br></br><br></br>
        AMOR, RESPETO, HUMILDAD.
      </p>
      {/* {!introCulture
        ? null
        : introCulture.map((intro) => <div>{intro.paragraph}</div>)} */}
    </section>
  );
};

export default IntroCulture;
