import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import History from "./components/History/History";
import Artists from "./components/Artists/Artists";
import Home from "./components/Home/Home";
import Login from "./components/LoginAdmin/Login";
import Culture from "./components/Culture/Culture";

import PanelAdmin from "./components/PanelAdmin/PanelAdmin";

import Events from "./components/PanelAdmin/Options/Events/Events"
import InitialVideo from "./components/PanelAdmin/Options/InitialVideo/InitialVideo"
import OurClub from "./components/PanelAdmin/Options/OurClub/OurClub"
import Users from "./components/PanelAdmin/Options/Users/Users"
import Residents from "./components/PanelAdmin/Options/OurClub/Residents/Residents";
import Milestones from "./components/PanelAdmin/Options/OurClub/Milestones/Milestones";
// import CarouselHome from "./components/CarouselHome/CarouselHome";
// import Culture from "./components/PanelAdmin/Options/OurClub/Culture/AddCulture";
import HistoryAdmin from "./components/PanelAdmin/Options/OurClub/History/History"
import AddHistory from "./components/PanelAdmin/Options/OurClub/History/AddHistory/AddHistory";
import DeleteHistory from "./components/PanelAdmin/Options/OurClub/History/DeleteHistory/DeleteHistory";
import UpdateHistory from "./components/PanelAdmin/Options/OurClub/History/UpdateHistory/UpdateHistory";
import AddMilestones from "./components/PanelAdmin/Options/OurClub/Milestones/AddMilestones/AddMilestones";
import UpdateMilestones from "./components/PanelAdmin/Options/OurClub/Milestones/UpdateMilestones/UpdateMilestones";
import DeleteMilestones from "./components/PanelAdmin/Options/OurClub/Milestones/DeleteMilestones/DeleteMilestones";
import EditViewHistory from "./components/PanelAdmin/Options/OurClub/History/EditViewHistory/EditViewHistory";
import AddResidents from "./components/PanelAdmin/Options/OurClub/Residents/AddResidents/AddResidents";
import UpdateResidents from "./components/PanelAdmin/Options/OurClub/Residents/UpdateResidents/UpdateResidents";
import EditViewResidents from "./components/PanelAdmin/Options/OurClub/Residents/EditViewResidents/EditViewResidents";
import DeleteResidents from "./components/PanelAdmin/Options/OurClub/Residents/DeleteResidents/DeleteResidents";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/history" element={<History />} />
          <Route path="/culture" element={<Culture />} /> 
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
          <Route path="/admin/ourclub/history" element={<HistoryAdmin />} />

          <Route path="/admin/ourclub/history/addhistory" element={<AddHistory />} />
          <Route path="/admin/ourclub/history/updatehistory" element={<UpdateHistory />} />
          <Route path="/admin/ourclub/history/updatehistory/:id" element={<EditViewHistory />} />
          <Route path="/admin/ourclub/history/deletehistory" element={<DeleteHistory />} />

          <Route path="/admin/ourclub/milestones/addmilestones" element={<AddMilestones/>} />
          <Route path="/admin/ourclub/milestones/updatemilestones" element={<UpdateMilestones/>} />
          <Route path="/admin/ourclub/milestones/deletemilestones" element={<DeleteMilestones/>} />

          <Route path="/admin/ourclub/residents/addresidents" element={<AddResidents />} />
          <Route path="/admin/ourclub/residents/updateresidents" element={<UpdateResidents/>} />
          <Route path="/admin/ourclub/residents/updateresidents/:id" element={<EditViewResidents/>} />
          <Route path="/admin/ourclub/residents/deleteresidents" element={<DeleteResidents/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
