import React from "react";
import MainRoutes from "./components/MainRoutes";
import SideBar from "./components/SideBar";
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <MainRoutes />
      <TopMenu />
      <SideBar />
      <Footer />
    </div>
  );
};

export default App;
