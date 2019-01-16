import React, { Component, Fragment } from "react";
import IndividualMovie from "./IndividualMovie";
import movieList from "../helpers/movies";
import darthVader from "../assets/images/darth-vader.png";
import "../assets/css/App.css";

class App extends Component {
  render() {
    const individualMovie = movieList.map(movie => {
      return (
        <IndividualMovie name={movie.name} key={movie.year} year={movie.year} />
      );
    });

    return (
      <div className="container">
        <h1 className="title">Star Wars Movie Checklist</h1>
        <img id="darth-vader" src={darthVader} alt="Darth Vader" />
        <div className="checklist">
          <div className="checklist-items">
            <ul>{individualMovie}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
