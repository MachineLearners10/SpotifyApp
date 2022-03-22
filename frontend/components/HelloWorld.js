import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux/user";
import { Link } from "react-router-dom";

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
      <div>
        <h1>Welcome, {this.props.user.spotifyId}</h1>
        <h2 className="subtitle">What's the vibe today</h2>
        <div className="container">
          <Link to="/energizeme">
            <button>Energize me </button>
          </Link>
          <Link to="/calmdown">
            <button>Calm Down </button>
          </Link>
        </div>
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
