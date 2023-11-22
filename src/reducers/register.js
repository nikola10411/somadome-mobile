import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
  } from '../constants/ActionTypes';
  
  const initialState = {
    loading: false,
    error: null,
    user: null,
  };
  
  function register(state = initialState, action) {
    switch (action.type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          user: action.payload,
        };
      case REGISTER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case REGISTER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      default:
        return state;
    }
  }
  
  export default register