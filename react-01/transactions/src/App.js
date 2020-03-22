import React, { Fragment } from 'react';
import Transactions from './Transactions';
import data from './transactions.json';

const App = () => (
  <Fragment>
    <Transactions transactions={data} />
  </Fragment>
);
export default App;
