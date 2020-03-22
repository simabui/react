import React from 'react';
import PropTypes from 'prop-types';

const PositiveFeedback = ({ callback = null }) => (
  <li>Positive Feedback: {callback()}%</li>
);

PositiveFeedback.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default PositiveFeedback;
