function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('./assets', false));
//import 'font-awesome/css/font-awesome.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app.component.jsx"

ReactDOM.render(
  <App/>,
  document.getElementById('AppInit')
);