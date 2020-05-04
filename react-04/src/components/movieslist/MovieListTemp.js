/* eslint-disable react/prop-types */
import React from 'react';

export default function MovieListTemp({ title, poster, year, rating }) {
  const formattedYear = new Date(year).getFullYear() || '';

  return (
    <>
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt="poster"
          className="movie__img"
        />
        <figcaption>
          <div className="movie__text">
            <h2>{title}</h2>
            <span>{formattedYear}</span>
            <span className="movie__star">{rating}</span>
          </div>
        </figcaption>
      </figure>
    </>
  );
}
