import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CastTemplate from './CastTemplate';
import * as MOVIEAPI from '../../../services/services';

class Cast extends Component {
  state = {
    cast: null,
  };

  static propTypes = {
    id: PropTypes.number.isRequired,
  };

  async componentDidMount() {
    const { id } = this.props;
    try {
      const casts = await MOVIEAPI.getCast(id);
      this.setState({
        cast: casts.data.cast,
      });
    } catch (err) {
      console.log(err.response.data.status_message);
    }
  }

  render() {
    const { cast } = this.state;
    return <div>{cast && <CastTemplate cast={cast} />}</div>;
  }
}

export default Cast;
