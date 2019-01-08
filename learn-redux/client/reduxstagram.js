// JS Packages
import React from 'react'; // if there's no path, it comes from the node_modules.
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import App from './components/app';

// CSS
import './styles/style.styl';

const appRouter = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

render(appRouter, document.querySelector('#root'));