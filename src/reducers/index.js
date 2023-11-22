import {combineReducers} from 'redux';

import login from './login';
import locationList from './locationlist';
import {LOGOUT} from '../constants/ActionTypes.js';

const appReducer = combineReducers({
  login,
  locationList,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    console.log('LogOut');
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
