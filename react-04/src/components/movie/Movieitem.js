/* eslint-disable react/forbid-prop-types */
// FIXME: fix copy pathes from cast and review
import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import Movielinks from '../movielinks/Movielinks';
import MovieTemplate from './MovieTemplate';
import Cast from '../cast/Cast';
import Review from '../review/Review';

class MovieItem extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };

  // back to home page
  handleGoHome = () => {
    const { history, location } = this.props;
    if (location.state) {
      history.push(location.state.from);
      return;
    }
    history.push('/');
  };

  render() {
    const { match } = this.props;
    return (
      <Fragment>
        <MovieTemplate {...this.props} onHome={this.handleGoHome} />
        {/* links */}
        <Movielinks />
        {/* route to cast and reviews */}
        <Route path={`${match.url}/cast`} component={Cast} />
        <Route path={`${match.url}/reviews`} component={Review} />
      </Fragment>
    );
  }
}

export default withRouter(MovieItem);
