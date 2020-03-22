import React, { Fragment } from 'react';
import Profile from './Profile';
import users from './user.json';

const App = () => (
  <Fragment>
    <Profile user={users} />
  </Fragment>
);
export default App;
