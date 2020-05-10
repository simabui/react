import React from 'react';

const withRender = WrapperComponent => props => {
  console.log(`${WrapperComponent.name} render`);
  return <WrapperComponent {...props} />;
};

export default withRender;
