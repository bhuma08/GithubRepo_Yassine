import React from "react";
import All from './Containers/All';
import Search from './Components/Search'
import { Switch, Route } from 'react-router'
import Githubapi from "./Components/Githubapi";

class App extends React.Component {
  state = {};
  render() {
    return (
      <div>
        {/* <Switch>
          <Route path = "/githubapi" component = { Githubapi }></Route>
        </Switch> */}
        <Switch>
          <Route path = "/search" component = { Search }></Route>
        </Switch>
        {/* <All></All> */}
      
      </div>
    );
  }
}
export default App;
