/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Fragment } from 'react';
import CastTemplate from './CastTemplate';

const Cast = ({ cast }) => (
  <Fragment>
    <CastTemplate cast={cast} />
  </Fragment>
);

export default Cast;
