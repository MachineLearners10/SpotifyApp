import React from "react";
import { connect } from "react-redux";
import { addGenre } from "../redux/getGenres";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { fetchUser } from "../redux/user";

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
    this.setState({ [evt.target.name]: evt.target.value });
    list.push(evt.target.value);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addGenre({ ...this.state });
  }

  render() {
    const list = [
      "acoustic",
      "alternative",
      "blues",
      "country",
      "disco",
      "edm",
      "emo",
      "folk",
      "french",
      "hip-hop",
      "holidays",
      "house",
      "indie",
      "k-pop",
      "latino",
      "metal",
      "pop",
      "punk",
      "reggae",
      "reggaeton",
      "rock",
      "r-n-b",
      "soul",
    ];
    const { handleSubmit, handleInput } = this;

    return (
      <div className="main-content">
        <h1 className="genre">Select genres</h1>
        <form className="container3" onSubmit={handleSubmit}>
          {list.map((genre, index) => {
            return (
              <div key={index}>
                <button
                  onClick={handleInput}
                  name="genre"
                  value={genre}
                  className={
                    handleInput ? "button-style clicked" : "button-style"
                  }
                  //
                >
                  {genre}
                </button>
              </div>
            );
          })}
        </form>
        <form className="container4">
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
