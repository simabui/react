import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import Navlink from './navlink/Navlink';
import Movie from './movie/Movie';

export default class App extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Navlink />
        <Switch>
          <Route path="/movies/:id" component={Movie} />
          <Route path="/" component={Home} />
        </Switch>
      </Fragment>
    );
  }
}
