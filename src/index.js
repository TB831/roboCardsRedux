import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { robots } from './robots.js';

ReactDOM.render(
  <App robots={robots}/>
  , document.getElementById('root'));

registerServiceWorker();
