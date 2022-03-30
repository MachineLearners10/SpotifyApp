import React from "react";
import MainRoutes from "./components/MainRoutes";
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";
import history from "./history";

const App = () => {
  return (
    <div history={history}>
      <MainRoutes />
    </div>
  );
};

export default App;
