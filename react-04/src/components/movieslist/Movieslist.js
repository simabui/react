/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const Movieslist = ({ movies, location }) => (
  <ul>
    {movies.length > 0 ? (
      movies.map(movie => (
        <li key={movie.id}>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              // custom state
              state: { from: location },
            }}
          >
            {movie.original_title ? movie.original_title : movie.name}
          </Link>
        </li>
      ))
    ) : (
      <p>No Results</p>
    )}
  </ul>
);

Movieslist.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(Movieslist);
