/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './Movielinks.module.css';

const Movielinks = ({ match, location }) => (
  <ul className={styles.links}>
    <li>
      <NavLink
        to={{
          pathname: `${match.url}/cast`,
          // custom state
          state: { from: location, id: match.params.id },
        }}
        className={styles.link}
        activeClassName={styles['active-link']}
      >
        Cast
      </NavLink>
    </li>
    <li>
      <NavLink
        to={{
          pathname: `${match.url}/reviews`,
          // custom state
          state: { from: location, id: match.params.id },
        }}
        className={styles.link}
        activeClassName={styles['active-link']}
      >
        Reviews
      </NavLink>
    </li>
  </ul>
);

Movielinks.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(Movielinks);
