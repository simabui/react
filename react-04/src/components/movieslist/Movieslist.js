import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movieslist = ({ movies }) => (
  <ul>
    {movies.map(movie => (
      <li key={movie.id}>
        <Link to={`/movie/${movie.id}`}>
          {movie.original_title ? movie.original_title : movie.name}
        </Link>
      </li>
    ))}
  </ul>
);

Movieslist.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Movieslist;
