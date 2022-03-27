import React from "react";
import { connect } from "react-redux";
import { addGenre } from "../redux/getGenres";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

let count = 0;
let list = [];
class Genre extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(evt) {
    if (list.includes(evt.target.value)) {
      return alert("You'd already chosen this genre");
    } else {
      if (count > 3) {
        return alert("You can't choose more than 5 genres");
      } else {
        this.setState({ [evt.target.name]: evt.target.value });
        list.push(evt.target.value);
        count++;
      }
    }
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addGenre({ ...this.state });
  }

  render() {
    const list = [
      "acoustic",
      "country",
      "dance",
      "dancehall",
      "disco",
      "electronic",
      "hip-hop",
      "holidays",
      "indie-pop",
      "k-pop",
      "latin",
      "latino",
      "party",
      "pop",
      "reggae",
      "reggaeton",
      "rock",
    ];
    const { handleSubmit, handleInput } = this;

    return (
      <div className="main-content">
        <h1 className="genre">Select genres up to 4 ({count})</h1>
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
          <Link to="/recommendation">
            <Button>Submit</Button>
          </Link>
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

export default connect(mapState, mapDispatch)(Genre);