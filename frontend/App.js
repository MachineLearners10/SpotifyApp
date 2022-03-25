import React from "react";
import MainRoutes from "./components/MainRoutes";
import SideBar from "./components/SideBar";
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";
import history from "./history";

const App = () => {
  return (
    <div history={history}>
      <MainRoutes />
      <TopMenu />
      <SideBar />
      <Footer />
    </div>
  );
};

export default App;
