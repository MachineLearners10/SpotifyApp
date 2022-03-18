import React from "react";
import Login from './components/Login';
import HelloWorld from './components/HelloWorld';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Routes = () => {
    return(
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/helloWorld" element={<HelloWorld />} />
          </Routes>
        </div>
      </Router>
    )
}
