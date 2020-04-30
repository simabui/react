import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ label }) => (
  <span style={{ color: '#ff0000', display: 'inline-block' }}>{label}</span>
);

Notification.defaultProps = {
  label: '',
};

Notification.propTypes = {
  label: PropTypes.string,
};
export default Notification;
