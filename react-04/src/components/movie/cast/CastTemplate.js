import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cast.module.css';
import placeholder from '../../../images/person-gray.jpg';

const CastTemplate = ({ cast }) => (
  <ul className={styles.actors}>
    {cast.map(actor => (
      <li key={actor.id}>
        <div className={styles.actorsList}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : placeholder
            }
            alt="actor"
            className={styles.image}
          ></img>
          <p className={styles.actorText}>
            {actor.character} /{' '}
            <span className={styles.actorName}>{actor.name}</span>
          </p>
        </div>
      </li>
    ))}
  </ul>
);

CastTemplate.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CastTemplate;
