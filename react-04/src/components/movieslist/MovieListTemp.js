/* eslint-disable react/prop-types */
import React from 'react';

export default function MovieListTemp({ title, poster, year, rating }) {
  const formattedYear = new Date(year).getFullYear() || '';

  return (
    <>
      <figure>
        <img
          src={
            poster
              ? `https://image.tmdb.org/t/p/w500${poster}`
              : '/images/movie-placeholder.svg'
          }
          alt="poster"
          className="movies__img"
        />
        <figcaption>
          <div className="movies__text">
            <div className="movies__desc">
              <h2>{title}</h2>
              <span>{formattedYear}</span>
            </div>
            <span className="movies__star">{rating}</span>
          </div>
        </figcaption>
      </figure>
    </>
  );
}
