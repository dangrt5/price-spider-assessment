import React, { Component, Fragment } from "react";
import IndividualMovie from "./IndividualMovie";
import movieList from "../helpers/movies";
import "../assets/css/App.css";
import darthVader from "../assets/images/darth-vader.png";

class App extends Component {
  render() {
    const individualMovie = movieList.map(movie => {
      return <IndividualMovie name={movie.name} key={movie.name} />;
    });

    return (
      <Fragment>
        <h1 className="title">Star Wars Movie Checklist</h1>
        <img id="darth-vader" src={darthVader} alt="Darth Vader" />
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
