import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ children }) => <p>{children}</p>;

Notification.defaultProps = {
  children: 'placeholder',
};

Notification.propTypes = {
  children: PropTypes.string,
};
export default Notification;
