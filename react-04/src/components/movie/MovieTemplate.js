/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Movieitem.module.css';

const MovieTemplate = ({
  release_date,
  original_title,
  genres,
  poster_path,
  overview,
  onHome,
}) => {
  // get year from string
  const year = release_date.match(/([12]\d{3})/);
  return (
    <Fragment>
      {/*  render movie details */}
      <button type="button" onClick={onHome} className={styles.button}>
        ← Back
      </button>
      <div className={styles.movie}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="poster"
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
    </Fragment>
  );
};

MovieTemplate.propTypes = {
  original_title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  poster_path: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  onHome: PropTypes.func.isRequired,
};

export default MovieTemplate;
