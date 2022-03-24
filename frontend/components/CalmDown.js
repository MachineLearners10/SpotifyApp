import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createGenre } from "../redux/mood";

class CalmDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createGenre({ ...this.state });
  }

  render() {
    const genres = [
      "ambient",
      "blues",
      "bossanova",
      "chill",
      "classical",
      "gospel",
      "guitar",
      "jazz",
      "piano",
      "romance",
      "sleep",
      "soul",
      "study",
    ];
    // const genres = ["chill", "rap", "hip-hop", "edm", "rock"];

    const { handleSubmit, handleChange } = this;

    return (
      <div className="main-content">
        <h1 className="genre">Select a genre</h1>
        <div className="container3">
          {genres.map((genre, index) => {
            return (
              <div key={index}>
                <form onSubmit={handleSubmit}>
                  <Link to="/playlist">
                    <button onChange={handleChange} className="button-style">
                      {genre}
                    </button>
                  </Link>
                </form>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    mood: state.mood,
  };
};

const mapDispatch = (dispatch) => {
  return {
    createGenre: () => {
      return dispatch(createGenre());
    },
  };
};

export default connect(mapState, mapDispatch)(CalmDown);
