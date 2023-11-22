import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers/index';

const middlewares = [];

const {logger} = require('redux-logger');

middlewares.push(logger);

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, ...middlewares),
);

export default store;
