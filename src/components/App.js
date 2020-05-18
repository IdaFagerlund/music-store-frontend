import React from 'react';
import Test from "./test/ReduxTest"
import User from "./test/User"
import Admin from "./test/Admin"
import { BrowserRouter as Router } from "react-router-dom"
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={Admin}></Route>
        <Route path="/user" component={User}></Route>
        <Route path="/" component={Test}></Route>
      </Switch>
    </Router>
  );
}

export default App;
