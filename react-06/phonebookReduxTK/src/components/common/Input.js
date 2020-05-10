import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const label = css`
  margin-bottom: 10px;
  padding: 5px;
`;
const input = css`
  width: 100%;
  padding: 10px 0 10px 5px;
  border-radius: 5px;
  border: 1px solid #dedede;
  margin-top: 5px;
  font-size: 16px;
`;

const Input = ({ id, text, type, value, onChange, name }) => (
  <label htmlFor={id} css={label}>
    {text}
    <input
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      id={id}
      css={input}
    />
  </label>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Input;
