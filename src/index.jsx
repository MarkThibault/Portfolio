function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./assets', false));
//import 'font-awesome/css/font-awesome.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from "./portfolio.jsx";

ReactDOM.render(
  <Portfolio/>,
  document.getElementById('AppInit')
);