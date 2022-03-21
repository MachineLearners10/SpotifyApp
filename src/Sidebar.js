// import React from "react";
// import "./Sidebar.css";
// import SidebarOption from "./SidebarOption";
// import HomeIcon from "@material-ui/icons/Home";
// import SearchIcon from "@material-ui/icons/Search";
// import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
// import { getTokenFromResponse } from "./spotify";
// import { useStateValue } from "./StateProvider";

// function Sidebar() {
//   const [{ playlists }, dispatch] = useStateValue();
//   console.log(playlists);

//   return (
//     <div className="sidebar">
//       <img
//         className="sidebar__logo"
//         src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
//         alt=""
//       />
//       <SidebarOption Icon={HomeIcon} option="Home" />
//       <SidebarOption Icon={SearchIcon} option="Search" />
//       <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
//       <br />
//       <strong className="sidebar__title">PLAYLISTS</strong>
//       <hr />
//       {playlists?.items?.map((playlist) => (
//         <SidebarOption option={playlist.name} />
//       ))}
//     </div>
//   );
// }

// export default Sidebar;

import React, { Profiler } from "react";
import {
  Drawer,
  Grid,
  List,
  Avatar,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { AccountCircle, ExitToApp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import { accessUrl } from "./spotify";

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

function Sidebar() {
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
      <Grid container justify="center" alignItems="center">
        <Avatar
          src={require("./Images/HappyFaceSmiling.png")}
          className={classes.bigAvatar}
        />
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
            <a href={accessUrl}> Login in</a>
          </ListItemIcon>
          <ListItemText />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
