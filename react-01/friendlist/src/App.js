import React, { Fragment } from 'react';
import FriendList from './Friends';
import data from './friends.json';

const App = () => (
  <Fragment>
    <FriendList list={data} />
  </Fragment>
);
export default App;
