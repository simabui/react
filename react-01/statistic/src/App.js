import React, { Fragment } from 'react';
import Statistics from './Statistics';
import data from './statistical-data.json';

const App = () => (
  <Fragment>
    <Statistics title="Upload stats" stats={data} />
  </Fragment>
);
export default App;
