import React from "react";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EnergizeMe from "./EnergizeMe";
import CalmDown from "./CalmDown";
import PlayList from "./PlayList";
import HelloWorld from "./HelloWorld";

const MainRoutes = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/helloWorld" element={<HelloWorld />} />
          <Route path="/energizeme" element={<EnergizeMe />} />
          <Route path="/calmdown" element={<CalmDown />} />
          <Route path="/playlist" element={<PlayList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default MainRoutes;
