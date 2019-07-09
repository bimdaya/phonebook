import { combineReducers } from 'redux';
import getContactsReducer from './contacts';

const appReducer = combineReducers({ contacts: getContactsReducer });

export default appReducer;
