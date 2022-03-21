import React from "react";
import TopMenu from "./TopMenu";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopMenu />
      <Sidebar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Home;
