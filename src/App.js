import React from "react";
import Search from './Components/Search'
import { Switch, Route } from 'react-router'
import Githubapi from "./Components/Githubapi";
import SearchBar2 from "./Components/SearchBar2";
import  Hooks from "./Components/Hooks";

class App extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Switch>
          <Route exact path = "/" component = { Search }></Route>
       
          <Route path = "/api" component = { Githubapi }></Route>

          <Route path = "/searchbar" component = { SearchBar2}></Route>

          <Route path = "/hooks" component = { Hooks }></Route>
        </Switch>    
      </div>
    );
  }
}
export default App;
