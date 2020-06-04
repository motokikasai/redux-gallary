import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Home extends Component {
  //   state = {};
  render() {
    return (
      <Router>
        <div>
          <h1>
            <Link to="/">Redux Photo Gallery</Link>
          </h1>
        </div>
      </Router>
    );
  }
}

export default Home;
