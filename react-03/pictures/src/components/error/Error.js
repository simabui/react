import React from 'react';
import PropTypes from 'prop-types';
import styles from './Error.module.css';

const Error = ({ text }) => <h1 className={styles.Error}>{text}</h1>;

Error.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Error;
