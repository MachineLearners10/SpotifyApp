import React, { Profiler } from "react";
import {
  Drawer,
  Grid,
  List,
  Avatar,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { AccountCircle, ExitToApp } from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    // backgroundImage: `linear-gradient(#cfd9df,#e2ebf0)`,
    // backgroundImage: `linear-gradient(#4f5b62,#e2ebf0)`,
    backgroundImage: `linear-gradient(#338a3e,#e2ebf0)`,
    color: "black",
    fontWeight: "bold",
  },
  bigAvatar: {
    margin: 30,
    width: 100,
    height: 100,
  },
}));

function Sidebar({ token }) {
  const classes = useStyles();

  return (
    <Drawer
      open={true}
      variant="permanent"
      anchor="left"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Avatar
            src={"../../public/images/HappyFaceSmiling.png"}
            className={classes.bigAvatar}
          />
        </Grid>
      </Grid>
      <List>
        <ListItem button>
          <ListItemIcon>
            <AccountCircle /> Profile
          </ListItemIcon>
          <ListItemText />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ExitToApp />
            Sing out
          </ListItemIcon>
          <ListItemText />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
