import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navlink.module.css';

const NavLinks = () => (
  <ul className={styles.links}>
    <li>
      <NavLink
        to="/"
        className={styles.link}
        activeClassName={styles['active-link']}
        exact
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/movies"
        className={styles.link}
        activeClassName={styles['active-link']}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default NavLinks;
