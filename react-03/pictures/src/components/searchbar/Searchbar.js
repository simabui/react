import React from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => (
  <header className={styles.Searchbar}>
    <form className={styles.SearchForm} onSubmit={onSubmit}>
      <button type="submit" className={styles['SearchForm-button']}>
        <span className={styles['SearchForm-button-label']}>Search</span>
      </button>

      <input
        className={styles['SearchForm-input']}
        type="text"
        autoComplete="off"
        placeholder="Search images and photos"
        name="search"
      />
    </form>
  </header>
);

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
