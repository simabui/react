/* eslint-disable react/forbid-prop-types */
import React, { Fragment, Component, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import Movielinks from './movielinks/Movielinks';
import MovieTemplate from './MovieTemplate';
import * as MOVIEAPI from '../../services/services';

// REACT lazy
const AsyncCast = lazy(() =>
  import(/* webpackChunkName: "cast" */ './cast/Cast'),
);
const AsyncReview = lazy(() =>
  import(/* webpackChunkName: "review" */ './review/Review'),
);

class MovieItem extends Component {
  state = {
    cast: null,
    review: null,
    error: null,
  };

  static propTypes = {
    match: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };

  async componentDidMount() {
    const { id } = this.props;
    try {
      const casts = await MOVIEAPI.getCast(id);
      const reviews = await MOVIEAPI.getReview(id);
      this.setState({
        cast: casts.data.cast,
        review: reviews.data.results,
      });
    } catch (err) {
      this.setState({ error: err.response.data.status_message });
    }
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
    const { cast, review, error } = this.state;
    return (
      <Fragment>
        <MovieTemplate {...this.props} onHome={this.handleGoHome} />
        {/* links */}
        <Movielinks />
        {/* route to cast and reviews */}
        <Suspense fallback={<div>Cast loading...</div>}>
          {cast && (
            <Route
              path={`${match.url}/cast`}
              render={props => <AsyncCast {...props} cast={cast} />}
            />
          )}
        </Suspense>
        <Suspense fallback={<div>Review loading...</div>}>
          {review && (
            <Route
              path={`${match.url}/reviews`}
              render={props => <AsyncReview {...props} review={review} />}
            />
          )}
          {error && <p>error</p>}
        </Suspense>
      </Fragment>
    );
  }
}

export default withRouter(MovieItem);
