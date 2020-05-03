import React, { Component, Fragment } from 'react';
import Movieitem from './Movieitem';
import * as MOVIEAPI from '../../services/services';

function getParams(props) {
  return props.match.params.id;
}

function getter(movie) {
  return {
    release_date: movie.release_date,
    original_title: movie.original_title,
    genres: movie.genres,
    poster_path: movie.poster_path,
    overview: movie.overview,
    id: movie.id,
  };
}

export default class Movie extends Component {
  state = {
    movie: null,
    error: null,
  };

  async componentDidMount() {
    // get id from path and send request
    const id = getParams(this.props);
    try {
      const response = await MOVIEAPI.getMovie(id);
      this.setState({ movie: getter(response.data) });
    } catch (err) {
      this.setState({ error: err.response.data.status_message });
    }
  }

  render() {
    const { movie, error } = this.state;
    return (
      <Fragment>
        {movie && <Movieitem movie={movie} />}
        {error && <p>error</p>}
      </Fragment>
    );
  }
}
