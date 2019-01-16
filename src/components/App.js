import React, { Component, Fragment } from "react";
import "../assets/css/App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="title">
          <h1>Star Wars Checklist</h1>
        </div>
        <div className="checklist">
          <div className="checklist-items">
            <ul>
              <li>Star Wars 1</li>
              <li>Star Wars 2</li>
              <li>Star Wars 3</li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
