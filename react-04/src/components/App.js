import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import Navlink from './navlink/Navlink';
import Movie from './movie/Movie';
import MovieSearch from './moviesearch/MovieSearch';

export default class App extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Navlink />
        <Switch>
          <Route path="/movies/:id" component={Movie} />
          <Route path="/movies" component={MovieSearch} />
          <Route path="/" component={Home} />
        </Switch>
      </Fragment>
    );
  }
}
