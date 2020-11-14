import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './InputForm.scss';

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
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        autoComplete="off"
        placeholder="Search movie"
        name="search"
        required
        className="formInput"
        onChange={handleInput}
        value={value}
      />
      <button type="submit" className="formButton">
        search
      </button>
    </form>
  );
};

InputForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default InputForm;
