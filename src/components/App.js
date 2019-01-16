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
        <div className="checklist">
          <h1 className="title">Star Wars Movie Checklist</h1>
          <div className="checklist-items">
            <ul>{individualMovie}</ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
