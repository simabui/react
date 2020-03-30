import React from 'react';
import PropTypes from 'prop-types';
import styles from './Reviews.module.css';

const ReviewTemplate = ({ reviews }) => (
  <ul>
    {reviews.length > 0 ? (
      reviews.map(r => (
        <li key={r.id}>
          <div>
            <p className={styles.author}>{r.author}</p>
            <p>{r.content}</p>
          </div>
        </li>
      ))
    ) : (
      <p>No reviews</p>
    )}
  </ul>
);

ReviewTemplate.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReviewTemplate;
