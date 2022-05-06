import React from "react";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Genre from "./Genre";
import PlayList from "./PlayList";
import Playlist from "./playlist/Playlist";
import TopMenu from "./TopMenu";
import Footer from "./Footer";
const MainRoutes = () => {
  return (
    <Router history={history}>
      <TopMenu />
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/playlist" element={<PlayList />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default MainRoutes;
