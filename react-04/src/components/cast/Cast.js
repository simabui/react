/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
import CastTemplate from './CastTemplate';
import * as MOVIEAPI from '../../services/services';

// const getID = props => props.location.pathname.match(/(\d+)/)[0];

class Cast extends Component {
  state = {
    cast: null,
  };

  componentDidMount() {
    if (this.props.location.state) {
      const { id } = this.props.location.state;
      this.updateState(id);
    }
    // if without
    // const id = getID(this.props);
    // this.updateState(id);
  }

  updateState = async id => {
    const collection = await MOVIEAPI.getCast(id);
    this.setState({
      cast: collection.data.cast,
    });
  };

  render() {
    const { cast } = this.state;
    return <Fragment>{cast && <CastTemplate cast={cast} />}</Fragment>;
  }
}

export default Cast;
