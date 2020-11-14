/* eslint-disable react/forbid-prop-types */
import React, { Fragment, Component, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter, Switch } from 'react-router-dom';
import Movielinks from './movielinks/Movielinks';
import MovieTemplate from './movietemplate/MovieTemplate';

// REACT lazy
const AsyncCast = lazy(() =>
  import(/* webpackChunkName: "cast" */ './cast/Cast'),
);
const AsyncReview = lazy(() =>
  import(/* webpackChunkName: "review" */ './review/Review'),
);

class MovieItem extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    movie: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };

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
    const { match, movie, location } = this.props;
    return (
      <Fragment>
        <MovieTemplate
          template={movie}
          onHome={this.handleGoHome}
          location={location}
        />
        <Movielinks />
        {/* links */}
        <Suspense fallback={<div> loading...</div>}>
          <Switch>
            <Route
              path={`${match.url}/cast`}
              render={props => <AsyncCast {...props} id={movie.id} />}
            />
            <Route
              path={`${match.url}/reviews`}
              render={props => <AsyncReview {...props} id={movie.id} />}
            />
          </Switch>
        </Suspense>
      </Fragment>
    );
  }
}

export default withRouter(MovieItem);
