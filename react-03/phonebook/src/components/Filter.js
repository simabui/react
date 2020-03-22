/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

const input = css`
  width: 200px;
  padding: 3px;
`;
const Filter = ({ getFIlterValue }) => (
  <div>
    <p>Find contacts by name</p>
    <input type="text" onChange={getFIlterValue} css={input} />
  </div>
);

export default Filter;

Filter.propTypes = {
  getFIlterValue: PropTypes.func.isRequired,
};
