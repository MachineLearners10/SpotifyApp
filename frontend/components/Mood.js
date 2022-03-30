import React from "react";
import { connect } from "react-redux";
import { addGenre } from "../redux/getGenres";

class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.props.addMood({genre: event.target.value});
    function pageRedirect() {
      return window.location.replace(
        // `https://catch-a-vibe.herokuapp.com/genre`
        "http://localhost:8888/genre"
      );
    }
    pageRedirect();
  }

  render() {
    const list = ["happy", "chill"];
    const { handleInput } = this;

    return (
      <form className="container2">
        {list.map((genre, index) => {
          return (
            <div key={index}>
              <button
                type="button"
                className="button-style"
                onClick={handleInput}
                value={genre}
                name="genre"
              >
                {genre}
              </button>
            </div>
          );
        })}
      </form>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addMood: (genre) => {
      return dispatch(addGenre(genre));
    },
  };
};

export default connect(null, mapDispatch)(Mood);
