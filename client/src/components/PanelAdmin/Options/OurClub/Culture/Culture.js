import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Culture.css";

function Culture() {
  const [baseImage, setBaseImage] = useState([]);
  const [culture, setCulture] = useState("");

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const blob = URL.createObjectURL(file);
    setBaseImage(blob);
  };

  const handleClick = (blob) => {
    axios
      .post("/api/culture", {
        image: blob,
      })
      .then((res) => res.data);
  };

  useEffect(() => {
    axios.get("/api/culture").then((res) => setCulture(res.data));
  }, [handleClick]);

  return (
    <div className="photo-container">
      <input
        type="file"
        onChange={(e) => {
          uploadImage(e);
        }}
      />
      <br></br>
      <img height={"200px"} src={baseImage} />
      <button onClick={() => handleClick(baseImage)}>guardar</button>
      {/* {<div className="imagenes-container">
      {resident ? (
        resident.map((res, i) => (
            <img height={"200px"} key={i} src={res.photo} alt={res.id} />
        ))
      ) : (
        <h1>no estoy</h1>
      )}

      </div> } */}
    </div>
  );
}

export default Culture;
