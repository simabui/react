/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const error = css`
  width: 300px;
  position: absolute;
  top: 10px;
  right: 15px;
  padding: 15px 20px;
  background-color: red;
  color: #fff;
  border-radius: 5px;
  font-weight: 700;
`;
const p = css`
  text-align: center;
`;

const ErrorDuplicate = () => (
  <div css={error}>
    <p css={p}>Name is already in the list!</p>
  </div>
);

export default ErrorDuplicate;
