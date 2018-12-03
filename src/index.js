import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from 'redux-thunk';
import "./index.css";
import App from "./containers/App.js";
import registerServiceWorker from "./registerServiceWorker";
import { searchRobots, requestRobots } from "./reducer";
import "tachyons";

const logger = createLogger();  // Middleware

const rootReducer = combineReducers({ searchRobots, requestRobots }); // Our root reducer that combines all our reducers
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)); // Whenever we add middleware, we must add applyMiddleWare(), parameters are the middleware

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById("root"));

registerServiceWorker();
