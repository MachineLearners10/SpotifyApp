import React from "react";
import Login from './Login';
import HelloWorld from './HelloWorld';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const MainRoutes = () => {
    return(
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/helloWorld" element={<HelloWorld />} />
          </Routes>
        </div>
      </Router>
    )
}

export default MainRoutes;
