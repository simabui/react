import React from 'react';
import PropTypes from 'prop-types';

const Statisctics = ({ good, neutral, bad, total, positivePercentage }) => {
  let isShown = false;
  // show statisctic if total not empty
  if (total > 0) isShown = true;
  // loop state
  return (
    <>
      <h2>Statistics</h2>
      {isShown ? (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive Feedback: {positivePercentage}%</li>
        </ul>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

Statisctics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statisctics;
