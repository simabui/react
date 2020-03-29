import React from 'react';
import PropTypes from 'prop-types';

const InputForm = ({ onSearch }) => {
  return (
    <form onSubmit={onSearch}>
      <input
        type="text"
        autoComplete="off"
        placeholder="Search movie"
        name="search"
        required
      />
      <button type="submit">search</button>
    </form>
  );
};

InputForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default InputForm;
