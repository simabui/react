/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import InputForm from './inputForm';
import Movieslist from '../movieslist/Movieslist';
import * as movieAPI from '../../services/services';

function parseString(props) {
  return queryString.parse(props.location.search).search;
}

export default class MovieSearch extends Component {
  state = {
    movies: null,
    error: null,
  };

  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };

  async componentDidMount() {
    // get parsed url search query
    const movie = parseString(this.props);
    if (movie) {
      try {
        const collection = await movieAPI.searchMovie(movie);
        this.setState({ movies: collection.data.results });
      } catch (err) {
        this.setState({ error: err.response.data.status_message });
      }
    }
  }

  handleInput = async e => {
    e.preventDefault();
    const { value } = e.currentTarget.elements.search;
    const { history, location } = this.props;

    // change url string
    history.push({
      ...location,
      search: `search=${value}`,
    });

    try {
      const collection = await movieAPI.searchMovie(value);
      this.setState({ movies: collection.data.results });
    } catch (err) {
      this.setState({ error: err.response.data.status_message });
    }
  };

  render() {
    const { movies, error } = this.state;
    return (
      <div>
        <InputForm onSearch={this.handleInput} />
        {movies && <Movieslist movies={movies} />}
        {error && <p>{error}</p>}
      </div>
    );
  }
}
