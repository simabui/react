import React from 'react';
import PropTypes from 'prop-types';
import styles from './inputForm.module.css';

const InputForm = ({ onSearch }) => {
  return (
    <form onSubmit={onSearch} className={styles.form}>
      <input
        type="text"
        autoComplete="off"
        placeholder="Search movie"
        name="search"
        required
        className={styles.formInput}
      />
      <button type="submit" className={styles.formButton}>
        search
      </button>
    </form>
  );
};

InputForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default InputForm;
