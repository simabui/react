/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

const input = css`
  width: 100%;
  padding: 10px 0 10px 5px;
  border-radius: 5px;
  border: 1px solid #dedede;
  margin-top: 5px;
  font-size: 16px;
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
