import React from "react";
import { connect } from "react-redux";
import { addGenre } from "../redux/getGenres";
import { fetchUser } from "../redux/user";

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
    evt.target.classList = "button-style clicked";
    function pageRedirect() {
      return window.location.replace(
        `https://freeswan.herokuapp.com/playlist`
        // "http://localhost:8888/playlist"
      );
    }
    pageRedirect();
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
        <h1 className="genre">Select a genre</h1>
        <form className="container3" onSubmit={handleSubmit}>
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
