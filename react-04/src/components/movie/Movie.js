import React, { Component, Fragment } from 'react';
import Movieitem from './Movieitem';
import * as MOVIEAPI from '../../services/services';

function getParams(props) {
  return props.match.params.id;
}

export default class Movie extends Component {
  state = {
    movieDetails: null,
  };

  async componentDidMount() {
    // get id from path and send request
    const id = getParams(this.props);
    const movieDetails = await MOVIEAPI.getMovie(id);
    this.setState({ movieDetails: movieDetails.data });
  }

  render() {
    const { movieDetails } = this.state;
    return (
      <Fragment>{movieDetails && <Movieitem {...movieDetails} />}</Fragment>
    );
  }
}
