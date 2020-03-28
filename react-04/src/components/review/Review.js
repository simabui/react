import React from 'react';
import PropTypes from 'prop-types';
import styles from './Reviews.module.css';

const Review = ({ review }) => {
  return review.length > 0 ? (
    <ul>
      {review.map(r => (
        <li key={r.id}>
          <div>
            <p className={styles.author}>{r.author}</p>
            <p>{r.content}</p>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <p>no review</p>
  );
};

Review.propTypes = {
  review: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Review;
