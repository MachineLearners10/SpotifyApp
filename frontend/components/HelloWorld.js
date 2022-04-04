import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux/user";
// import { Link } from "react-router-dom";
import { Typography, makeStyles, Grid } from "@material-ui/core";
import Mood from "./Mood";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    // backgroundColor: "#263238",
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

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="main-content">
        <h1 className="welcome">Welcome, {this.props.user.spotifyId} {console.log(this.props.user)}</h1>
        <h2 className="welcome-subtitle">What's the vibe today?</h2>
        <Mood />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchUser: () => {
      return dispatch(fetchUser());
    },
  };
};

export default connect(mapState, mapDispatch)(HelloWorld);
