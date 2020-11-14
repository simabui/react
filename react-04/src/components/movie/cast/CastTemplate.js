import React from 'react';
import PropTypes from 'prop-types';
import './CastTemplate.scss';

const CastTemplate = ({ cast }) => (
  <ul className="actors">
    {cast.length > 0 ? (
      cast.map(actor => (
        <li key={actor.id}>
          <div className="actorsList">
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : '/images/person-gray.jpg'
              }
              alt="actor"
              className="image"
            ></img>
            <p className="actorText">
              <b>{actor.name}</b> as
              <span className="actorCharacter">{actor.character}</span>
            </p>
          </div>
        </li>
      ))
    ) : (
      <p>No information</p>
    )}
  </ul>
);

CastTemplate.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CastTemplate;
