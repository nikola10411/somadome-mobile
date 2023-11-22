import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGOUT,
} from '../constants/ActionTypes';

import axios from 'axios';
import {API_URL} from '../constants/config';

export async function userLoginAPI(data) {
  return await axios.post(API_URL + '/login', data);
}

export function loginRequest(payload) {
  return {type: LOGIN_REQUEST, payload};
}
export function loginSuccess(payload) {
  return {type: LOGIN_SUCCESS, payload};
}
export function loginFailure(payload) {
  return {type: LOGIN_FAILURE, payload};
}
export function logoutUser() {
  return {type: LOGOUT};
}
