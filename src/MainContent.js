import React from "react";
import { Typography, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    backgroundColor: "#263238",
    padding: theme.spacing(3),
    color: "white",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fullWidth: {
    width: "100%",
  },
}));

function MainContent() {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>
      <div className={classes.toolbar} />
      <div className={classes.title}>
        <Typography variant="h6">SpotifyApp</Typography>
      </div>
      <div className={classes.content}>
        <Typography paragraph>Hello world!</Typography>
      </div>
    </main>
  );
}

export default MainContent;
