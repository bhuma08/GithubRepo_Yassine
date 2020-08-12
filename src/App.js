import React from "react";
import Search from './Components/Search'
import { Switch, Route } from 'react-router'
import Githubapi from "./Components/Githubapi";

class App extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Switch>
          <Route exact path = "/" component = { Search }></Route>
        </Switch>    
        <Switch>
          <Route exact path = "/api" component = { Githubapi }></Route>
        </Switch>    
      </div>
    );
  }
}
export default App;
