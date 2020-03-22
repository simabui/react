import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Statisctics = ({ obj = {} }) => (
  // loop state
  <Fragment>
    {Object.keys(obj).map(key => (
      <li key={key}>
        {key}: {obj[key]}
      </li>
    ))}
  </Fragment>
);

Statisctics.propTypes = {
  obj: PropTypes.shape({}).isRequired,
};

export default Statisctics;
