/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

const author = css`
  font-weight: 700;
`;

const ReviewTemplate = ({ reviews }) => (
  <ul>
    {reviews.length > 0 ? (
      reviews.map(r => (
        <li key={r.id}>
          <div>
            <p css={author}>{r.author}</p>
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
