/* eslint-disable camelcase */
import { Fragment } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

const movie = css`
  display: flex;
  align-items: flex-start;
`;

const movieDetails = css`
  margin-left: 40px;
  max-width: 650px;
`;

const movieImage = css`
  height: 500px;
`;

const button = css`
  margin-bottom: 10px;
  cursor: pointer;
  padding: 3px 10px;
  background-color: #fff;
  font-weight: 700;
  border: 1px solid #d2cfcf;
  border-radius: 5px;
`;

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
      <button type="button" onClick={onHome} css={button}>
        ← Back
      </button>
      <div css={movie}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="poster"
          css={movieImage}
        />
        <div css={movieDetails}>
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
