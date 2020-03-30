/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Fragment } from 'react';
import ReviewTemplate from './ReviewTemplate';

const Review = ({ review }) => {
  return (
    <Fragment>
      {review.length > 0 ? (
        <ReviewTemplate reviews={review} />
      ) : (
        <p>No reviews</p>
      )}
    </Fragment>
  );
};

export default Review;
