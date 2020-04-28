/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

const input = css`
  width: 200px;
  padding: 3px;
`;
const Filter = ({ getFIlterValue, value }) => (
  <div>
    <p>Find contacts by name</p>
    <input type="text" onChange={getFIlterValue} css={input} value={value} />
  </div>
);

export default Filter;

Filter.propTypes = {
  getFIlterValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
