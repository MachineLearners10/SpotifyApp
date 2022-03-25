import { userSetter } from "core-js/fn/symbol";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addMood } from "../redux/mood";

class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
    function pageRedirect(value) {
      if (value === "Energize me") {
        return window.location.replace("http://localhost:8888/energizeme");
      } else if (value === "Calm me down") {
        return window.location.replace("http://localhost:8888/calmdown");
      }
    }
    pageRedirect(evt.target.value);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addMood({ ...this.state });
  }

  render() {
    const list = ["Energize me", "Calm me down"];
    const { handleSubmit, handleInput } = this;

    return (
      <form className="container2" onSubmit={handleSubmit}>
        {list.map((mood, index) => {
          return (
            <div key={index}>
              <button
                type="submit"
                className="button-style"
                onClick={handleInput}
                value={mood}
                name="mood"
              >
                {mood}
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
    addMood: (mood) => {
      return dispatch(addMood(mood));
    },
  };
};

export default connect(null, mapDispatch)(Mood);
