import React, { Component, Fragment, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navlink from './navlink/Navlink';

// REACT lazy
const AsyncHome = lazy(() =>
  import(/* webpackChunkName: "home" */ './home/Home'),
);
const AsyncMovie = lazy(() =>
  import(/* webpackChunkName: "movie" */ './movie/Movie'),
);
const AsyncMovieSearch = lazy(() =>
  import(/* webpackChunkName: "movieSearch" */ './moviesearch/MovieSearch'),
);

export default class App extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Navlink />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/movies/:id" component={AsyncMovie} />
            <Route path="/movies" component={AsyncMovieSearch} />
            <Route path="/" component={AsyncHome} />
          </Switch>
        </Suspense>
      </Fragment>
    );
  }
}
