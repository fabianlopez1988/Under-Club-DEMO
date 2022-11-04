import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import History from "./components/History/History";
import Artists from "./components/Artists/Artists";
import Home from "./components/Home/Home";
import Login from "./components/LoginAdmin/Login";
import Culture from "./components/Culture/Culture";
import Events from "./components/Events/Events";

import PanelAdmin from "./components/PanelAdmin/PanelAdmin";

import OurClub from "./components/PanelAdmin/Options/OurClub/OurClub";
import Users from "./components/PanelAdmin/Options/Users/Users";
import Residents from "./components/PanelAdmin/Options/OurClub/Residents/Residents";

import AddResidents from "./components/PanelAdmin/Options/OurClub/Residents/AddResidents/AddResidents";
import UpdateResidents from "./components/PanelAdmin/Options/OurClub/Residents/UpdateResidents/UpdateResidents";
import EditViewResidents from "./components/PanelAdmin/Options/OurClub/Residents/EditViewResidents/EditViewResidents";
import DeleteResidents from "./components/PanelAdmin/Options/OurClub/Residents/DeleteResidents/DeleteResidents";

import EventsAdmin from "./components/PanelAdmin/Options/Events/EventsAdmin";
import AddEvents from "./components/PanelAdmin/Options/Events/AddEvents/AddEvents";
import EditEvents from "./components/PanelAdmin/Options/Events/EditEvents/EditEvents";
import DeleteEvent from "./components/PanelAdmin/Options/Events/DeleteEvent/DeleteEvent";
import UpdateEvents from "./components/PanelAdmin/Options/Events/UpdateEvents/UpdateEvents";
import Milestone from "./components/Milestone/Milestone";
import Contact from "./components/Contact/Contact";

import PodcastAdmin from "./components/PanelAdmin/Options/OurClub/Podcast/PodcastAdmin";
import AddPodcast from "./components/PanelAdmin/Options/OurClub/Podcast/AddPodcast/AddPodcast";
import DeletePodcast from "./components/PanelAdmin/Options/OurClub/Podcast/DeletePodcast/DeletePodcast";
import UpdatePodcast from "./components/PanelAdmin/Options/OurClub/Podcast/UpdatePodcast/UpdatePodcast";
import EditViewPodcast from "./components/PanelAdmin/Options/OurClub/Podcast/EditViewPodcast/EditViewPodcast";

import EpisodeAdmin from "./components/PanelAdmin/Options/OurClub/Episodes/EpisodeAdmin";
import AddEpisode from "./components/PanelAdmin/Options/OurClub/Episodes/AddEpisode/AddEpisode";
import DeleteEpisode from "./components/PanelAdmin/Options/OurClub/Episodes/DeleteEpisode/DeleteEpisode";
import UpdateEpisode from "./components/PanelAdmin/Options/OurClub/Episodes/UpdateEpisode/UpdateEpisode";
import EditViewEpisode from "./components/PanelAdmin/Options/OurClub/Episodes/EditViewEpisode/EditViewEpisode";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/history" element={<History />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/events" element={<Events />} />
        <Route path="/milestones" element={<Milestone />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<PanelAdmin />} />

        <Route path="/admin/events" element={<EventsAdmin />} />
        <Route path="/admin/ourclub" element={<OurClub />} />
        <Route path="/admin/users" element={<Users />} />

        <Route path="/admin/ourclub/residents" element={<Residents />} />

        <Route path="/admin/ourclub/podcast" element={<PodcastAdmin />} />
        <Route path="/admin/ourclub/episodes" element={<EpisodeAdmin />} />

        <Route
          path="/admin/ourclub/residents/addresidents"
          element={<AddResidents />}
        />
        <Route
          path="/admin/ourclub/residents/updateresidents"
          element={<UpdateResidents />}
        />
        <Route
          path="/admin/ourclub/residents/updateresidents/:id"
          element={<EditViewResidents />}
        />
        <Route
          path="/admin/ourclub/residents/deleteresidents"
          element={<DeleteResidents />}
        />

        <Route path="/admin/events/addevents" element={<AddEvents />} />
        <Route path="/admin/events/updateevents" element={<UpdateEvents />} />
        <Route path="/admin/events/updateevents/:id" element={<EditEvents />} />
        <Route path="/admin/events/deleteevent" element={<DeleteEvent />} />

        <Route
          path="/admin/ourclub/podcast/addpodcast"
          element={<AddPodcast />}
        />
        <Route
          path="/admin/ourclub/podcast/updatepodcast"
          element={<UpdatePodcast />}
        />
        <Route
          path="/admin/ourclub/podcast/updatepodcast/:id"
          element={<EditViewPodcast />}
        />
        <Route
          path="/admin/ourclub/podcast/deletepodcast"
          element={<DeletePodcast />}
        />

        <Route
          path="/admin/ourclub/episode/addepisode"
          element={<AddEpisode />}
        />
        <Route
          path="/admin/ourclub/episode/updateepisode"
          element={<UpdateEpisode />}
        />
        <Route
          path="/admin/ourclub/episode/updateepisode/:id"
          element={<EditViewEpisode />}
        />
        <Route
          path="/admin/ourclub/episode/deleteepisode"
          element={<DeleteEpisode />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
