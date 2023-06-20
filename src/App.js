import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";

import About from "./pages/About";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Download from "./pages/Download";
import Contact from "./pages/Contact";
import Chat from "./pages/Chat";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VideoCall from "./pages/VideoCall";
import StudentGallery from "./pages/StudentGallery";
import SingleStudent from "./components/main/SingleStudent";
import UilReact from "@iconscout/react-unicons/icons/uil-react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="download" element={<Download />} />
        <Route path="contact" element={<Contact />} />
        <Route path="chat" element={<Chat />} />
        <Route path="faq" element={<Faq />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="videocall" element={<VideoCall />} />
        <Route path="students" element={<StudentGallery />} />
        <Route path="students/:id" element={<SingleStudent />} />
      </Routes>
    </>
  );
}

export default App;
