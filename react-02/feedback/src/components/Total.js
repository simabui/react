import React from 'react';
import PropTypes from 'prop-types';

const Total = ({ callback }) => <li>Total: {callback()}</li>;

Total.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default Total;
