import React, { useEffect, useState } from "react";
import axios from "axios";

const PruebaFoto = () => {
  const [foto, setFoto] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/residents/")
      .then((res) => setFoto(res.data));
    }, []);
    console.log(foto[1].photo.data)

  return (
    <div>
      <img src={foto && foto[1]} alt="SOYLAFOTO QUENO CARGA"/>
    </div>
  );
};

export default PruebaFoto;
