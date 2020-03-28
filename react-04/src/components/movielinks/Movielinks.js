import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import styles from './Movielinks.module.css';

const Movielinks = ({ path }) => (
  <ul className={styles.links}>
    <li>
      <NavLink
        to={`${path}/cast`}
        className={styles.link}
        activeClassName={styles['active-link']}
      >
        Cast
      </NavLink>
    </li>
    <li>
      <NavLink
        to={`${path}/reviews`}
        className={styles.link}
        activeClassName={styles['active-link']}
      >
        Review
      </NavLink>
    </li>
  </ul>
);

Movielinks.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Movielinks;
