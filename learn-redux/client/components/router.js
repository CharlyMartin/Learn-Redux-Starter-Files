import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './app';

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={App} />
    </BrowserRouter>
  )
}

export default Router;