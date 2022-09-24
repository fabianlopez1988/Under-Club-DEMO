import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import History from "./components/History/History";
import Artists from "./components/Artists/Artists";
import Home from "./components/Home/Home";
import Login from "./components/LoginAdmin/Login";

import PanelAdmin from "./components/PanelAdmin/PanelAdmin";

import Events from "./components/PanelAdmin/Options/Events/Events"
import InitialVideo from "./components/PanelAdmin/Options/InitialVideo/InitialVideo"
import OurClub from "./components/PanelAdmin/Options/OurClub/OurClub"
import Users from "./components/PanelAdmin/Options/Users/Users"
import Residents from "./components/PanelAdmin/Options/OurClub/Residents/Residents";
import Milestones from "./components/PanelAdmin/Options/OurClub/Milestones/Milestones";
// import CarouselHome from "./components/CarouselHome/CarouselHome";
import Culture from "./components/PanelAdmin/Options/OurClub/Culture/Culture";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/history" element={<History />} />
          {/* <Route path="/fotos" element={ <Fotos /> } /> */}

          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<PanelAdmin/>} />

          <Route path="/admin/events" element={<Events/>} />
          <Route path="/admin/initialvideo" element={<InitialVideo/>} />
          <Route path="/admin/ourclub" element={<OurClub/>} />
          <Route path="/admin/users" element={<Users/>} />
          <Route path="/admin/ourclub/residents" element={<Residents/>} />
          <Route path="/admin/ourclub/milestones" element={<Milestones/>} />
          <Route path="/admin/ourclub/culture" element={<Culture/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
