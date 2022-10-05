import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import History from "./components/History/History";
import Artists from "./components/Artists/Artists";
import Home from "./components/Home/Home";
import Login from "./components/LoginAdmin/Login";
import Culture from "./components/Culture/Culture";
import Events from "./components/Events/Events"

import PanelAdmin from "./components/PanelAdmin/PanelAdmin";

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
import EditViewHistory from "./components/PanelAdmin/Options/OurClub/History/EditViewHistory/EditViewHistory";

import AddMilestones from "./components/PanelAdmin/Options/OurClub/Milestones/AddMilestones/AddMilestones";
import UpdateMilestones from "./components/PanelAdmin/Options/OurClub/Milestones/UpdateMilestones/UpdateMilestones";
import DeleteMilestones from "./components/PanelAdmin/Options/OurClub/Milestones/DeleteMilestones/DeleteMilestones";

import CultureAdmin from "./components/PanelAdmin/Options/OurClub/Culture/CultureAdmin";
import AddCulture from "./components/PanelAdmin/Options/OurClub/Culture/AddCulture/AddCulture";
import DeleteCulture from "./components/PanelAdmin/Options/OurClub/Culture/DeleteCulture/DeleteCulture";
import UpdateCulture from "./components/PanelAdmin/Options/OurClub/Culture/UpdateCulture/UpdateCulture";
import EditViewCulture from "./components/PanelAdmin/Options/OurClub/Culture/EditViewCulture/EditViewCulture";

import IntroCultureAdmin from "./components/PanelAdmin/Options/OurClub/IntroCulture/IntroCultureAdmin";
import AddIntroCulture from "./components/PanelAdmin/Options/OurClub/IntroCulture/AddIntroCulture/AddIntroCulture";
import EditViewIntroCulture from "./components/PanelAdmin/Options/OurClub/IntroCulture/EditViewIntroCulture/EditViewIntroCulture";

import EventsAdmin from "./components/PanelAdmin/Options/Events/EventsAdmin";
import AddEvents from "./components/PanelAdmin/Options/Events/AddEvents/AddEvents";
import EditEvents from "./components/PanelAdmin/Options/Events/EditEvents/EditEvents";
import DeleteEvents from "./components/PanelAdmin/Options/Events/DeleteEvents/DeleteEvents";
import UpdateEvents from "./components/PanelAdmin/Options/Events/UpdateEvents/UpdateEvents";

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

          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<PanelAdmin/>} />

          <Route path="/admin/events" element={<EventsAdmin/>} />
          <Route path="/admin/initialvideo" element={<InitialVideo/>} />
          <Route path="/admin/ourclub" element={<OurClub/>} />
          <Route path="/admin/users" element={<Users/>} />

          <Route path="/admin/ourclub/residents" element={<Residents/>} />
          <Route path="/admin/ourclub/milestones" element={<Milestones/>} />
          <Route path="/admin/ourclub/culture" element={<CultureAdmin/>} />
          <Route path="/admin/ourclub/history" element={<HistoryAdmin />} />
          <Route path="/admin/ourclub/introculture" element={<IntroCultureAdmin/>} />

          <Route path="/admin/ourclub/history/addhistory" element={<AddHistory />} />
          <Route path="/admin/ourclub/history/updatehistory" element={<UpdateHistory />} />
          <Route path="/admin/ourclub/history/updatehistory/:id" element={<EditViewHistory />} />
          <Route path="/admin/ourclub/history/deletehistory" element={<DeleteHistory />} />

          <Route path="/admin/ourclub/milestones/addmilestones" element={<AddMilestones/>} />
          <Route path="/admin/ourclub/milestones/updatemilestones" element={<UpdateMilestones/>} />
          <Route path="/admin/ourclub/milestones/deletemilestones" element={<DeleteMilestones/>} />

          <Route path="/admin/ourclub/culture/addculture" element={<AddCulture />} />
          <Route path="/admin/ourclub/culture/updateculture" element={<UpdateCulture />} />
          <Route path="/admin/ourclub/culture/updateculture/:id" element={<EditViewCulture />} />
          <Route path="/admin/ourclub/culture/deleteculture" element={<DeleteCulture />} />


          <Route path="/admin/ourclub/introculture/addintroculture" element={<AddIntroCulture />} />
          <Route path="/admin/ourclub/introculture/editviewintroculture" element={<EditViewIntroCulture />} />

          <Route path="/admin/events/addevents" element={<AddEvents />} />
          <Route path="/admin/events/updateevents" element={<UpdateEvents />} />
          <Route path="/admin/events/updateevents/:id" element={<EditEvents />} />
          <Route path="/admin/events/deleteevents" element={<DeleteEvents />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
