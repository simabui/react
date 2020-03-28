import React, { Component, Fragment } from 'react';
import * as MOVIEAPI from '../../services/services';
import Movieslist from '../movieslist/Movieslist';

export default class Home extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const request = await MOVIEAPI.getTrending();
    this.setState({ movies: request.data.results });
  }

  render() {
    const { movies } = this.state;
    return (
      <Fragment>
        <h1>Trending today</h1>
        <Movieslist movies={movies} />
      </Fragment>
    );
  }
}
