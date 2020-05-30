import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";



import Login from "./pages/Login";
import Form from "./pages/Form";
import Habits from "./pages/Habits";
import Leaderboard from "./pages/Leaderboard";

import "./App.css";

class App extends Component {

  render() {
    return (
      <Router>
      <div className="page">

      <Route exact path="/" component={Login} />
      <Route exact path="/habits" component={Habits} />
      <Route exact path="/form" component={Form} />
      <Route exact path="/leaderboard" component={Leaderboard} />

      </div>
      
      </Router>
    );
  }
}

export default App;
