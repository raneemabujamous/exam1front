import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Favarouite from "./component/Favarouite";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/fav">
              <Favarouite />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
