import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PhotoGrid from "../photo-grid";
import Single from "../single";

class Home extends Component {
  //   state = {};
  render() {
    return (
      <Router>
        <div>
          <div className="header">
            <h1>
              <Link to="/">Redux Photo Gallery</Link>
            </h1>
          </div>
          <Switch>
            <Route path="/view/:postId" component={Single} />
            <Route path="/view" component={PhotoGrid} />
            <Route exact path="/" />
            <Route>404 Not Found</Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Home;
