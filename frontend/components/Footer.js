import React from "react";
import { AppBar, Typography, makeStyles } from "@material-ui/core";
import { ImageListItem } from "@material-ui/core";
import { ImageList } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: "#000a12",
    display: "flex",
    justifyContent: "space-between",
  },
  footer1: {
    marginLeft: 20,
    fontSize: 17,
  },
  footer2: {
    marginRight: 20,
  },
  image: {
    width: 5,
    height: 5,
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Typography variant="h6" className={classes.footer1}>
        SpotifyApp
      </Typography>
      {/* <ImageList
      // className={classes.footer2}
      // sx={{ width: 10, height: 10 }}
      // cols={5}
      // rowHeight={16}
      >
        <ImageListItem className={classes.image}>
          <img src={require("./Images/SpotifyIcon.png")} alt="" />
          <img src={require("./Images/GithubIcon.png")} alt="" />
          <img src={require("./Images/FacebookIcon.png")} alt="" />
          <img src={require("./Images/InstagramIcon.png")} alt="" />
        </ImageListItem>
      </ImageList> */}
    </AppBar>
  );
}

export default Footer;
