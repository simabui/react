import React from 'react';
import PropTypes from 'prop-types';
import './ReviewTemplate.scss';

const ReviewTemplate = ({ reviews }) => (
  <ul className="review">
    {reviews.length > 0 ? (
      reviews.map(r => (
        <li key={r.id}>
          <div>
            <p className="reviw__author">{r.author}</p>
            <p className="review__text">{r.content}</p>
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
