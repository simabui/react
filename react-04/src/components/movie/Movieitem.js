/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import styles from './Movieitem.module.css';
import Movielinks from '../movielinks/Movielinks';
import Cast from '../cast/Cast';
import Review from '../review/Review';

const MovieItem = ({
  release_date,
  original_title,
  genres,
  poster_path,
  overview,
  match,
}) => {
  // get year from string
  const year = release_date.match(/([12]\d{3})/);
  return (
    <Fragment>
      <div className={styles.movie}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="movie"
          className={styles.movieImage}
        />
        <div className={styles.movieDetails}>
          <h1>
            {original_title}({year[0]})
          </h1>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* set path in links */}
      <Movielinks path={match.url} />
      {/* route to cast and reviews */}
      <Route path={`${match.url}/cast`} component={Cast} />
      <Route path={`${match.url}/reviews`} component={Review} />
    </Fragment>
  );
};

MovieItem.propTypes = {
  original_title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  poster_path: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  match: PropTypes.string.isRequired,
};
export default withRouter(MovieItem);
