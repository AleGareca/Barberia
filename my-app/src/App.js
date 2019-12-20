import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import Home from './component/Home';
import c from './component/Carrucel';



export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Route>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </Route>
      </BrowserRouter>);
  }
}

