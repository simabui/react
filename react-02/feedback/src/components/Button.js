// import React from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const button = css`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  width: 100px;
  margin-left: 5px;
  padding: 10px;
  color: #fff;
`;

const Button = ({ children = 'placeholder', callback, className }) => {
  return (
    <button css={button} type="button" onClick={callback} className={className}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
};
Button.propTypes = {
  children: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;
