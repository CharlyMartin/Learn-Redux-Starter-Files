import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './header';
import Main from './main';


const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  )
};

export default App;