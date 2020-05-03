import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReviewTemplate from './ReviewTemplate';
import * as MOVIEAPI from '../../../services/services';

class Review extends Component {
  state = {
    review: null,
  };

  static propTypes = {
    id: PropTypes.number.isRequired,
  };

  async componentDidMount() {
    const { id } = this.props;
    try {
      const reviews = await MOVIEAPI.getReview(id);
      this.setState({
        review: reviews.data.results,
      });
    } catch (err) {
      console.log(err.response.data.status_message);
    }
  }

  render() {
    const { review } = this.state;
    return (
      <>
        {review && review.length > 0 ? (
          <ReviewTemplate reviews={review} />
        ) : (
          <p>No reviews</p>
        )}
      </>
    );
  }
}

export default Review;
