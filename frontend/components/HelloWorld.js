import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../redux/user';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <p>Welcome, {this.props.user.spotifyId}</p>
    )
  }
}

const mapState = (state) => {
  return {
    user: state.user
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchUser: () => {
      return dispatch(fetchUser())
    },
  }
};

export default connect(mapState, mapDispatch)(HelloWorld);
