import React, { Component } from "react";
import "../assets/css/IndividualMovie.css";

class IndividualMovie extends Component {
  render() {
    return (
      <li className="individual-movie">
        <div>
          <div className="check-box" />
          <h3>{this.props.name}</h3>
        </div>
      </li>
    );
  }
}

export default IndividualMovie;
