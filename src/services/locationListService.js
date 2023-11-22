import {
  LOCATION_LIST_REQUEST,
  LOCATION_LIST_FAILURE,
  LOCATION_LIST_SUCCESS,
} from '../constants/ActionTypes';

import axios from 'axios';
import {API_URL} from '../constants/config';

export async function locationListServiceApi(data) {
  return await axios.get(API_URL + '/locationlist', '');
}

export function locationListRequest(payload) {
  return {type: LOCATION_LIST_REQUEST, payload};
}
export function locationListSuccess(payload) {
  return {type: LOCATION_LIST_SUCCESS, payload};
}
export function locationListFailure(payload) {
  return {type: LOCATION_LIST_FAILURE, payload};
}
