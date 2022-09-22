// import React, { useState, useEffect } from "react";
// import axios from 'axios'
// import "./PruebaFoto.css"

// function PruebaFoto() {
//   const [baseImage, setBaseImage] = useState("");

//   const [resident, setResident] = useState("")

//   const uploadImage = async (e) => {
//     const file = e.target.files[0];
//     const base64 = await convertBase64(file);
//     console.log(base64);
//     setBaseImage(base64);
//     axios
//     .post("/api/residents/add",{
//       photo: base64
//     })
//     .then((res)=>console.log(res.data))
//   };

//   const convertBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const fileReader = new FileReader();
//       fileReader.readAsDataURL(file);

//       fileReader.onload = () => {
//         resolve(fileReader.result);
//       };

//       fileReader.onerror = (error) => {
//         reject(error);
//       };
//     });
//   };

//   useEffect(() => {
//     axios
//       .get("/api/residents")
//       .then((res)=>setResident(res.data));
//     }, []);
   

//     return (
//     <div className="photo-container">
//       <input
//         type="file"
//         onChange={(e) => {
//           uploadImage(e);
//         }}
//       />
//       <br></br>
//       <img src={baseImage} height="200px" />
//       {
//         !resident ? null : (
//           <img src={resident[1].photo}/>
//         )
//       }
//     </div>
//   );
// }

// export default PruebaFoto;


import React from 'react'

const PruebaFoto = () => {

  const [resident, setResident] = useState("")

    const uploadImage = async (e) => {
    const file = e.target.files[0];
    setBaseImage(file);
    axios
    .post("../../assets",{
      photo: file
    })
    .then((res)=>console.log(res.data))
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  
  return (
    <div>PruebaFoto</div>
  )
}

export default PruebaFoto