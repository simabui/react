import React, { Component, Fragment } from 'react';
import Movieitem from './Movieitem';
import * as MOVIEAPI from '../../services/services';

function getParams(props) {
  return props.match.params.id;
}

export default class Movie extends Component {
  state = {
    movieDetails: null,
    error: null,
  };

  async componentDidMount() {
    // get id from path and send request
    const id = getParams(this.props);
    try {
      const movieDetails = await MOVIEAPI.getMovie(id);
      this.setState({ movieDetails: movieDetails.data });
    } catch (err) {
      this.setState({ error: err.response.data.status_message });
    }
  }

  render() {
    const { movieDetails, error } = this.state;
    return (
      <Fragment>
        {movieDetails && <Movieitem {...movieDetails} />}
        {error && <p>error</p>}
      </Fragment>
    );
  }
}
