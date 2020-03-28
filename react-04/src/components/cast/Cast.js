import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cast.module.css';

const Cast = ({ cast }) => {
  return (
    <ul className={styles.actors}>
      {cast.map(actor => (
        <li key={actor.id}>
          <div className={styles.actorsList}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
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
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cast;
