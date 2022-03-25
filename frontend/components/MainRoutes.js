import React from "react";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EnergizeMe from "./EnergizeMe";
import CalmDown from "./CalmDown";
import PlayList from "./PlayList";
import HelloWorld from "./HelloWorld";
import Test from "./Test";

const MainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/helloWorld" element={<HelloWorld />} />
          <Route path="/energizeme" element={<EnergizeMe />} />
          <Route path="/calmdown" element={<CalmDown />} />
          <Route path="/playlist" element={<PlayList />} />
          <Route exact path="/test" element={<Test />} />
        </Routes>
      </div>
    </Router>
  );
};

export default MainRoutes;
