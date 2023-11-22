import {
  LOCATION_LIST_SUCCESS,
  LOCATION_LIST_FAILURE,
  LOCATION_LIST_REQUEST,
} from '../constants/ActionTypes';

const initialState = {
  loading: false,
  error: null,
  locationList: null,
};

function locationList(state = initialState, action) {
  switch (action.type) {
    case LOCATION_LIST_SUCCESS:
      return {
        ...state,
        locationList: action.payload,
      };
    case LOCATION_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOCATION_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

export default locationList;
