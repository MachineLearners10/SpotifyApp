import React from "react";
import { connect } from "react-redux";
import { addGenre } from "../redux/getGenres";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { fetchUser } from "../redux/user";

let count = 0;
let list = [];
class Genre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  componentDidMount() {
    this.props.fetchUser();
  }

  handleInput(evt) {
    if (list.includes(evt.target.value)) {
      return alert("You'd already chosen this genre");
    } else {
      if (count > 1) {
        return alert("You can't choose more than 2 genres");
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
      "alternative",
      "ambient",
      "anime",
      "brazil",
      "blues",
      "country",
      "dance",
      "disco",
      "edm",
      "electronic",
      "emo",
      "folk",
      "french",
      "funk",
      "garage",
      "german",
      "goth",
      "groove",
      "grunge",
      "hard-rock",
      "hardcore",
      "heavy-metal",
      "hip-hop",
      "holidays",
      "house",
      "indie",
      "indie-pop",
      "industrial",
      "j-pop",
      "j-rock",
      "k-pop",
      "latino",
      "metal",
      "metalcore",
      "pop",
      "punk",
      "psych-rock",
      "reggae",
      "reggaeton",
      "rock",
      "r-n-b",
      "ska",
      "spanish",
      "soul",
    ];
    const { handleSubmit, handleInput } = this;

    return (
      <div className="main-content">
        <h1 className="genre">Select genres up to 2 ({count})</h1>
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

          <Link to="/playlist">
            <button className="button-submit">Submit</button>
          </Link>
        </form>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    user: state.user,
    genre: state.genre,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchUser: () => {
      return dispatch(fetchUser());
    },
    addGenre: (genre) => {
      return dispatch(addGenre(genre));
    },
  };
};

export default connect(mapState, mapDispatch)(Genre);
