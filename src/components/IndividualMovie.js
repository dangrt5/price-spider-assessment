import React from "react";
import "../assets/css/IndividualMovie.css";

const IndividualMovie = props => {
  return (
    <li class="individual-movie">
      <div>
        <div className="check-box" />
        <h3>{props.name}</h3>
      </div>
    </li>
  );
};

export default IndividualMovie;
