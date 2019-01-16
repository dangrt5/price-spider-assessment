import React, { Component, Fragment } from "react";
import IndividualMovie from "./IndividualMovie";
import movieList from "../helpers/movies";
import "../assets/css/App.css";

class App extends Component {
  state = {
    movieChecked: false
  };

  render() {
    const individualMovie = movieList.map(movie => {
      return <IndividualMovie name={movie.name} />;
    });

    return (
      <Fragment>
        <div className="title">
          <h1>Star Wars Movie Checklist</h1>
        </div>
        <div className="checklist">
          <div className="checklist-items">
            <ul>{individualMovie}</ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
