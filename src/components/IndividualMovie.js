import React, { Component } from "react";
import "../assets/css/IndividualMovie.css";

class IndividualMovie extends Component {
  state = {
    movieWatched: false
  };

  checkMovieWatched = () => {
    if (!this.state.movieWatched) {
      this.setState({ movieWatched: true });
    } else {
      this.setState({ movieWatched: false });
    }
  };

  render() {
    const movieWatched = this.state.movieWatched ? "watched" : "";
    return (
      <li className="individual-movie">
        <div>
          <div
            className={`check-box ${movieWatched}`}
            onClick={this.checkMovieWatched}
          />
          <h3 className={movieWatched}>{this.props.name}</h3>
        </div>
      </li>
    );
  }
}

export default IndividualMovie;
