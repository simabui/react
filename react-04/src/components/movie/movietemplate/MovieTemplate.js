import React from 'react';
import PropTypes from 'prop-types';
import './movieTemplate.scss';

const MovieTemplate = ({ template, onHome }) => {
  // get year from string
  const year = template.release_date.match(/([12]\d{3})/);
  return (
    <>
      {/*  render movie details */}
      <button type="button" onClick={onHome} className="button">
        ← Back
      </button>
      <div className="movie">
        <img
          src={
            template.poster_path
              ? `https://image.tmdb.org/t/p/w500${template.poster_path}`
              : '/images/movie-placeholder.svg'
          }
          alt="poster"
          className="movieImage"
        />
        <div className="movieDetails">
          <h1>
            {template.original_title}({year[0]})
          </h1>
          <h2>Overview</h2>
          {template.overview ? <p>{template.overview}</p> : <p>No Overview</p>}
          <h2>Genres</h2>
          <ul>
            {template.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

MovieTemplate.propTypes = {
  template: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.object).isRequired,
    poster_path: PropTypes.string,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
  onHome: PropTypes.func.isRequired,
};

export default MovieTemplate;
