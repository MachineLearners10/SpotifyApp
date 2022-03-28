import React from "react";
import Login from "./Login";
import HelloWorld from "./HelloWorld";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Genre from "./Genre";
import PlayList from "./PlayList";
import Test from "./playlist/Test";
const MainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/helloWorld" element={<HelloWorld />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/playlist" element={<PlayList />} />
          <Route exact path="/test" element={<Test />} />
        </Routes>
      </div>
    </Router>
  );
};

export default MainRoutes;
