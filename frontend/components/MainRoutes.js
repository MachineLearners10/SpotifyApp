import React from "react";
import Login from "./Login";
import HelloWorld from "./HelloWorld";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Genre from "./Genre";
import PlayList from "./PlayList";
import Test from "./playlist/Test";
import About from "./About";
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
          <Route path="/helloWorld" element={<HelloWorld />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/playlist" element={<PlayList />} />
          <Route exact path="/test" element={<Test />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default MainRoutes;
