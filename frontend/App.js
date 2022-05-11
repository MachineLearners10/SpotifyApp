import React from "react";
import MainRoutes from "./components/MainRoutes";
import history from "./history";

const App = () => {
  return (
    <div history={history}>
      {performance.navigation.type === performance.navigation.TYPE_RELOAD &&
        window.location.replace("http://localhost:8888")}
      <MainRoutes />
    </div>
  );
};

export default App;
