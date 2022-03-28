import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Face";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#000a12",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function TopMenu() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <MenuItem>
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="h6" className={classes.title}>
            About
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="h6" className={classes.title}>
            Sing out
          </Typography>
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
}

export default TopMenu;
