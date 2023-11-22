import {
   REGISTER_REQUEST,
   REGISTER_SUCCESS,
   REGISTER_FAILURE,
  } from '../constants/ActionTypes';
  
  import axios from 'axios';
  import {API_URL} from '../constants/config';
  
  export async function userRegisterAPI(data) {
    return await axios.post(API_URL + '/register', data);
  }
  
  export function registerequest(payload) {
    return {type: REGISTER_REQUEST, payload};
  }
  export function registerSuccess(payload) {
    return {type: REGISTER_SUCCESS, payload};
  }
  export function registerFailure(payload) {
    return {type: REGISTER_FAILURE, payload};
  }

  