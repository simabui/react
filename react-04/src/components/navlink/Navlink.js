import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navlink.scss';

const NavLinks = () => (
  <ul className="links">
    <li>
      <NavLink to="/" className="link" activeClassName="active-link" exact>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/movies" className="link" activeClassName="active-link">
        Movies
      </NavLink>
    </li>
  </ul>
);

export default NavLinks;
