import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux/user";
import { Link } from "react-router-dom";
import { Typography, makeStyles, Grid } from "@material-ui/core";
import { createMood } from "../redux/mood";

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
      mood: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createMood({ ...this.state });
  }

  render() {
    const { mood } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <div className="main-content">
        <h1 className="welcome">Welcome, {this.props.user.spotifyId}</h1>
        <h2 className="welcome-subtitle">What's the vibe today?</h2>
        <div className="container2">
          <form onSubmit={handleSubmit}>
            <Link to="/energizeme">
              <button
                type="submit"
                className="button-style"
                onChange={handleChange}
              >
                Energize me{" "}
              </button>
            </Link>
            <Link to="/calmdown">
              <button
                type="submit"
                className="button-style"
                onChange={handleChange}
              >
                Calm me down{" "}
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    user: state.user,
    mood: state.mood,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchUser: () => {
      return dispatch(fetchUser());
    },
    createMood: () => {
      return dispatch(createMood());
    },
  };
};

export default connect(mapState, mapDispatch)(HelloWorld);
