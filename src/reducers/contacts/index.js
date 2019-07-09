import {
	GET_CONTACTS_PENDING,
	GET_CONTACTS_FULFILLED,
	GET_CONTACTS_REJECTED
} from '../../constants/actions';

const initialState = {
  data: {},
  fetching: false,
  fetched: false,
  failed: false
};

/**
 * Reducer for loading contacts from api
 * @param {object} state initialState
 * @param {object} action action
 * @return {state}
 */
const getContactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS_PENDING:
      return {
        ...state,
        data: {},
        fetching: true,
        fetched: false,
        failed: false
      };
    case GET_CONTACTS_FULFILLED:
      return {
        ...state,
        data: action.payload,
        fetching: false,
        fetched: true,
        failed: false
      };
    case GET_CONTACTS_REJECTED:
      return {
        ...state,
        data: {},
        fetching: false,
        fetched: false,
        failed: true
      };
    default:
      return state;
  }
};

export default getContactsReducer;
