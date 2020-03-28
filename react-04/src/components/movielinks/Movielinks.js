/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './Movielinks.module.css';

const Movielinks = ({ match }) => (
  <ul className={styles.links}>
    <li>
      <NavLink
        to={`${match.url}/cast`}
        className={styles.link}
        activeClassName={styles['active-link']}
      >
        Cast
      </NavLink>
    </li>
    <li>
      <NavLink
        to={`${match.url}/reviews`}
        className={styles.link}
        activeClassName={styles['active-link']}
      >
        Review
      </NavLink>
    </li>
  </ul>
);

Movielinks.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(Movielinks);
