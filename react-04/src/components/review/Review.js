/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
import ReviewTemplate from './ReviewTemplate';
import * as MOVIEAPI from '../../services/services';

class Review extends Component {
  state = {
    reviews: null,
  };

  async componentDidMount() {
    // get id from location.state
    console.log(this.props);
    console.log(this.state.reviews);
    const { id } = this.props.location.state;
    const collections = await MOVIEAPI.getReview(id);
    this.setState({
      reviews: collections.data.results,
    });
  }

  render() {
    const { reviews } = this.state;
    return (
      <Fragment>{reviews && <ReviewTemplate reviews={reviews} />}</Fragment>
    );
  }
}

export default Review;
