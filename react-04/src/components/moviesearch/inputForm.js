/** @jsx jsx */
import { useState } from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

const form = css`
  display: flex;
  align-items: center;
`;

const formButton = css`
  font-weight: 700;
  cursor: pointer;
  margin-left: 10px;
  background-color: #fff;
  border: 1px solid #d2cfcf;
  border-radius: 5px;
`;
const formInput = css`
  width: 200px;
  padding: 1px 5px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #d2cfcf;
`;

const InputForm = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(value);
  };

  const handleInput = e => {
    const { value: movie } = e.target;
    setValue(movie);
  };

  return (
    <form onSubmit={handleSubmit} css={form}>
      <input
        type="text"
        autoComplete="off"
        placeholder="Search movie"
        name="search"
        required
        css={formInput}
        onChange={handleInput}
        value={value}
      />
      <button type="submit" css={formButton}>
        search
      </button>
    </form>
  );
};

InputForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default InputForm;
