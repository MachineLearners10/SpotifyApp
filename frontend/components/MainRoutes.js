import React from "react";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Genre from "./Genre";
// import PlayList from "./PlayList";
import HelloWorld from "./HelloWorld";
import Test from "./Test";
import Player from "./Recommendation";

const MainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/helloWorld" element={<HelloWorld />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/recommendation" element={<Player />} />
          <Route exact path="/test" element={<Test />} />
        </Routes>
      </div>
    </Router>
  );
};

export default MainRoutes;
