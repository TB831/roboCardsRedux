import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from 'redux-thunk';
import "./index.css";
import App from "./containers/App.js";
import registerServiceWorker from "./registerServiceWorker";
import { searchRobots } from "./reducer";
import "tachyons";

const logger = createLogger();  // Middleware
const store = createStore(searchRobots, applyMiddleware(thunkMiddleware, logger)); // Whenever we add middleware, we must add applyMiddleWare(), parameters are the middleware

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById("root"));

registerServiceWorker();
