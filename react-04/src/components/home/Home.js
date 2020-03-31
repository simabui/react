import React, { Component, Fragment } from 'react';
import * as MOVIEAPI from '../../services/services';
import Movieslist from '../movieslist/Movieslist';

export default class Home extends Component {
  state = {
    movies: [],
    error: null,
  };

  async componentDidMount() {
    try {
      const request = await MOVIEAPI.getTrending();
      this.setState({ movies: request.data.results });
    } catch (error) {
      this.setState({ error: error.response.data.status_message });
    }
  }

  render() {
    const { movies, error } = this.state;
    return (
      <Fragment>
        <h1>Trending today</h1>
        <Movieslist movies={movies} />
        {error && <p>{error}</p>}
      </Fragment>
    );
  }
}
