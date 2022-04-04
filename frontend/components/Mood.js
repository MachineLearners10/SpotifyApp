import React from "react";
import { connect } from "react-redux";
import { addGenre } from "../redux/getGenres";

class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  //
  handleInput(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
    function pageRedirect() {
      return window.location.replace(
        //`https://catch-a-vibe.herokuapp.com/genre`
        "http://localhost:8888/genre"
      );
    }
    pageRedirect();
  }

  componentDidMount() {
    window.localStorage.clear();
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addMood({ ...this.state });
  }

  render() {
    const list = [
      "happy",
      "chill",
      "sad",
      "work-out",
      "study",
      "sleep",
      "romance",
      "party",
    ];
    const { handleSubmit, handleInput } = this;

    return (
      <form className="container2" onSubmit={handleSubmit}>
        {list.map((genre, index) => {
          return (
            <div key={index}>
              <button
                type="submit"
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
