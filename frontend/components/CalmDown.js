import React from "react";
import { connect } from "react-redux";
import { addGenre } from "../redux/genres";

let count = 0;
class CalmDown extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
    count++;
    function pageRedirect(i) {
      if (i > 4) {
        return window.location.replace("http://localhost:8888/playlist");
      }
    }
    pageRedirect(count);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addGenre({ ...this.state });
  }

  render() {
    const list = [
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

    const { handleSubmit, handleInput } = this;

    return (
      <div className="main-content">
        <h1 className="genre">Select genres (up to 5) </h1>
        <form className="container3" onSubmit={handleSubmit}>
          {list.map((genre, index) => {
            return (
              <div key={index}>
                <button
                  onClick={handleInput}
                  name="genre"
                  value={genre}
                  className="button-style"
                >
                  {genre}
                </button>
              </div>
            );
          })}
        </form>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    genre: state.genre,
  };
};

const mapDispatch = (dispatch) => {
  return {
    addGenre: (genre) => {
      return dispatch(addGenre(genre));
    },
  };
};

export default connect(mapState, mapDispatch)(CalmDown);
