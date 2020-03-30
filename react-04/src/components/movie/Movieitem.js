/* eslint-disable react/forbid-prop-types */
import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import Movielinks from './movielinks/Movielinks';
import MovieTemplate from './MovieTemplate';
import Cast from './cast/Cast';
import Review from './review/Review';
import * as MOVIEAPI from '../../services/services';

class MovieItem extends Component {
  state = {
    cast: null,
    review: null,
  };

  static propTypes = {
    match: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };

  async componentDidMount() {
    const { id } = this.props;
    const casts = await MOVIEAPI.getCast(id);
    const reviews = await MOVIEAPI.getReview(id);
    this.setState({
      cast: casts.data.cast,
      review: reviews.data.results,
    });
  }

  // back to home page
  handleGoHome = () => {
    const { history, location } = this.props;
    // back to previous page
    if (location.state) {
      history.push(location.state.from);
      return;
    }
    // back to home
    history.push('/');
  };

  render() {
    const { match } = this.props;
    const { cast, review } = this.state;
    return (
      <Fragment>
        <MovieTemplate {...this.props} onHome={this.handleGoHome} />
        {/* links */}
        <Movielinks />
        {/* route to cast and reviews */}
        {cast && (
          <Route
            path={`${match.url}/cast`}
            render={props => <Cast {...props} cast={cast} />}
          />
        )}
        {review && (
          <Route
            path={`${match.url}/reviews`}
            render={props => <Review {...props} review={review} />}
          />
        )}
      </Fragment>
    );
  }
}

export default withRouter(MovieItem);
