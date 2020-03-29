/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
import CastTemplate from './CastTemplate';
import * as MOVIEAPI from '../../services/services';

class Cast extends Component {
  state = {
    cast: null,
  };

  async componentDidMount() {
    const { id } = this.props.location.state;
    const collection = await MOVIEAPI.getCast(id);
    this.setState({
      cast: collection.data.cast,
    });
  }

  render() {
    const { cast } = this.state;
    return <Fragment>{cast && <CastTemplate cast={cast} />}</Fragment>;
  }
}

export default Cast;
