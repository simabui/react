/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

const ButtonList = css`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const button = css`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  width: 100px;
  margin-left: 5px;
  padding: 10px;
  color: #fff;
`;

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div css={ButtonList}>
    {options.map(option => (
      <button
        key={option.type}
        css={button}
        type="button"
        onClick={onLeaveFeedback}
        style={{ backgroundColor: option.color }}
      >
        {option.type}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
